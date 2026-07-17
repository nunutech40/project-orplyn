#!/usr/bin/env python3
import argparse
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests


APP_ID = "936619743392459"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/140.0.0.0 Safari/537.36"
)


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temporary.replace(path)


def profile_handle(profile_url):
    parsed = urlparse(profile_url)
    if parsed.scheme != "https" or parsed.netloc not in {
        "instagram.com",
        "www.instagram.com",
    }:
        raise ValueError("Only an Instagram HTTPS profile URL is accepted")
    handle = parsed.path.strip("/").split("/")[0]
    if not handle:
        raise ValueError("Instagram profile handle is missing")
    return handle


def caption_for(node):
    edges = node.get("edge_media_to_caption", {}).get("edges", [])
    if not edges:
        return ""
    return str(edges[0].get("node", {}).get("text") or "")


def post_media(node):
    sidecar = node.get("edge_sidecar_to_children", {}).get("edges")
    if sidecar:
        return [edge["node"] for edge in sidecar if edge.get("node")]
    return [node]


def media_metadata(node, media, num, handle):
    timestamp = int(node.get("taken_at_timestamp") or 0)
    post_date = datetime.fromtimestamp(timestamp, timezone.utc)
    shortcode = str(node["shortcode"])
    typename = str(node.get("__typename") or "")
    is_video_post = typename == "GraphVideo"
    description = caption_for(node)
    likes = node.get("edge_media_preview_like", {}).get("count", "")
    owner = node.get("owner") or {}
    dimensions = media.get("dimensions") or {}
    return {
        "date": post_date.isoformat(),
        "post_date": post_date.isoformat(),
        "post_id": str(node.get("id") or ""),
        "post_shortcode": shortcode,
        "post_url": (
            f"https://www.instagram.com/reel/{shortcode}/"
            if is_video_post
            else f"https://www.instagram.com/p/{shortcode}/"
        ),
        "type": "reel" if is_video_post else "post",
        "description": description,
        "tags": sorted(set(re.findall(r"#[\w]+", description))),
        "likes": likes,
        "username": owner.get("username") or handle,
        "fullname": owner.get("full_name") or "",
        "owner_id": str(owner.get("id") or ""),
        "num": num,
        "count": len(post_media(node)),
        "media_id": str(media.get("id") or ""),
        "shortcode": str(media.get("shortcode") or shortcode),
        "display_url": media.get("display_url") or "",
        "video_url": media.get("video_url") or "",
        "width": dimensions.get("width") or 0,
        "height": dimensions.get("height") or 0,
        "archive_source": "instagram_public_profile_snapshot",
    }


def download_file(session, url, target, timestamp, metadata, dry_run):
    if dry_run:
        print(f"# {target}")
        return "planned"

    target.parent.mkdir(parents=True, exist_ok=True)
    metadata_path = Path(str(target) + ".json")
    if target.exists() and target.stat().st_size > 0:
        if not metadata_path.exists():
            write_json(metadata_path, metadata)
        return "skipped"

    temporary = Path(str(target) + ".part")
    try:
        with session.get(url, stream=True, timeout=60) as response:
            response.raise_for_status()
            with temporary.open("wb") as handle:
                for chunk in response.iter_content(chunk_size=1024 * 256):
                    if chunk:
                        handle.write(chunk)
        temporary.replace(target)
        os.utime(target, (timestamp, timestamp))
        write_json(metadata_path, metadata)
        return "downloaded"
    finally:
        if temporary.exists():
            temporary.unlink()


def main():
    parser = argparse.ArgumentParser(
        description="Archive the latest public Instagram profile snapshot"
    )
    parser.add_argument("--profile-url", required=True)
    parser.add_argument("--download-root", required=True, type=Path)
    parser.add_argument("--state-dir", required=True, type=Path)
    parser.add_argument("--limit", type=int, default=12)
    parser.add_argument("--since")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    try:
        handle = profile_handle(args.profile_url)
        session = requests.Session()
        session.headers.update(
            {
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9",
                "Referer": args.profile_url,
                "User-Agent": USER_AGENT,
                "X-IG-App-ID": APP_ID,
            }
        )
        endpoint = "https://www.instagram.com/api/v1/users/web_profile_info/"
        response = session.get(endpoint, params={"username": handle}, timeout=45)
        response.raise_for_status()
        payload = response.json()
        user = payload.get("data", {}).get("user") or {}
        timeline = user.get("edge_owner_to_timeline_media") or {}
        nodes = [
            edge["node"]
            for edge in timeline.get("edges", [])
            if edge.get("node")
        ]
        if not nodes:
            raise RuntimeError("Public profile snapshot did not contain posts")

        if not args.dry_run:
            write_json(args.state_dir / "public-profile-snapshot.json", payload)

        since = None
        if args.since:
            since = datetime.strptime(args.since, "%Y-%m-%d").replace(
                tzinfo=timezone.utc
            )

        selected = nodes[: max(args.limit, 0)]
        counts = {"downloaded": 0, "skipped": 0, "planned": 0}
        media_total = 0
        for node in selected:
            timestamp = int(node.get("taken_at_timestamp") or 0)
            post_date = datetime.fromtimestamp(timestamp, timezone.utc)
            if since and post_date < since:
                continue
            shortcode = str(node["shortcode"])
            directory = args.download_root / handle / post_date.strftime("%Y/%m")
            for num, media in enumerate(post_media(node), 1):
                metadata = media_metadata(node, media, num, handle)
                media_id = metadata["media_id"]
                stem = f"{post_date:%Y-%m-%d}_{shortcode}_{num:02}_{media_id}"
                is_video = bool(media.get("is_video") or media.get("video_url"))
                primary_url = media.get("video_url") if is_video else media.get("display_url")
                if not primary_url:
                    continue
                primary_target = directory / f"{stem}.{'mp4' if is_video else 'jpg'}"
                status = download_file(
                    session, primary_url, primary_target, timestamp, metadata, args.dry_run
                )
                counts[status] += 1
                media_total += 1

                if is_video and media.get("display_url"):
                    preview_metadata = dict(metadata)
                    preview_metadata["media_id"] = f"{media_id}p"
                    preview_target = directory / f"{stem}p.jpg"
                    status = download_file(
                        session,
                        media["display_url"],
                        preview_target,
                        timestamp,
                        preview_metadata,
                        args.dry_run,
                    )
                    counts[status] += 1
                    media_total += 1

        available = len(nodes)
        total_posts = int(timeline.get("count") or available)
        verb = "planned" if args.dry_run else "archived"
        print(
            f"Public snapshot {verb}: {len(selected)} posts, {media_total} media files "
            f"({counts['downloaded']} downloaded, {counts['skipped']} existing)."
        )
        if total_posts > available:
            print(
                f"Public snapshot exposes {available} of {total_posts} posts. "
                "Use an exported cookies.txt file for the full incremental archive."
            )
    except Exception as error:
        print(f"Public snapshot fallback failed: {error}", file=sys.stderr)
        return 4
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
