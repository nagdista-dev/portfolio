import { GITHUB_FALLBACK, type GitHubRepo } from "@/content/github-fallback";

const OWNER = "nagdista-dev";

const EXCLUDED_REPOS = new Set(["nagdista-dev", "portfolio-legacy"]);

const DEAD_HOMEPAGES = new Set([
  "https://tarteeb-your-day.netlify.app",
  "https://yost-two.vercel.app",
]);

type RawRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
};

function normalize(raw: RawRepo): GitHubRepo {
  return {
    name: raw.name,
    description: raw.description,
    url: raw.html_url,
    homepageUrl:
      raw.homepage && !DEAD_HOMEPAGES.has(raw.homepage)
        ? raw.homepage
        : null,
    language: raw.language,
    stars: raw.stargazers_count,
    updatedAt: raw.updated_at,
    topics: raw.topics ?? [],
    fork: raw.fork,
    archived: raw.archived,
  };
}

function isVisible(repo: GitHubRepo): boolean {
  return (
    !repo.fork &&
    !repo.archived &&
    !EXCLUDED_REPOS.has(repo.name)
  );
}

function sortRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return [...repos].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

/**
 * Runs at build time for the static export. If the API is unavailable or
 * rate-limited, the committed fallback snapshot keeps the page complete.
 */
export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "nagdista-portfolio",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`,
      { headers, cache: "no-store" },
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const raw = (await response.json()) as RawRepo[];
    const repos = raw.map(normalize).filter(isVisible);

    if (repos.length === 0) {
      throw new Error("GitHub API returned no visible repositories");
    }

    return sortRepos(repos);
  } catch {
    return sortRepos(GITHUB_FALLBACK.filter(isVisible));
  }
}
