#!/usr/bin/env python3
import argparse
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse


class GalleryParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.card_count = 0
        self.ids = []
        self.media_urls = []
        self.statuses = Counter()

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        classes = set(values.get("class", "").split())
        if tag == "article" and "asset-card" in classes:
            self.card_count += 1
            self.statuses[values.get("data-status", "missing")] += 1
        if values.get("id"):
            self.ids.append(values["id"])
        if tag in {"img", "source"} and values.get("src"):
            self.media_urls.append(values["src"])
        if tag == "video" and values.get("poster"):
            self.media_urls.append(values["poster"])


def main():
    parser = argparse.ArgumentParser(description="Verify the generated local review gallery")
    parser.add_argument("html", type=Path)
    parser.add_argument("--expected-cards", type=int, required=True)
    args = parser.parse_args()

    document = GalleryParser()
    document.feed(args.html.read_text(encoding="utf-8"))
    errors = []
    if document.card_count != args.expected_cards:
        errors.append(
            f"expected {args.expected_cards} cards, found {document.card_count}"
        )
    duplicate_ids = [item for item, count in Counter(document.ids).items() if count > 1]
    if duplicate_ids:
        errors.append(f"duplicate HTML IDs: {', '.join(duplicate_ids)}")

    missing = []
    empty = []
    for media_url in document.media_urls:
        parsed = urlparse(media_url)
        if parsed.scheme or parsed.netloc:
            continue
        media_path = (args.html.parent / unquote(parsed.path)).resolve()
        if not media_path.is_file():
            missing.append(str(media_path))
        elif media_path.stat().st_size == 0:
            empty.append(str(media_path))
    if missing:
        errors.append(f"missing media references: {len(missing)}")
    if empty:
        errors.append(f"empty media references: {len(empty)}")

    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1
    print(
        f"Gallery verified: {document.card_count} cards, "
        f"{len(document.media_urls)} media references, statuses {dict(document.statuses)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
