import Link from "next/link";
import { messages } from "@/content/messages";
import { SITE } from "@/content/site";
import { PRINCIPLES } from "@/content/home";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ArrowRight, MapPinIcon, MailIcon } from "./icons";

export function AboutView({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const contactHref = locale === "ar" ? "/ar/#contact" : "/#contact";
  const workHref = locale === "ar" ? "/ar/projects/" : "/projects/";

  return (
    <>
      <div className="container">
        <PageIntro
          eyebrow={t.aboutPage.eyebrow}
          title={t.aboutPage.title}
          intro={t.aboutPage.intro}
          aside={
            <div className="hero__actions">
              <Link href={workHref} className="button button--small">
                {messages[locale].nav.work}
                <ArrowRight size={15} />
              </Link>
              <a href={`mailto:${SITE.email}`} className="button button--small button--ghost">
                <MailIcon size={15} />
                {SITE.email}
              </a>
            </div>
          }
        />
      </div>

      <div className="container">
        <div className="about-page__body">
          <div className="about-page__prose" data-reveal>
            {t.aboutPage.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-page__aside" data-reveal>
            <div className="fact-sheet">
              <h2 className="fact-sheet__title">{t.home.factsTitle}</h2>
              <dl>
                <div className="fact-sheet__row">
                  <dt>{t.home.factBased}</dt>
                  <dd>
                    <MapPinIcon size={13} style={{ display: "inline", marginInlineEnd: 4 }} />
                    {SITE.location[locale]}
                  </dd>
                </div>
                <div className="fact-sheet__row">
                  <dt>{t.home.factEducation}</dt>
                  <dd>{t.home.factEducationValue}</dd>
                </div>
                <div className="fact-sheet__row">
                  <dt>{t.home.factFocus}</dt>
                  <dd>{t.home.factFocusValue}</dd>
                </div>
                <div className="fact-sheet__row">
                  <dt>{t.home.factLanguages}</dt>
                  <dd>{t.home.factLanguagesValue}</dd>
                </div>
                <div className="fact-sheet__row">
                  <dt>{t.home.factStatus}</dt>
                  <dd>{t.home.factStatusValue}</dd>
                </div>
              </dl>
            </div>

            <div className="currently">
              <h3>{t.aboutPage.currentlyTitle}</h3>
              <ul>
                {t.aboutPage.currently.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="principles" aria-label={t.aboutPage.principlesTitle}>
            {PRINCIPLES[locale].map((principle, index) => (
              <article className="principle" key={principle.title} data-reveal>
                <span className="principle__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </section>
        </div>

        <div className="about-cta" data-reveal>
          <div>
            <h2>{t.aboutPage.ctaTitle}</h2>
            <p>{t.aboutPage.ctaBody}</p>
          </div>
          <Link href={contactHref} className="button">
            {t.common.getInTouch}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
