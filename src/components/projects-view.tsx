import { messages } from "@/content/messages";
import { FEATURED_PROJECTS } from "@/content/projects";
import type { GitHubRepo } from "@/content/github-fallback";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ProjectCard } from "./project-card";
import { GitHubProjects } from "./github-projects";

export function ProjectsView({
  locale,
  repos,
}: {
  locale: Locale;
  repos: GitHubRepo[];
}) {
  const t = messages[locale];

  return (
    <div className="container">
      <PageIntro
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        intro={t.projectsPage.intro}
      />

      <section className="projects-page__featured" aria-labelledby="featured-projects">
        <div className="projects-page__all-head">
          <p className="eyebrow">{t.projectsPage.featuredTitle}</p>
          <h2 id="featured-projects" className="sr-only">
            {t.projectsPage.featuredTitle}
          </h2>
        </div>
        <div className="projects-page__featured-grid">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              large={index === 0}
            />
          ))}
        </div>
      </section>

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
