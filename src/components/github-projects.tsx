"use client";

import { useMemo, useState } from "react";
import type { GitHubRepo } from "@/content/github-fallback";
import { messages } from "@/content/messages";
import type { Locale } from "@/content/types";
import {
  ArrowUpRight,
  ExternalLinkIcon,
  SearchIcon,
  StarIcon,
} from "./icons";

const FEATURED = new Set([
  "wasla",
  "tubely",
  "hassala",
  "tarteeb",
  "yost",
]);

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
  PHP: "#4F5D95",
  Java: "#B07219",
  "C#": "#178600",
  "C++": "#F34B7D",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#701516",
  Dart: "#00B4AB",
};

function languageColor(language: string | null): string {
  if (!language) return "var(--muted)";
  return LANGUAGE_COLORS[language] ?? "var(--accent)";
}

function formatDate(value: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(
      locale === "ar" ? "ar-EG-u-nu-latn" : "en-US",
      { month: "short", year: "numeric" },
    ).format(new Date(value));
  } catch {
    return value.slice(0, 7);
  }
}

type GitHubProjectsProps = {
  repos: GitHubRepo[];
  locale: Locale;
};

export function GitHubProjects({ repos, locale }: GitHubProjectsProps) {
  const t = messages[locale];
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string>("all");

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    repos.forEach((repo) => {
      if (!repo.language) return;
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    });
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([name]) => name);
  }, [repos]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return repos.filter((repo) => {
      if (language !== "all" && repo.language !== language) return false;
      if (!needle) return true;
      return (
        repo.name.toLowerCase().includes(needle) ||
        (repo.description ?? "").toLowerCase().includes(needle) ||
        repo.topics.some((topic) => topic.toLowerCase().includes(needle))
      );
    });
  }, [repos, query, language]);

  return (
    <div className="github-projects">
      <div className="github-projects__toolbar">
        <div className="github-projects__search">
          <label htmlFor="repo-search" className="sr-only">
            {t.common.search}
          </label>
          <SearchIcon size={17} />
          <input
            id="repo-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.projectsPage.searchPlaceholder}
            autoComplete="off"
          />
          {query ? (
            <button
              type="button"
              className="github-projects__clear"
              onClick={() => setQuery("")}
              aria-label={t.common.clear}
            >
              ×
            </button>
          ) : null}
        </div>

        <div className="github-projects__filters">
          <span className="github-projects__filter-label">
            {t.projectsPage.filterLanguage}
          </span>
          <div className="filter-chips" role="group" aria-label={t.projectsPage.filterLanguage}>
            <button
              type="button"
              className={`filter-chip${language === "all" ? " is-active" : ""}`}
              onClick={() => setLanguage("all")}
              aria-pressed={language === "all"}
            >
              {t.common.all}
            </button>
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-chip${language === item ? " is-active" : ""}`}
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
              >
                <span
                  className="language-dot"
                  style={{ backgroundColor: languageColor(item) }}
                  aria-hidden="true"
                />
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="github-projects__count" aria-live="polite">
        {t.common.showing} <strong>{filtered.length}</strong> {t.common.of}{" "}
        {repos.length} {t.common.repositories}
      </p>

      {filtered.length === 0 ? (
        <p className="github-projects__empty">{t.common.noResults}</p>
      ) : (
        <div className="repo-grid">
          {filtered.map((repo) => (
            <article className="repo-card" key={repo.name}>
              <div className="repo-card__top">
                <h3 className="repo-card__name" dir="auto">
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </h3>
                {FEATURED.has(repo.name.toLowerCase()) ? (
                  <span className="tag">{t.common.featured}</span>
                ) : null}
              </div>

              {repo.description ? (
                <p className="repo-card__description" dir="auto">
                  {repo.description}
                </p>
              ) : null}

              <div className="repo-card__meta">
                {repo.language ? (
                  <span className="repo-card__meta-item">
                    <span
                      className="language-dot"
                      style={{ backgroundColor: languageColor(repo.language) }}
                      aria-hidden="true"
                    />
                    {repo.language}
                  </span>
                ) : null}
                {repo.stars > 0 ? (
                  <span className="repo-card__meta-item">
                    <StarIcon size={14} />
                    {repo.stars}
                  </span>
                ) : null}
                <span className="repo-card__meta-item">
                  {t.common.updated} {formatDate(repo.updatedAt, locale)}
                </span>
              </div>

              <div className="repo-card__links">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-card__link"
                >
                  {t.common.repo}
                  <ArrowUpRight size={14} />
                </a>
                {repo.homepageUrl ? (
                  <a
                    href={repo.homepageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-card__link repo-card__link--live"
                  >
                    {t.common.liveDemo}
                    <ExternalLinkIcon size={14} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="github-projects__note">{t.projectsPage.sourceNote}</p>
    </div>
  );
}
