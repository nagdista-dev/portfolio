import Link from "next/link";
import { messages } from "@/content/messages";
import { PROJECT_CATEGORIES } from "@/content/project-categories";
import { SITE } from "@/content/site";
import type { Locale } from "@/content/types";
import { SocialLinks } from "./social-links";
import { ArrowUpRight, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const isArabic = locale === "ar";
  const homeHref = isArabic ? "/ar/" : "/";
  const year = SITE.launchYear;
  const projectsHref = isArabic ? "/ar/projects/" : "/projects/";

  const explore = [
    {
      label: t.nav.work,
      href: isArabic ? "/ar/projects/" : "/projects/",
    },
    {
      label: t.nav.wordpress,
      href: isArabic ? "/ar/wordpress/" : "/wordpress/",
    },
    {
      label: t.nav.about,
      href: isArabic ? "/ar/about/" : "/about/",
    },
    {
      label: t.nav.writing,
      href: isArabic ? "/ar/blog/" : "/blog/",
    },
    {
      label: t.nav.ai,
      href: isArabic ? "/ar/ai/" : "/ai/",
    },
    {
      label: t.footer.press,
      href: isArabic ? "/ar/press/" : "/press/",
    },
    {
      label: t.nav.contact,
      href: isArabic ? "/ar/#contact" : "/#contact",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href={homeHref} className="wordmark wordmark--footer">
              <span className="wordmark__mark" aria-hidden="true">
                N
              </span>
              <span className="wordmark__text">NAGDISTA</span>
            </Link>
            <p className="site-footer__tagline">{t.footer.tagline}</p>
            <nav
              className="site-footer__platforms"
              aria-label={t.projectsPage.categoriesTitle}
            >
              {PROJECT_CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`${projectsHref}#cat-${category.id}`}
                  className={`site-footer__platform${
                    category.available ? "" : " is-open"
                  }`}
                >
                  {category.label[locale]}
                </Link>
              ))}
            </nav>
            <a href="#top" className="site-footer__back">
              {t.footer.backToTop}
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="site-footer__columns">
            <div>
              <h2 className="site-footer__heading">{t.footer.explore}</h2>
              <ul className="site-footer__list">
                {explore.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="site-footer__heading">{t.footer.elsewhere}</h2>
              <SocialLinks showHandles className="social-links--stacked" />
            </div>

            <div>
              <h2 className="site-footer__heading">{t.footer.contact}</h2>
              <ul className="site-footer__list site-footer__list--contact">
                <li>
                  <a href={`mailto:${SITE.email}`}>
                    <MailIcon size={15} />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${SITE.phoneHref}`} dir="ltr">
                    <PhoneIcon size={15} />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <span>
                    <MapPinIcon size={15} />
                    {SITE.location[locale]}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            {isArabic ? (
              <>
                <Link href="/">Mahmoud Elnagdy</Link> — النسخة الإنجليزية
              </>
            ) : (
              <>
                Arabic version: <Link href="/ar/">محمود النجدي</Link>
              </>
            )}
          </p>
          <p>
            © {year}{" "}
            <Link href={homeHref}>{isArabic ? SITE.nameAr : SITE.name}</Link>.{" "}
            {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
          <p>{t.footer.colophon}</p>
        </div>
      </div>
    </footer>
  );
}
