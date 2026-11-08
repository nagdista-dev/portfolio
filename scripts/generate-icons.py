#!/usr/bin/env python3
"""Generate the Nagdista favicon and app icon set.

Run: python3 scripts/generate-icons.py
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC_ICONS = ROOT / "public" / "icons"
APP = ROOT / "src" / "app"
FONT = Path("/tmp/opencode/ogfonts/SpaceGrotesk%5Bwght%5D.ttf")

ACCENT = "#FF4D00"
PAPER = "#F7F4EF"


def draw_icon(size: int, *, rounded: bool = True, padding: float = 0.0) -> Image.Image:
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    radius = int(size * 0.19) if rounded else 0
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=ACCENT)

    # Keep the monogram inside the maskable safe zone when requested.
    box = size * (1 - padding * 2)
    font_size = int(box * 0.66)
    font = ImageFont.truetype(str(FONT), font_size)
    try:
        font.set_variation_by_name("Bold")
    except OSError:
        pass
    bbox = draw.textbbox((0, 0), "N", font=font)
    width = bbox[2] - bbox[0]
    height = bbox[3] - bbox[1]
    x = (size - width) / 2 - bbox[0]
    y = (size - height) / 2 - bbox[1]
    draw.text((x, y), "N", font=font, fill=PAPER)
    return image


def main() -> None:
    PUBLIC_ICONS.mkdir(parents=True, exist_ok=True)
    APP.mkdir(parents=True, exist_ok=True)

    for size in (16, 32, 48, 96, 192, 512):
        draw_icon(size).save(PUBLIC_ICONS / f"nagdista-{size}.png", optimize=True)

    draw_icon(180, rounded=False).save(PUBLIC_ICONS / "nagdista-180.png", optimize=True)
    draw_icon(180, rounded=False).save(APP / "apple-icon.png", optimize=True)
    draw_icon(512, rounded=False).save(
        PUBLIC_ICONS / "nagdista-maskable-512.png", optimize=True
    )

    ico = draw_icon(256)
    ico.save(
        APP / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )

    # A 48px copy at the public root keeps legacy /favicon.ico requests fresh.
    draw_icon(48).save(ROOT / "public" / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Wrote app icons and {len(list(PUBLIC_ICONS.glob('*.png')))} public icons")


if __name__ == "__main__":
    main()
