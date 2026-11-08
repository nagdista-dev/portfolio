import Link from "next/link";
import { localePath } from "@/content/site";
import { messages } from "@/content/messages";
import type { Article, Locale } from "@/content/types";
import { ArrowUpRight, ClockIcon } from "./icons";

function formatDate(date: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(
      locale === "ar" ? "ar-EG-u-nu-latn" : "en-US",
      { year: "numeric", month: "long", day: "numeric" },
    ).format(new Date(date));
  } catch {
    return date;
  }
}

type ArticleCardProps = {
  article: Article;
  locale: Locale;
  featured?: boolean;
};

export function ArticleCard({
  article,
  locale,
  featured = false,
}: ArticleCardProps) {
  const t = messages[locale];
  const href = localePath(locale, `/blog/${article.slug}/`);

  return (
    <article
      className={`article-card${featured ? " article-card--featured" : ""}`}
    >
      <Link href={href} className="article-card__link">
        <div className="article-card__meta">
          <span className="tag">{article.category}</span>
          <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
          <span className="article-card__reading">
            <ClockIcon size={14} />
            {article.readingTime} {t.blogPage.minRead}
          </span>
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <span className="article-card__cta">
          {t.common.readMore}
          <ArrowUpRight size={18} />
        </span>
      </Link>
    </article>
  );
}
