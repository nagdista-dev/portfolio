import Link from "next/link";
import { messages } from "@/content/messages";
import { SITE, localePath } from "@/content/site";
import { FEATURED_PROJECTS } from "@/content/projects";
import { SKILL_GROUPS } from "@/content/home";
import { getArticles } from "@/content/blog";
import type { Locale } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { SkillGroups } from "./skill-groups";
import { Timeline } from "./timeline";
import { Testimonials } from "./testimonials";
import { ContactSection } from "./contact-section";
import { ArticleCard } from "./article-card";
import { ArrowDown, ArrowRight, ArrowUpRight } from "./icons";

type HomeViewProps = {
  locale: Locale;
  repoCount: number;
};

export function HomeView({ locale, repoCount }: HomeViewProps) {
  const t = messages[locale];
  const articles = getArticles(locale).slice(0, 3);
  const projectsHref = locale === "ar" ? "/ar/projects/" : "/projects/";
  const aboutHref = locale === "ar" ? "/ar/about/" : "/about/";
  const blogHref = locale === "ar" ? "/ar/blog/" : "/blog/";
  const aiHref = locale === "ar" ? "/ar/ai/" : "/ai/";
  const pressHref = locale === "ar" ? "/ar/press/" : "/press/";
  const wordpressHref = localePath(locale, "/wordpress/");
  const homeHref = locale === "ar" ? "/ar/" : "/";

  return (
    <>
      <section className="hero" id="top">
        <div className="hero__inner">
          <div className="hero__top">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <p className="hero__availability">
              <span className="status-dot status-dot--accent" aria-hidden="true" />
              {t.hero.available}
            </p>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">{t.hero.titleLine1}</span>{" "}
            <span className="hero__title-line hero__title-line--indent">
              {t.hero.titleLine2}
              <span className="hero__title-accent" aria-hidden="true">
                ✳
              </span>
            </span>
          </h1>

          <div className="hero__grid">
            <div>
              <p className="hero__bio">{t.hero.bio}</p>
              <div className="hero__actions">
                <Link href={projectsHref} className="button">
                  {t.hero.ctaWork}
                  <ArrowRight size={16} />
                </Link>
                <Link href={`${homeHref}#contact`} className="button button--ghost">
                  {t.hero.ctaContact}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <Link href="#about" className="hero__scroll">
                <ArrowDown size={14} />
                {t.hero.scroll}
              </Link>
            </div>

            <dl className="hero__stats">
              <div className="hero__stat">
                <dt className="hero__stat-label">{t.hero.statRepos}</dt>
                <dd className="hero__stat-value">{repoCount}</dd>
              </div>
              <div className="hero__stat">
                <dt className="hero__stat-label">{t.hero.statProjects}</dt>
                <dd className="hero__stat-value">
                  {String(FEATURED_PROJECTS.length).padStart(2, "0")}
                </dd>
              </div>
              <div className="hero__stat">
                <dt className="hero__stat-label">{t.hero.statGrad}</dt>
                <dd className="hero__stat-value">2026</dd>
              </div>
              <div className="hero__stat">
                <dt className="hero__stat-label">{t.hero.statLocation}</dt>
                <dd className="hero__stat-value">
                  {locale === "ar" ? "القاهرة" : "Cairo"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((group) => (
            <div className="marquee__group" key={group}>
              {t.hero.marquee.map((item) => (
                <span className="marquee__item" key={`${group}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__lead" data-reveal>
              <p className="eyebrow">{t.home.aboutLabel}</p>
              <h2 className="about__title">{t.home.aboutTitle}</h2>
              <p className="about__intro">{t.home.aboutIntro}</p>
              <div className="about__body">
                <p>{t.home.aboutBody}</p>
              </div>
              <blockquote className="about__quote">
                <p>“{t.home.aboutQuote}”</p>
                <cite>{t.home.aboutQuoteAttr}</cite>
              </blockquote>
              <div className="about__actions">
                <Link href={aboutHref} className="text-link about__cta">
                  {t.home.aboutCta}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={pressHref}
                  className="text-link about__cta about__cta--secondary"
                >
                  {t.home.pressCta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <aside className="about__aside" data-reveal>
              <div className="fact-sheet">
                <h2 className="fact-sheet__title">{t.home.factsTitle}</h2>
                <dl>
                  <div className="fact-sheet__row">
                    <dt>{t.home.factBased}</dt>
                    <dd>{SITE.location[locale]}</dd>
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
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <SectionHeading
            label={t.home.workLabel}
            title={t.home.workTitle}
            intro={t.home.workIntro}
          />
          <div className="work__feature">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                large={index === 0}
              />
            ))}
          </div>
          <div className="work__all">
            <Link href={projectsHref} className="text-link">
              {t.home.workAll}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--ai" id="wordpress">
        <div className="container">
          <div className="ai-callout" data-reveal>
            <div className="ai-callout__copy">
              <p className="eyebrow">{t.home.wpLabel}</p>
              <h2>{t.home.wpTitle}</h2>
              <p>{t.home.wpBody}</p>
            </div>
            <div className="ai-callout__actions">
              <Link href={wordpressHref} className="button">
                {t.home.wpCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={localePath(locale, "/projects/bunyan-contracting/")}
                className="button button--ghost"
              >
                {t.common.viewProject}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <SectionHeading
            label={t.home.skillsLabel}
            title={t.home.skillsTitle}
            intro={t.home.skillsIntro}
          />
          <SkillGroups groups={SKILL_GROUPS} locale={locale} />
        </div>
      </section>

      <section className="section" id="journey">
        <div className="container">
          <SectionHeading
            label={t.home.journeyLabel}
            title={t.home.journeyTitle}
            intro={t.home.journeyIntro}
          />
          <Timeline locale={locale} />
        </div>
      </section>

      <Testimonials locale={locale} />

      <section className="section" id="writing">
        <div className="container">
          <SectionHeading
            label={t.home.writingLabel}
            title={t.home.writingTitle}
            intro={t.home.writingIntro}
            action={{ label: t.home.writingAll, href: blogHref }}
          />
          <div className="article-grid">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ai" id="ai">
        <div className="container">
          <div className="ai-callout" data-reveal>
            <div className="ai-callout__copy">
              <p className="eyebrow">{t.home.aiLabel}</p>
              <h2>{t.home.aiTitle}</h2>
              <p>{t.home.aiBody}</p>
            </div>
            <div className="ai-callout__actions">
              <Link href={aiHref} className="button">
                {t.home.aiCta}
                <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.aiNewsletter}
                className="button button--ghost"
                target="_blank"
                rel="noreferrer"
              >
                {t.home.aiNewsletter}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection locale={locale} />
    </>
  );
}
