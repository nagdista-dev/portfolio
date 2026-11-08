import Link from "next/link";
import { PRESS } from "@/content/press";
import { SITE, SOCIAL_LINKS } from "@/content/site";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ArrowRight, ExternalLinkIcon, MailIcon } from "./icons";

export function PressView({ locale }: { locale: Locale }) {
  const content = PRESS[locale];
  const isArabic = locale === "ar";
  const homeHref = isArabic ? "/ar/" : "/";
  const workHref = isArabic ? "/ar/projects/" : "/projects/";

  return (
    <>
      <div className="container">
        <PageIntro
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
          aside={
            <div className="hero__actions">
              <Link href={workHref} className="button button--small">
                {isArabic ? "أعمال مختارة" : "Selected work"}
                <ArrowRight size={15} />
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="button button--small button--ghost"
              >
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
            <h2>{content.bioTitle}</h2>
            <p>{content.shortBio}</p>

            <h2>{content.longBioTitle}</h2>
            {content.longBio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <h2>{content.namesTitle}</h2>
            <p>{content.namesIntro}</p>
            <ul className="press-names">
              {content.names.map((item) => (
                <li key={item.name}>
                  <strong dir="auto">{item.name}</strong>
                  <span> — {item.note}</span>
                </li>
              ))}
            </ul>

            <h2>{content.usageTitle}</h2>
            <ul className="press-list">
              {content.usage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>{content.faqTitle}</h2>
            <dl className="press-faq">
              {content.faq.map((item) => (
                <div key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>

            <p className="press-updated">{content.updated}</p>
          </div>

          <aside className="about-page__aside" data-reveal>
            <div className="fact-sheet">
              <h2 className="fact-sheet__title">{content.factsTitle}</h2>
              <dl>
                {content.facts.map((fact) => (
                  <div className="fact-sheet__row" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>
                      {fact.href ? (
                        <a href={fact.href} target="_blank" rel="noreferrer">
                          {fact.value}
                          <ExternalLinkIcon size={12} />
                        </a>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="currently">
              <h3>{content.linksTitle}</h3>
              <ul>
                <li>
                  <a href={homeHref}>{isArabic ? "الموقع الرسمي" : "Official website"}</a>
                </li>
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={SITE.cvUrl} target="_blank" rel="noreferrer">
                    {isArabic ? "السيرة الذاتية" : "CV"}
                  </a>
                </li>
              </ul>
            </div>

            <div className="currently">
              <h3>{content.contactTitle}</h3>
              <p>{content.contactBody}</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
