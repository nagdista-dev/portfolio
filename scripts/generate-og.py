#!/usr/bin/env python3
"""Generate the static Open Graph images in public/og/.

Requires Pillow with Raqm support and the font files in /tmp/opencode/ogfonts.
Run: python3 scripts/generate-og.py
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og"
FONT_DIR = Path("/tmp/opencode/ogfonts")

PAPER = "#F7F4EF"
INK = "#12110F"
MUTED = "#6B665E"
ACCENT = "#FF4D00"
LINE = "#D8D1C5"

W, H = 1200, 630

SPACE = FONT_DIR / "SpaceGrotesk%5Bwght%5D.ttf"
INTER = FONT_DIR / "Inter%5Bopsz%2Cwght%5D.ttf"
ALEX = FONT_DIR / "Alexandria%5Bwght%5D.ttf"
PLEX = FONT_DIR / "IBMPlexSansArabic-Regular.ttf"
PLEX_SEMI = FONT_DIR / "IBMPlexSansArabic-SemiBold.ttf"
PLEX_BOLD = FONT_DIR / "IBMPlexSansArabic-Bold.ttf"


def font(path: Path, size: int, weight: str | None = None) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(path), size)
    if weight:
        try:
            f.set_variation_by_name(weight)
        except OSError:
            pass
    return f


def display(locale: str, size: int, weight: str = "Bold") -> ImageFont.FreeTypeFont:
    return font(ALEX if locale == "ar" else SPACE, size, weight)


def body(locale: str, size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    if locale == "ar":
        return font(PLEX_BOLD if weight in {"Bold", "SemiBold"} else PLEX, size)
    return font(INTER, size, weight)


def measure(draw: ImageDraw.ImageDraw, text: str, f, direction: str) -> float:
    return draw.textlength(text, font=f, direction=direction)


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    f,
    fill: str,
    tracking: float,
) -> None:
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=f, fill=fill)
        x += measure(draw, char, f, "ltr") + tracking


def wrap(
    draw: ImageDraw.ImageDraw,
    text: str,
    f,
    max_width: int,
    direction: str,
    max_lines: int,
) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if measure(draw, candidate, f, direction) <= max_width or not current:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    if len(lines) <= max_lines:
        return lines
    # Drop the final line and truncate the previous one with an ellipsis.
    kept = lines[:max_lines]
    kept[-1] = kept[-1].rstrip(" .،,") + "…"
    return kept


def fit_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    locale: str,
    max_width: int,
    max_lines: int,
    start_size: int,
    min_size: int = 40,
    weight: str = "Bold",
) -> tuple[ImageFont.FreeTypeFont, list[str]]:
    direction = "rtl" if locale == "ar" else "ltr"
    size = start_size
    while size > min_size:
        f = display(locale, size, weight)
        lines = wrap(draw, text, f, max_width, direction, max_lines)
        if len(lines) <= max_lines and all(
            measure(draw, line, f, direction) <= max_width for line in lines
        ):
            return f, lines
        size -= 4
    f = display(locale, min_size, weight)
    return f, wrap(draw, text, f, max_width, direction, max_lines)


def base_canvas(bg: str = PAPER, fg: str = INK) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGB", (W, H), bg)
    draw = ImageDraw.Draw(image)
    # dot grid
    dot = "#0000000D" if bg == PAPER else "#FFFFFF12"
    for y in range(0, H, 26):
        for x in range(0, W, 26):
            draw.point((x, y), fill=dot)
    return image, draw


def wordmark(draw: ImageDraw.ImageDraw, bg: str, fg: str, accent: str = ACCENT) -> None:
    x, y = 72, 56
    draw.rectangle((x, y, x + 44, y + 44), fill=accent)
    n = font(SPACE, 30, "Bold")
    nw = measure(draw, "N", n, "ltr")
    draw.text((x + (44 - nw) / 2, y + 1), "N", font=n, fill="#FFFFFF")
    draw_tracked(draw, (x + 60, y + 9), "NAGDISTA", font(SPACE, 22, "Bold"), fg, 3.2)


def footer(
    draw: ImageDraw.ImageDraw,
    fg: str,
    muted: str,
    left: str,
    right: str,
    locale: str = "en",
) -> None:
    y = 548
    draw.line((72, y, W - 72, y), fill=muted, width=1)
    f = body(locale, 17, "Medium")
    direction = "rtl" if locale == "ar" else "ltr"
    if direction == "rtl":
        draw.text((W - 72, y + 22), left, font=f, fill=muted, anchor="ra", direction="rtl")
        draw.text((72, y + 22), right, font=f, fill=muted, anchor="la", direction="ltr")
    else:
        draw.text((72, y + 22), left, font=f, fill=muted, direction="ltr")
        draw.text((W - 72, y + 22), right, font=f, fill=muted, anchor="ra", direction="ltr")


def draw_asterisk(
    draw: ImageDraw.ImageDraw, cx: float, cy: float, radius: float, width: int, fill: str
) -> None:
    import math

    for index in range(8):
        angle = math.radians(index * 45)
        inner = radius * 0.34
        x1 = cx + math.cos(angle) * inner
        y1 = cy + math.sin(angle) * inner
        x2 = cx + math.cos(angle) * radius
        y2 = cy + math.sin(angle) * radius
        draw.line((x1, y1, x2, y2), fill=fill, width=width)


def generate_home(locale: str) -> None:
    image, draw = base_canvas()
    wordmark(draw, PAPER, INK)
    draw.text((W - 72, 66), "nagdista.com", font=body("en", 19, "Medium"), fill=MUTED, anchor="ra")

    if locale == "ar":
        draw.text(
            (W - 72, 196),
            "محمود النجدي",
            font=display("ar", 120),
            fill=INK,
            anchor="ra",
            direction="rtl",
            language="ar",
        )
        draw_asterisk(draw, 196, 292, 48, 11, ACCENT)
        sub = "مطور فول ستاك — القاهرة، مصر"
        draw.text(
            (W - 72, 424),
            sub,
            font=body("ar", 28, "SemiBold"),
            fill=MUTED,
            anchor="ra",
            direction="rtl",
            language="ar",
        )
        draw.rectangle((72, 477, 92, 497), fill=ACCENT)
        draw.text(
            (110, 473),
            "بورتفوليو 2026",
            font=display("ar", 23, "Medium"),
            fill=INK,
            direction="rtl",
            language="ar",
        )
    else:
        draw.text((72, 168), "MAHMOUD", font=display("en", 150), fill=INK)
        draw.text((72, 322), "ELNAGDY", font=display("en", 150), fill=INK)
        draw_asterisk(draw, 990, 402, 62, 13, ACCENT)
        sub = "Full-stack developer — Cairo, Egypt"
        draw.text((72, 500), sub, font=body("en", 30, "Medium"), fill=MUTED)
        draw.text(
            (W - 72, 466),
            "PORTFOLIO 2026",
            font=font(SPACE, 24, "Bold"),
            fill=INK,
            anchor="ra",
        )
        draw.rectangle((W - 268, 500, W - 72, 504), fill=ACCENT)

    footer(draw, INK, MUTED, "Mahmoud Elnagdy", "Cairo, EG / 2026", locale)
    image.save(OUT / f"home-{locale}.png", optimize=True)


def generate_home_square(locale: str) -> None:
    """Square card that survives Google's square result thumbnails."""
    size = 1200
    image = Image.new("RGB", (size, size), PAPER)
    draw = ImageDraw.Draw(image)
    for y in range(0, size, 26):
        for x in range(0, size, 26):
            draw.point((x, y), fill="#0000000D")

    # Brand row
    draw.rounded_rectangle((72, 72, 140, 140), radius=12, fill=ACCENT)
    n = font(SPACE, 46, "Bold")
    draw.text((106, 104), "N", font=n, fill="#FFFFFF", anchor="mm")
    draw_tracked(draw, (160, 88), "NAGDISTA", font(SPACE, 26, "Bold"), INK, 4.0)
    draw.text(
        (size - 72, 94),
        "nagdista.com",
        font=body("en", 22, "Medium"),
        fill=MUTED,
        anchor="ra",
    )

    draw_asterisk(draw, size / 2, 298, 18, 6, ACCENT)

    if locale == "ar":
        kicker = "مطور فول ستاك · القاهرة، مصر"
        lines = ["محمود", "النجدي"]
        direction = "rtl"
        language = "ar"
    else:
        kicker = "FULL-STACK DEVELOPER · CAIRO, EGYPT"
        lines = ["MAHMOUD", "ELNAGDY"]
        direction = "ltr"
        language = "en"

    kicker_font = body(locale, 30, "SemiBold") if locale == "ar" else font(SPACE, 25, "Medium")
    draw.text(
        (size / 2, 350),
        kicker,
        font=kicker_font,
        fill=MUTED,
        anchor="mm",
        direction=direction,
        language=language,
    )

    name_size = 200
    while name_size > 90:
        candidate = display(locale, name_size, "Bold")
        if all(measure(draw, line, candidate, direction) <= 1000 for line in lines):
            break
        name_size -= 4
    name_font = display(locale, name_size, "Bold")
    for line, y in zip(lines, (570, 790)):
        draw.text(
            (size / 2, y),
            line,
            font=name_font,
            fill=INK,
            anchor="mm",
            direction=direction,
            language=language,
        )

    # Footer
    draw.line((72, 1080, size - 72, 1080), fill=LINE, width=1)
    left = "محمود النجدي" if locale == "ar" else "Mahmoud Elnagdy"
    right = "بورتفوليو 2026" if locale == "ar" else "PORTFOLIO 2026"
    if locale == "ar":
        draw.text((size - 72, 1104), left, font=body("ar", 20, "SemiBold"), fill=MUTED, anchor="ra", direction="rtl", language="ar")
        draw.text((72, 1104), right, font=body("ar", 20, "SemiBold"), fill=MUTED, direction="rtl", language="ar")
    else:
        draw.text((72, 1104), left, font=body("en", 20, "Medium"), fill=MUTED)
        draw.text((size - 72, 1104), right, font=font(SPACE, 18, "Bold"), fill=MUTED, anchor="ra")

    image.save(OUT / f"home-{locale}-square.png", optimize=True)


def generate_section(
    locale: str,
    slug: str,
    kicker: str,
    lines_en: list[str],
    lines_ar: list[str],
) -> None:
    image, draw = base_canvas()
    wordmark(draw, PAPER, INK)
    draw.text((W - 72, 66), "nagdista.com", font=body("en", 19, "Medium"), fill=MUTED, anchor="ra")

    lines = lines_ar if locale == "ar" else lines_en
    y = 178
    size = 128
    f = display(locale, size)
    while size > 64 and any(
        measure(draw, line, f, "rtl" if locale == "ar" else "ltr") > W - 144
        for line in lines
    ):
        size -= 4
        f = display(locale, size)
    direction = "rtl" if locale == "ar" else "ltr"
    x = W - 72 if locale == "ar" else 72
    anchor = "ra" if locale == "ar" else "la"
    line_height = int(size * (1.36 if locale == "ar" else 1.05))
    for line in lines:
        draw.text(
            (x, y),
            line,
            font=f,
            fill=INK,
            anchor=anchor,
            direction=direction,
            language="ar" if locale == "ar" else "en",
        )
        y += line_height

    draw.rectangle((72, 492, 92, 512), fill=ACCENT)
    draw.text(
        (110, 488),
        kicker,
        font=body(locale, 24, "SemiBold"),
        fill=MUTED,
        direction=direction,
        language="ar" if locale == "ar" else "en",
    )

    footer(draw, INK, MUTED, "Mahmoud Elnagdy", "Cairo, EG / 2026", locale)
    image.save(OUT / f"{slug}-{locale}.png", optimize=True)


def generate_project(project: dict) -> None:
    bg, fg, accent = project["bg"], project["fg"], project["accent"]
    image, draw = base_canvas(bg, fg)
    wordmark(draw, bg, fg, accent)
    draw.text((W - 72, 66), "nagdista.com", font=body("en", 19, "Medium"), fill=fg, anchor="ra")

    locale = project["locale"]
    name_size = 168 if len(project["name"]) <= 8 else 132
    name_font = display("en", name_size)
    while name_size > 64 and measure(draw, project["name"], name_font, "ltr") > W - 144:
        name_size -= 4
        name_font = display("en", name_size)
    draw.text((72, 190), project["name"], font=name_font, fill=fg)

    tagline = project["tagline"]
    direction = "rtl" if locale == "ar" else "ltr"
    tf = body(locale, 30, "SemiBold")
    lines = wrap(draw, tagline, tf, 760, direction, 3)
    y = 390
    for line in lines:
        if direction == "rtl":
            draw.text((W - 72, y), line, font=tf, fill=fg, anchor="ra", direction="rtl", language="ar")
        else:
            draw.text((72, y), line, font=tf, fill=fg, direction="ltr")
        y += 42

    footer(
        draw,
        fg,
        fg,
        f"Case study · {project['index']} / 06",
        project.get("meta", "next.js · react · typescript"),
        "en",
    )
    image.save(OUT / f"project-{project['slug']}-{locale}.png", optimize=True)


def generate_article(slug: str, locale: str, title: str, category: str) -> None:
    image, draw = base_canvas()
    wordmark(draw, PAPER, INK)
    header = "مقالات / كتابة" if locale == "ar" else "notes / writing"
    draw.text(
        (W - 72, 66),
        header,
        font=display("ar", 19, "Medium") if locale == "ar" else body("en", 19, "Medium"),
        fill=MUTED,
        anchor="ra",
        direction="rtl" if locale == "ar" else "ltr",
    )

    direction = "rtl" if locale == "ar" else "ltr"
    pill_font = body(locale, 18, "SemiBold")
    pill_w = measure(draw, category, pill_font, direction) + 28
    if direction == "rtl":
        draw.rectangle((W - 72 - pill_w, 158, W - 72, 196), outline=ACCENT, width=2)
        draw.text((W - 86, 166), category, font=pill_font, fill=ACCENT, anchor="ra", direction="rtl")
    else:
        draw.rectangle((72, 158, 72 + pill_w, 196), outline=ACCENT, width=2)
        draw.text((86, 166), category, font=pill_font, fill=ACCENT)

    direction_wrap = "rtl" if locale == "ar" else "ltr"
    f, lines = fit_text(draw, title, locale, W - 144, 3, 82, 42)
    if len(lines) == 3:
        for size in range(f.size - 2, 57, -2):
            candidate = display(locale, size, "Bold")
            candidate_lines = wrap(draw, title, candidate, W - 144, direction_wrap, 3)
            if len(candidate_lines) == 2:
                f, lines = candidate, candidate_lines
                break
    y = 210
    lh = int(f.size * (1.26 if locale == "ar" else 1.12))
    for line in lines:
        if direction == "rtl":
            draw.text(
                (W - 72, y),
                line,
                font=f,
                fill=INK,
                anchor="ra",
                direction="rtl",
                language="ar",
            )
        else:
            draw.text((72, y), line, font=f, fill=INK)
        y += lh

    footer(draw, INK, MUTED, "Mahmoud Elnagdy", "nagdista.com/blog", locale)
    image.save(OUT / f"article-{slug}.png", optimize=True)


PROJECTS = [
    {
        "slug": "bunyan-contracting",
        "index": "01",
        "name": "Bunyan Contracting",
        "bg": "#EDE7DC",
        "fg": "#14110D",
        "accent": "#F04E23",
        "tagline_en": "A construction studio that looks as solid as it builds.",
        "tagline_ar": "شركة مقاولات شكلها قد شغلها.",
        "meta": "wordpress · elementor · rank math",
    },
    {
        "slug": "wasla",
        "index": "02",
        "name": "Wasla",
        "bg": "#17332D",
        "fg": "#F7F4EF",
        "accent": "#FF4D00",
        "tagline_en": "YouTube playlists, turned into structured courses.",
        "tagline_ar": "قوائم تشغيل يوتيوب تتحول لكورسات منظمة.",
    },
    {
        "slug": "localtube",
        "index": "03",
        "name": "LocalTube",
        "bg": "#1B1B1F",
        "fg": "#F7F4EF",
        "accent": "#FF4D00",
        "tagline_en": "Your own video library. No algorithm.",
        "tagline_ar": "مكتبة الفيديو بتاعتك. من غير خوارزمية.",
    },
    {
        "slug": "hassala",
        "index": "04",
        "name": "Hassala",
        "bg": "#E8DFC8",
        "fg": "#17211F",
        "accent": "#0F766E",
        "tagline_en": "Every word you translate, kept.",
        "tagline_ar": "كل كلمة بتترجمها، محفوظة.",
    },
    {
        "slug": "tarteeb",
        "index": "05",
        "name": "Tarteeb",
        "bg": "#20324A",
        "fg": "#F7F4EF",
        "accent": "#FF4D00",
        "tagline_en": "A day planned around prayer, not around noise.",
        "tagline_ar": "يوم مرتب حول الصلاة، مش حول الضوضاء.",
    },
    {
        "slug": "yost",
        "index": "06",
        "name": "Yost",
        "bg": "#2A1E3A",
        "fg": "#F7F4EF",
        "accent": "#FF4D00",
        "tagline_en": "No videos. No algorithm. Just posts.",
        "tagline_ar": "مفيش فيديوهات. مفيش خوارزمية. بوستات بس.",
    },
]

ARTICLES = [
    ("bilingual-portfolio-nextjs-typescript", "en", "How I Built a Bilingual Portfolio with Next.js and TypeScript", "Next.js"),
    ("mern-vs-nextjs", "en", "MERN vs Next.js: Choosing the Right Stack", "Architecture"),
    ("sql-vs-mongodb", "en", "SQL vs MongoDB: A Practical Guide for Full-Stack Developers", "Databases"),
    ("build-portfolio-nextjs-typescript-ar", "ar", "إزاي تبني بورتفوليو احترافي بـ Next.js وTypeScript", "Next.js"),
    ("react-vs-nextjs-ar", "ar", "React vs Next.js: امتى تختار كل واحد؟", "React"),
    ("typescript-best-practices-react-ar", "ar", "أفضل ممارسات TypeScript في مشاريع React", "TypeScript"),
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    generate_home("en")
    generate_home("ar")
    generate_home_square("en")
    generate_home_square("ar")
    generate_section("en", "about", "About · engineering with an editor's eye", ["Engineering", "with an eye."], [])
    generate_section("ar", "about", "عني · هندسة بعين محرر", [], ["هندسة", "بعين محرر."])
    generate_section("en", "projects", "Selected work · 2022—2026", ["Selected", "work."], [])
    generate_section("ar", "projects", "أعمال مختارة · 2022—2026", [], ["أعمال", "مختارة."])
    generate_section("en", "blog", "Writing · notes from the build", ["Notes from", "the build."], [])
    generate_section("ar", "blog", "مقالات · ملاحظات من البناء", [], ["ملاحظات", "من البناء."])
    generate_section(
        "en",
        "wordpress",
        "WordPress services · corporate sites that stay editable",
        ["Corporate", "WordPress."],
        [],
    )
    generate_section(
        "ar",
        "wordpress",
        "خدمات وردبريس · مواقع شركات قابلة للتعديل",
        [],
        ["وردبريس", "للشركات."],
    )

    for project in PROJECTS:
        for locale in ("en", "ar"):
            entry = dict(project)
            entry["locale"] = locale
            entry["tagline"] = project[f"tagline_{locale}"]
            generate_project(entry)

    for slug, locale, title, category in ARTICLES:
        generate_article(slug, locale, title, category)

    print(f"Wrote {len(list(OUT.glob('*.png')))} images to {OUT}")


if __name__ == "__main__":
    main()
