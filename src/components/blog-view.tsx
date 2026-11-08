import { messages } from "@/content/messages";
import { getArticles } from "@/content/blog";
import type { Locale } from "@/content/types";
import { PageIntro } from "./page-intro";
import { ArticleCard } from "./article-card";

export function BlogView({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const articles = getArticles(locale);
  const [latest, ...rest] = articles;

  return (
    <div className="container">
      <PageIntro
        eyebrow={t.blogPage.eyebrow}
        title={t.blogPage.title}
        intro={t.blogPage.intro}
      />

      <div className="blog-page__grid">
        {latest ? (
          <section className="blog-page__featured" aria-labelledby="latest-article">
            <h2 id="latest-article" className="blog-page__section-title">
              {t.blogPage.latest}
            </h2>
            <ArticleCard article={latest} locale={locale} featured />
          </section>
        ) : null}

        {rest.length > 0 ? (
          <section aria-labelledby="all-articles">
            <h2 id="all-articles" className="blog-page__section-title">
              {t.blogPage.allArticles}
            </h2>
            <div className="article-grid">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
