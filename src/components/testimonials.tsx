import Link from "next/link";
import { messages } from "@/content/messages";
import type { Locale } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { ArrowRight } from "./icons";

export function Testimonials({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const contactHref = locale === "ar" ? "/ar/#contact" : "/#contact";

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <SectionHeading
          label={t.home.testimonialsLabel}
          title={t.home.testimonialsTitle}
        />
        <div className="testimonials__panel" data-reveal>
          <span className="testimonials__quote" aria-hidden="true">
            “
          </span>
          <p className="testimonials__body">{t.home.testimonialsBody}</p>
          <div className="testimonials__foot">
            <span className="testimonials__note">
              <span className="status-dot" aria-hidden="true" />
              {t.home.testimonialsNote}
            </span>
            <Link href={contactHref} className="text-link">
              {t.home.testimonialsCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
