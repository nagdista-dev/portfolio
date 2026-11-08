import { TIMELINE } from "@/content/home";
import type { Locale } from "@/content/types";

const KIND_LABEL = {
  en: {
    education: "Education",
    work: "Work",
    project: "Building",
  },
  ar: {
    education: "تعليم",
    work: "شغل",
    project: "بناء",
  },
} as const;

export function Timeline({ locale }: { locale: Locale }) {
  return (
    <ol className="timeline">
      {TIMELINE.map((item, index) => (
        <li className="timeline__item" key={`${item.period.en}-${index}`} data-reveal>
          <div className="timeline__marker" aria-hidden="true">
            <span />
          </div>
          <div className="timeline__period">{item.period[locale]}</div>
          <div className="timeline__content">
            <div className="timeline__meta">
              <span className={`timeline__kind timeline__kind--${item.kind}`}>
                {KIND_LABEL[locale][item.kind]}
              </span>
              <span className="timeline__org">{item.org[locale]}</span>
            </div>
            <h3 className="timeline__title">{item.title[locale]}</h3>
            <p className="timeline__description">
              {item.description[locale]}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
