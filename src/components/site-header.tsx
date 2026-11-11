"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { messages } from "@/content/messages";
import { SITE } from "@/content/site";
import type { Locale } from "@/content/types";
import { SocialLinks } from "./social-links";
import {
  ArrowUpRight,
  CloseIcon,
  GlobeIcon,
  MenuIcon,
} from "./icons";

type NavItem = {
  label: string;
  href: string;
  match: string | null;
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const homeHref = locale === "ar" ? "/ar/" : "/";
  const isArabic = locale === "ar";

  const nav: NavItem[] = [
    {
      label: t.nav.work,
      href: isArabic ? "/ar/projects/" : "/projects/",
      match: isArabic ? "/ar/projects" : "/projects",
    },
    {
      label: t.nav.wordpress,
      href: isArabic ? "/ar/wordpress/" : "/wordpress/",
      match: isArabic ? "/ar/wordpress" : "/wordpress",
    },
    {
      label: t.nav.about,
      href: isArabic ? "/ar/about/" : "/about/",
      match: isArabic ? "/ar/about" : "/about",
    },
    {
      label: t.nav.writing,
      href: isArabic ? "/ar/blog/" : "/blog/",
      match: isArabic ? "/ar/blog" : "/blog",
    },
    {
      label: t.nav.ai,
      href: isArabic ? "/ar/ai/" : "/ai/",
      match: isArabic ? "/ar/ai" : "/ai",
    },
    {
      label: t.nav.press,
      href: isArabic ? "/ar/press/" : "/press/",
      match: isArabic ? "/ar/press" : "/press",
    },
    {
      label: t.nav.contact,
      href: isArabic ? "/ar/#contact" : "/#contact",
      match: null,
    },
  ];

  const switchHref = isArabic
    ? pathname.startsWith("/ar/blog/")
      ? "/blog/"
      : pathname.replace(/^\/ar/, "") || "/"
    : pathname.startsWith("/blog/")
      ? "/ar/blog/"
      : pathname === "/"
        ? "/ar/"
        : `/ar${pathname}`;

  const cvHref =
    SITE.cvUrl ||
    `mailto:${SITE.email}?subject=${encodeURIComponent(
      isArabic ? "طلب السيرة الذاتية" : "CV request",
    )}`;

  const isActive = (item: NavItem) => {
    if (!item.match) return false;
    return pathname === item.match || pathname.startsWith(`${item.match}/`);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          href={homeHref}
          className="wordmark"
        >
          <span className="wordmark__mark" aria-hidden="true">
            N
          </span>
          <span className="wordmark__text">NAGDISTA</span>
        </Link>

        <nav className="site-nav" aria-label={t.nav.menu}>
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`site-nav__link${
                isActive(item) ? " is-active" : ""
              }`}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="lang-switch" aria-label={t.nav.language}>
            <GlobeIcon size={14} />
            {isArabic ? (
              <>
                <span className="is-active">AR</span>
                <span aria-hidden="true">/</span>
                <Link
                  href={switchHref}
                  hrefLang="en"
                  lang="en"
                  aria-label="EN — Switch to English"
                >
                  EN
                </Link>
              </>
            ) : (
              <>
                <span className="is-active">EN</span>
                <span aria-hidden="true">/</span>
                <Link
                  href={switchHref}
                  hrefLang="ar"
                  lang="ar"
                  aria-label="AR — التبديل إلى العربية"
                >
                  AR
                </Link>
              </>
            )}
          </div>

          <a
            href={cvHref}
            className="button button--small site-header__cv"
            {...(SITE.cvUrl
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {t.nav.cv}
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-label={t.nav.menu}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__top">
            <Link
              href={homeHref}
              className="wordmark"
              onClick={() => setOpen(false)}
            >
              <span className="wordmark__mark" aria-hidden="true">
                N
              </span>
              <span className="wordmark__text">NAGDISTA</span>
            </Link>
            <button
              type="button"
              className="menu-button menu-button--close"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <nav className="mobile-menu__nav" aria-label={t.nav.menu}>
            {nav.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="mobile-menu__link"
                onClick={() => setOpen(false)}
              >
                <span className="mobile-menu__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-menu__bottom">
            <div className="mobile-menu__lang">
              <GlobeIcon size={16} />
              <Link
                href={switchHref}
                hrefLang={isArabic ? "en" : "ar"}
                lang={isArabic ? "en" : "ar"}
                onClick={() => setOpen(false)}
              >
                {isArabic ? "English" : "العربية"}
              </Link>
            </div>
            <SocialLinks />
            <a
              href={cvHref}
              className="button button--block"
              onClick={() => setOpen(false)}
              {...(SITE.cvUrl
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {t.nav.cv}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
