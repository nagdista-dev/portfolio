import Link from "next/link";
import { messages } from "@/content/messages";
import { SITE, localePath } from "@/content/site";
import { getRelatedArticles } from "@/content/blog";
import { pageUrl } from "@/lib/seo";
import type { Article, Locale } from "@/content/types";
import { ArticleBody } from "./article-body";
import { ArticleCard } from "./article-card";
import { ShareLinks } from "./share-links";
import { ArrowLeft, ArrowRight, ClockIcon } from "./icons";

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

export function ArticleView({
  article,
  locale,
}: {
  article: Article;
  locale: Locale;
}) {
  const t = messages[locale];
  const related = getRelatedArticles(article);
  const blogHref = localePath(locale, "/blog/");
  const contactHref = `${localePath(locale, "/")}#contact`;
  const url = pageUrl(locale, `/blog/${article.slug}/`);

  return (
    <div className="container">
      <header className="article-hero">
        <Link href={blogHref} className="text-link">
          {locale === "ar" ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
          {t.articlePage.back}
        </Link>

        <div className="article-hero__meta">
          <span className="tag">{article.category}</span>
          <span>
            {t.blogPage.published}{" "}
            <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
          </span>
          <span className="article-card__reading">
            <ClockIcon size={14} />
            {article.readingTime} {t.blogPage.minRead}
          </span>
          {article.updated ? (
            <span>
              {t.blogPage.updated} {formatDate(article.updated, locale)}
            </span>
          ) : null}
        </div>

        <h1 className="article-hero__title">{article.title}</h1>
        <p className="article-hero__description">{article.description}</p>

        <ul className="article-hero__tags" aria-label={t.articlePage.tags}>
          {article.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="article-layout">
        <div className="article-layout__main">
          <article>
            <ArticleBody blocks={article.blocks} />
          </article>

          <ShareLinks url={url} title={article.title} locale={locale} />

          <div className="article-cta" style={{ marginTop: "2rem" }}>
            <h2>{t.articlePage.ctaTitle}</h2>
            <p>{t.articlePage.ctaBody}</p>
            <Link href={contactHref} className="button button--small">
              {t.articlePage.ctaButton}
              <ArrowRight size={15} />
            </Link>
          </div>

          {related.length > 0 ? (
            <section className="related-articles" aria-labelledby="related-title">
              <h2 id="related-title" className="related-articles__title">
                {t.articlePage.related}
              </h2>
              <div className="article-grid">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} locale={locale} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="article-layout__aside">
          <div className="author-card">
            <div className="author-card__head">
              <span className="author-card__mark" aria-hidden="true">
                N
              </span>
              <div>
                <p className="author-card__name">
                  <Link href={localePath(locale, "/about/")}>
                    {locale === "ar" ? SITE.nameAr : SITE.name}
                  </Link>
                </p>
                <p className="author-card__role">{t.articlePage.authorRole}</p>
              </div>
            </div>
            <p className="author-card__bio">{t.articlePage.authorBio}</p>
            <Link href={localePath(locale, "/about/")} className="text-link">
              {t.nav.about}
              <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
