import Link from "next/link";
import { messages } from "@/content/messages";
import type { Locale } from "@/content/types";
import { CheckIcon } from "./icons";

export function ThanksView({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const isArabic = locale === "ar";

  return (
    <section className="thanks">
      <div className="thanks__inner">
        <span className="thanks__mark" aria-hidden="true">
          <CheckIcon size={28} />
        </span>
        <p className="eyebrow">{t.thanks.eyebrow}</p>
        <h1>{t.thanks.title}</h1>
        <p>{t.thanks.body}</p>
        <div className="thanks__actions">
          <Link href={isArabic ? "/ar/" : "/"} className="button">
            {t.thanks.back}
          </Link>
          <Link
            href={isArabic ? "/ar/projects/" : "/projects/"}
            className="button button--ghost"
          >
            {t.thanks.work}
          </Link>
        </div>
      </div>
    </section>
  );
}
