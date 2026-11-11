import Link from "next/link";
import Image from "next/image";
import { messages } from "@/content/messages";
import { localePath } from "@/content/site";
import { getNextProject } from "@/content/projects";
import type { Locale, Project } from "@/content/types";
import { ProjectCover } from "./project-cover";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLinkIcon, GithubIcon } from "./icons";

export function ProjectView({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = messages[locale];
  const copy = project.copy[locale];
  const next = getNextProject(project.slug);
  const projectsHref = localePath(locale, "/projects/");
  const isArabic = locale === "ar";

  const sections = [
    { title: t.projectPage.overview, body: copy.overview },
    { title: t.projectPage.challenge, body: copy.challenge },
    { title: t.projectPage.approach, body: copy.approach },
  ];

  return (
    <>
      <article>
        <div className="container">
          <header className="case-study__hero">
            <div className="case-study__top">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href={localePath(locale, "/")}>{t.nav.home}</Link>
                <span aria-hidden="true">/</span>
                <Link href={projectsHref}>{t.projectPage.breadcrumb}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{project.name}</span>
              </nav>
              <span className="tag">{project.status[locale]}</span>
            </div>

            <p className="eyebrow">
              {t.projectPage.caseStudy} {project.index}
            </p>
            <h1 className="case-study__title">{project.name}</h1>
            <p className="case-study__tagline">{copy.tagline}</p>

            <div className="case-study__cover">
              <ProjectCover project={project} />
            </div>
          </header>

          <div className="case-study__layout">
            <div className="case-study__body">
              {sections.map((section) => (
                <section className="case-study__section" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}

              <section className="case-study__section">
                <h2>{t.projectPage.features}</h2>
                <ul className="case-study__list">
                  {copy.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              {project.gallery?.length ? (
                <section className="case-study__section">
                  <h2>{t.projectPage.gallery}</h2>
                  <div className="case-study__gallery">
                    {project.gallery.map((shot) => (
                      <figure className="case-study__shot" key={shot.src}>
                        <Image
                          src={shot.src}
                          alt={shot.alt[locale]}
                          width={1440}
                          height={1000}
                          sizes="(min-width: 900px) 800px, 100vw"
                        />
                        {shot.caption ? (
                          <figcaption>{shot.caption[locale]}</figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="case-study__section">
                <h2>{t.projectPage.technical}</h2>
                <ul className="case-study__list case-study__list--technical">
                  {copy.technical.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="case-study__section">
                <h2>{t.projectPage.outcome}</h2>
                <p>{copy.outcome}</p>
              </section>
            </div>

            <aside className="case-study__aside">
              <dl className="case-study__facts">
                <div className="case-study__fact">
                  <dt>{t.common.year}</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="case-study__fact">
                  <dt>{t.common.status}</dt>
                  <dd>{project.status[locale]}</dd>
                </div>
                <div className="case-study__fact">
                  <dt>{t.common.stack}</dt>
                  <dd>
                    <ul className="case-study__stack">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              <div className="case-study__links">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="case-study__link"
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      <ExternalLinkIcon size={15} />
                      {t.projectPage.live}
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="case-study__link"
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      <GithubIcon size={15} />
                      {t.projectPage.repo}
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
                {project.kind === "website" ? (
                  <Link
                    href={localePath(locale, "/wordpress/")}
                    className="case-study__link"
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      {t.projectPage.wordpressCta}
                    </span>
                    <ArrowUpRight size={15} />
                  </Link>
                ) : null}
                <Link href={projectsHref} className="case-study__link">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    {isArabic ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
                    {t.projectPage.allProjects}
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </div>

        <div className="next-project">
          <div className="container">
            <Link
              href={localePath(locale, `/projects/${next.slug}/`)}
              className="next-project__link"
            >
              <span>
                <span className="next-project__label">{t.projectPage.nextProject}</span>
                <span className="next-project__name">
                  {next.name}
                  {isArabic ? <ArrowLeft size={26} /> : <ArrowRight size={26} />}
                </span>
              </span>
              <span className="tag">{next.year}</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
