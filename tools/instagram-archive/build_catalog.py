#!/usr/bin/env python3
import argparse
import csv
import json
from collections import defaultdict
from pathlib import Path


BASE_FIELDS = [
    "post_date",
    "shortcode",
    "source_url",
    "post_type",
    "media_type",
    "media_count",
    "local_files",
    "caption",
    "hashtags",
    "likes_at_archive",
    "archive_status",
]

REVIEW_FIELDS = [
    "review_status",
    "priority",
    "funnel_role",
    "channel_use",
    "rights_checked",
    "notes",
]


def load_json(path):
    try:
        with path.open(encoding="utf-8") as handle:
            value = json.load(handle)
        return value if isinstance(value, dict) else None
    except (OSError, ValueError):
        return None


def metadata_media_path(path):
    if path.name.endswith(".json"):
        candidate = Path(str(path)[:-5])
        if candidate.exists():
            return candidate
    return None


def normalize_date(value):
    if value is None:
        return ""
    text = str(value)
    return text.replace("T", " ").split("+")[0].rstrip("Z")


def build_rows(media_root, source_url):
    grouped = defaultdict(list)
    for metadata_path in sorted(media_root.rglob("*.json")):
        metadata = load_json(metadata_path)
        media_path = metadata_media_path(metadata_path)
        if not metadata or media_path is None:
            continue

        shortcode = (
            metadata.get("post_shortcode")
            or metadata.get("sidecar_shortcode")
            or metadata.get("shortcode")
        )
        if not shortcode:
            continue
        grouped[str(shortcode)].append((metadata, media_path))

    rows = []
    for shortcode, items in grouped.items():
        items.sort(key=lambda item: (item[0].get("num") or 0, str(item[1])))
        lead = items[0][0]
        local_files = [str(path.relative_to(media_root)) for _, path in items]
        extensions = {path.suffix.lower() for _, path in items}
        if extensions and extensions <= {".mp4", ".webm", ".mov"}:
            media_type = "video"
        elif extensions.intersection({".mp4", ".webm", ".mov"}):
            media_type = "mixed"
        else:
            media_type = "image"

        tags = lead.get("tags") or []
        if isinstance(tags, str):
            tags = [tags]
        post_url = lead.get("post_url") or f"https://www.instagram.com/p/{shortcode}/"
        rows.append(
            {
                "post_date": normalize_date(lead.get("post_date") or lead.get("date")),
                "shortcode": shortcode,
                "source_url": post_url or source_url,
                "post_type": str(lead.get("type") or lead.get("subcategory") or "post"),
                "media_type": media_type,
                "media_count": len(local_files),
                "local_files": " | ".join(local_files),
                "caption": str(lead.get("description") or "").strip(),
                "hashtags": " ".join(str(tag) for tag in tags),
                "likes_at_archive": lead.get("likes") if lead.get("likes") is not None else "",
                "archive_status": "downloaded",
            }
        )

    rows.sort(key=lambda row: (row["post_date"], row["shortcode"]), reverse=True)
    return rows


def load_review_rows(path):
    if not path.exists():
        return {}
    with path.open(newline="", encoding="utf-8-sig") as handle:
        return {
            row.get("shortcode", ""): row
            for row in csv.DictReader(handle)
            if row.get("shortcode")
        }


def load_initial_curation(path):
    if path is None or not path.exists():
        return {}
    value = load_json(path)
    return value if isinstance(value, dict) else {}


def has_manual_review(row):
    return bool(
        row
        and (
            row.get("review_status") not in {None, "", "unreviewed"}
            or row.get("priority")
            or row.get("funnel_role")
            or row.get("channel_use")
            or row.get("rights_checked") not in {None, "", "pending"}
            or row.get("notes")
        )
    )


def write_csv(path, rows, fields):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    with temporary.open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)
    temporary.replace(path)


def main():
    parser = argparse.ArgumentParser(description="Build an editorial catalog from gallery-dl metadata")
    parser.add_argument("--media-root", required=True, type=Path)
    parser.add_argument("--catalog-csv", required=True, type=Path)
    parser.add_argument("--catalog-json", required=True, type=Path)
    parser.add_argument("--review-csv", required=True, type=Path)
    parser.add_argument("--source-url", required=True)
    parser.add_argument("--initial-curation-json", type=Path)
    args = parser.parse_args()

    rows = build_rows(args.media_root, args.source_url)
    write_csv(args.catalog_csv, rows, BASE_FIELDS)

    args.catalog_json.parent.mkdir(parents=True, exist_ok=True)
    temporary_json = args.catalog_json.with_suffix(args.catalog_json.suffix + ".tmp")
    temporary_json.write_text(
        json.dumps(rows, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temporary_json.replace(args.catalog_json)

    previous = load_review_rows(args.review_csv)
    initial_curation = load_initial_curation(args.initial_curation_json)
    review_rows = []
    current_codes = set()
    for row in rows:
        shortcode = row["shortcode"]
        current_codes.add(shortcode)
        saved = previous.get(shortcode, {})
        initial = initial_curation.get(shortcode, {})
        review_source = saved if has_manual_review(saved) else initial
        review = dict(row)
        review.update(
            {
                "review_status": review_source.get("review_status") or "unreviewed",
                "priority": review_source.get("priority") or "",
                "funnel_role": review_source.get("funnel_role") or "",
                "channel_use": review_source.get("channel_use") or "",
                "rights_checked": review_source.get("rights_checked") or "pending",
                "notes": review_source.get("notes") or "",
            }
        )
        review_rows.append(review)

    for shortcode, saved in previous.items():
        if shortcode in current_codes:
            continue
        retained = {field: saved.get(field, "") for field in BASE_FIELDS + REVIEW_FIELDS}
        retained["archive_status"] = "not_found_in_latest_scan"
        review_rows.append(retained)

    write_csv(args.review_csv, review_rows, BASE_FIELDS + REVIEW_FIELDS)
    media_count = sum(int(row["media_count"]) for row in rows)
    print(f"Catalog updated: {len(rows)} posts, {media_count} media files")
    print(args.catalog_csv)
    print(args.review_csv)


if __name__ == "__main__":
    main()
