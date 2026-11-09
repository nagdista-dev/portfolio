import Link from "next/link";
import { AI_PAGE } from "@/content/ai";
import { SITE } from "@/content/site";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ArrowRight, ExternalLinkIcon, MailIcon } from "./icons";

export function AiView({ locale }: { locale: Locale }) {
  const content = AI_PAGE[locale];
  const isArabic = locale === "ar";
  const contactHref = isArabic ? "/ar/#contact" : "/#contact";

  return (
    <>
      <div className="container">
        <PageIntro
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
          aside={
            <div className="hero__actions">
              <Link href={contactHref} className="button button--small">
                {isArabic ? "كلّمني" : "Let's talk"}
                <ArrowRight size={15} />
              </Link>
              <a
                className="button button--small button--ghost"
                href={`mailto:${SITE.email}`}
              >
                <MailIcon size={15} />
                {SITE.email}
              </a>
            </div>
          }
        />
      </div>

      <div className="container">
        <article className="press-page">
          <section className="press-section" data-reveal>
            <h2>{content.newsletterTitle}</h2>
            {content.newsletterBody.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
            <p>
              <a
                className="text-link"
                href={SITE.aiNewsletter}
                target="_blank"
                rel="noreferrer"
              >
                {content.newsletterCta}
                <ExternalLinkIcon size={15} />
              </a>
            </p>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.workflowTitle}</h2>
            <p>{content.workflowIntro}</p>
            <div className="ai-grid">
              {content.workflow.map((item, index) => (
                <article className="ai-card" key={item.title}>
                  <span className="ai-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.principlesTitle}</h2>
            <ul className="press-list">
              {content.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="press-section" data-reveal>
            <h2>{content.buildTitle}</h2>
            {content.buildBody.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
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
          </section>
        </article>
      </div>
    </>
  );
}
