import Link from "next/link";
import { localePath } from "@/content/site";
import { messages } from "@/content/messages";
import type { Locale, Project } from "@/content/types";
import { ProjectCover } from "./project-cover";
import { ArrowUpRight } from "./icons";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  large?: boolean;
};

export function ProjectCard({
  project,
  locale,
  large = false,
}: ProjectCardProps) {
  const t = messages[locale];
  const copy = project.copy[locale];
  const href = localePath(locale, `/projects/${project.slug}/`);

  return (
    <article className={`project-card${large ? " project-card--large" : ""}`}>
      <Link href={href} className="project-card__link">
        <ProjectCover project={project} />
        <div className="project-card__body">
          <div className="project-card__meta" aria-hidden="true">
            <span>{project.index}</span>
            <span>{project.year}</span>
            <span className="project-card__status">
              {project.status[locale]}
            </span>
          </div>
          <div className="project-card__title-row">
            <h3 className="project-card__title">{project.name}</h3>
            <span className="project-card__arrow" aria-hidden="true">
              <ArrowUpRight size={20} />
            </span>
          </div>
          <p className="project-card__tagline">{copy.tagline}</p>
          <ul className="project-card__stack" aria-hidden="true">
            {project.stack.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span className="project-card__cta" aria-hidden="true">
            {t.common.viewProject}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
