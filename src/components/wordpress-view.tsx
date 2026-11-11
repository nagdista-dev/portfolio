import Link from "next/link";
import { WORDPRESS_PAGE } from "@/content/wordpress";
import { getProject } from "@/content/projects";
import { SITE, localePath } from "@/content/site";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";
import { ArrowRight, ArrowUpRight, MailIcon } from "./icons";

export function WordPressView({ locale }: { locale: Locale }) {
  const content = WORDPRESS_PAGE[locale];
  const isArabic = locale === "ar";
  const project = getProject("bunyan-contracting");
  const contactHref = localePath(locale, "/#contact");
  const projectsHref = localePath(locale, "/projects/");

  return (
    <>
      <div className="container">
        <PageIntro
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
          aside={
            <div className="wp-hero__aside">
              <p>{content.heroNote}</p>
              <div className="hero__actions">
                <Link href={contactHref} className="button button--small">
                  {content.primaryCta}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href={localePath(locale, "/projects/bunyan-contracting/")}
                  className="button button--small button--ghost"
                >
                  {content.secondaryCta}
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          }
        />
      </div>

      {project ? (
        <section className="section wp-work">
          <div className="container">
            <SectionHeading
              label={content.workLabel}
              title={content.workTitle}
              intro={content.workIntro}
            />
            <div className="wp-work__grid">
              <ProjectCard project={project} locale={locale} large />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <SectionHeading
            label={content.servicesLabel}
            title={content.servicesTitle}
            intro={content.servicesIntro}
          />
          <div className="wp-services">
            {content.services.map((service, index) => (
              <article className="wp-service" key={service.title} data-reveal>
                <span className="wp-service__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            label={content.whyLabel}
            title={content.whyTitle}
            intro={content.whyIntro}
          />
          <div className="wp-why">
            {content.why.map((item) => (
              <article className="wp-why__item" key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            label={content.processLabel}
            title={content.processTitle}
            intro={content.processIntro}
          />
          <ol className="wp-process">
            {content.process.map((step) => (
              <li className="wp-process__step" key={step.step} data-reveal>
                <span className="wp-process__step-number">{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container wp-stack">
          <h2>{content.stackTitle}</h2>
          <ul className="wp-stack__list">
            {content.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading label={content.faqLabel} title={content.faqTitle} />
          <dl className="wp-faq">
            {content.faq.map((item) => (
              <div className="wp-faq__item" key={item.question}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section wp-cta">
        <div className="container wp-cta__inner">
          <div>
            <p className="eyebrow">{isArabic ? "الخطوة الجاية" : "Next step"}</p>
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaBody}</p>
          </div>
          <div className="hero__actions">
            <a href={`mailto:${SITE.email}`} className="button">
              <MailIcon size={16} />
              {content.ctaButton}
            </a>
            <Link href={projectsHref} className="button button--ghost">
              {content.ctaSecondary}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
