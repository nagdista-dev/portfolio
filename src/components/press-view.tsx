import Image from "next/image";
import Link from "next/link";
import { PRESS, type PressRow } from "@/content/press";
import { SITE, SOCIAL_LINKS } from "@/content/site";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ArrowRight, ExternalLinkIcon, MailIcon } from "./icons";

function Row({ row }: { row: PressRow }) {
  return (
    <div className="press-table__row">
      <dt>{row.label}</dt>
      <dd>
        {row.href ? (
          <a href={row.href} target="_blank" rel="noreferrer">
            {row.value}
            <ExternalLinkIcon size={12} />
          </a>
        ) : (
          row.value
        )}
      </dd>
    </div>
  );
}

export function PressView({ locale }: { locale: Locale }) {
  const content = PRESS[locale];
  const isArabic = locale === "ar";
  const homeHref = isArabic ? "/ar/" : "/";
  const workHref = isArabic ? "/ar/projects/" : "/projects/";

  const officialLinks = [
    { label: isArabic ? "الموقع الرسمي" : "Official website", href: homeHref },
    {
      label: isArabic ? "الموقع بالعربية" : "Website in Arabic",
      href: "/ar/",
    },
    { label: isArabic ? "عنّي" : "About", href: isArabic ? "/ar/about/" : "/about/" },
    {
      label: isArabic ? "المشاريع" : "Projects",
      href: isArabic ? "/ar/projects/" : "/projects/",
    },
    {
      label: isArabic ? "المقالات" : "Writing",
      href: isArabic ? "/ar/blog/" : "/blog/",
    },
    {
      label: isArabic ? "الذكاء الاصطناعي" : "AI",
      href: isArabic ? "/ar/ai/" : "/ai/",
    },
    {
      label: isArabic ? "نشرة AI in Brief" : "AI in Brief",
      href: SITE.aiNewsletter,
    },
    {
      label: isArabic ? "خمسات" : "Khamsat",
      href: SITE.khamsat,
    },
    ...SOCIAL_LINKS.map((link) => ({
      label: link.label,
      href: link.href,
    })),
    { label: isArabic ? "السيرة الذاتية" : "CV", href: SITE.cvUrl },
  ];

  return (
    <>
      <div className="container">
        <PageIntro
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
          aside={
            <div>
              <Image
                className="press-portrait"
                src="/images/avatar.jpg"
                alt={isArabic ? "محمود النجدي" : "Mahmoud Elnagdy"}
                width={88}
                height={88}
              />
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
            </div>
          }
        />
      </div>

      <div className="container">
        <article className="press-page">
          <section className="press-section" data-reveal>
            <h2>{content.snapshotTitle}</h2>
            <dl className="press-table">
              {content.snapshot.map((row) => (
                <Row row={row} key={row.label} />
              ))}
            </dl>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.bioTitle}</h2>
            <p className="press-lead">{content.shortBio}</p>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.educationTitle}</h2>
            <dl className="press-table">
              {content.education.map((row) => (
                <Row row={row} key={row.label} />
              ))}
            </dl>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.learningTitle}</h2>
            <ul className="press-list">
              {content.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.experienceTitle}</h2>
            <ul className="press-list">
              {content.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.skillsTitle}</h2>
            <dl className="press-table">
              {content.skills.map((row) => (
                <Row row={row} key={row.label} />
              ))}
            </dl>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.workTitle}</h2>
            <p>{content.workIntro}</p>
            <div className="press-cards">
              {content.work.map((project) => (
                <article className="press-card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.href && project.linkLabel ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel}
                      <ExternalLinkIcon size={12} />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.writingTitle}</h2>
            <ul className="press-list press-list--links">
              {content.writing.map((article) => (
                <li key={article.href}>
                  <a href={article.href}>{article.title}</a>
                  <ExternalLinkIcon size={12} />
                </li>
              ))}
            </ul>
          </section>

          <section className="press-section" data-reveal>
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
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.usageTitle}</h2>
            <ol className="press-list">
              {content.usage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.linksTitle}</h2>
            <ul className="press-list press-list--links">
              {officialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                  <ExternalLinkIcon size={12} />
                </li>
              ))}
            </ul>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.faqTitle}</h2>
            <dl className="press-faq">
              {content.faq.map((item) => (
                <div key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="press-section press-contact" data-reveal>
            <h2>{content.contactTitle}</h2>
            <p>{content.contactBody}</p>
            <p className="press-updated">{content.updated}</p>
          </section>
        </article>
      </div>
    </>
  );
}
