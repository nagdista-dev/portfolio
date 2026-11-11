import Link from "next/link";
import { messages } from "@/content/messages";
import { PROJECTS } from "@/content/projects";
import { PROJECT_CATEGORIES } from "@/content/project-categories";
import { localePath } from "@/content/site";
import type { GitHubRepo } from "@/content/github-fallback";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ProjectCard } from "./project-card";
import { GitHubProjects } from "./github-projects";
import { ArrowUpRight } from "./icons";

export function ProjectsView({
  locale,
  repos,
}: {
  locale: Locale;
  repos: GitHubRepo[];
}) {
  const t = messages[locale];

  const groups = PROJECT_CATEGORIES.map((category) => ({
    ...category,
    projects: PROJECTS.filter((project) => project.category === category.id),
  }));

  const countLabel = (count: number) =>
    count === 1 ? t.projectsPage.projectCountOne : t.projectsPage.projectCountMany;

  return (
    <div className="container">
      <PageIntro
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        intro={t.projectsPage.intro}
      />

      <section className="projects-platforms" aria-labelledby="platforms-title">
        <div className="projects-platforms__head">
          <div>
            <p className="eyebrow">{t.projectsPage.categoryNav}</p>
            <h2 id="platforms-title" className="projects-platforms__title">
              {t.projectsPage.categoriesTitle}
            </h2>
          </div>
          <p className="projects-platforms__intro">
            {t.projectsPage.categoriesIntro}
          </p>
        </div>

        <nav className="projects-platforms__nav" aria-label={t.projectsPage.categoryNav}>
          {groups.map((category) => (
            <a
              key={category.id}
              href={`#cat-${category.id}`}
              className={`projects-platforms__chip${
                category.projects.length ? "" : " is-empty"
              }`}
            >
              <span>{category.label[locale]}</span>
              <span className="projects-platforms__count">
                {category.projects.length
                  ? category.projects.length
                  : t.projectsPage.emptyTitle}
              </span>
            </a>
          ))}
        </nav>
      </section>

      <div className="projects-groups">
        {groups.map((category) => (
          <section
            key={category.id}
            id={`cat-${category.id}`}
            className={`projects-category${
              category.projects.length ? "" : " projects-category--empty"
            }`}
            aria-labelledby={`cat-${category.id}-title`}
          >
            <header className="projects-category__head">
              <div className="projects-category__heading">
                <p className="eyebrow">{category.kicker[locale]}</p>
                <h2 id={`cat-${category.id}-title`}>
                  {category.label[locale]}
                </h2>
              </div>
              <div className="projects-category__meta">
                <p>{category.description[locale]}</p>
                {category.projects.length ? (
                  <span className="projects-category__count">
                    {category.projects.length}{" "}
                    {countLabel(category.projects.length)}
                  </span>
                ) : null}
              </div>
            </header>

            {category.projects.length ? (
              <div
                className={`projects-category__grid${
                  category.projects.length === 1
                    ? " projects-category__grid--single"
                    : ""
                }`}
              >
                {category.projects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    locale={locale}
                    large={category.id === "wordpress"}
                  />
                ))}
              </div>
            ) : (
              <div className="projects-category__open">
                <div className="projects-category__open-copy">
                  <h3>{t.projectsPage.emptyTitle}</h3>
                  <p>
                    {category.openBody?.[locale] ?? t.projectsPage.emptyBody}
                  </p>
                  {category.openTags ? (
                    <ul className="projects-category__open-tags">
                      {category.openTags[locale].map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <Link
                  href={localePath(locale, "/#contact")}
                  className="button button--small"
                >
                  {t.projectsPage.emptyCta}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="projects-page__all" id="all-projects">
        <div className="projects-page__all-head">
          <p className="eyebrow">GitHub</p>
          <h2>{t.projectsPage.allTitle}</h2>
          <p>{t.projectsPage.allIntro}</p>
        </div>
        <GitHubProjects repos={repos} locale={locale} />
      </section>
    </div>
  );
}
