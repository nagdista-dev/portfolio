import { messages } from "@/content/messages";
import { SITE } from "@/content/site";
import type { Locale } from "@/content/types";
import { ContactForm } from "./contact-form";
import { CopyButton } from "./copy-button";
import { SocialLinks } from "./social-links";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function ContactSection({ locale }: { locale: Locale }) {
  const t = messages[locale];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__intro" data-reveal>
            <p className="eyebrow eyebrow--light">{t.home.contactLabel}</p>
            <h2 className="contact__title">{t.home.contactTitle}</h2>
            <p className="contact__lead">{t.home.contactIntro}</p>

            <div className="contact__status">
              <span className="status-dot status-dot--accent" aria-hidden="true" />
              <span>{t.contact.availability}</span>
            </div>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">
                  <MailIcon size={16} />
                  {t.contact.emailLabel}
                </span>
                <a href={`mailto:${SITE.email}`} className="contact__detail-value" dir="ltr">
                  {SITE.email}
                </a>
                <CopyButton
                  value={SITE.email}
                  label={t.contact.copyEmail}
                  copiedLabel={t.common.copied}
                  className="copy-button--light"
                />
              </div>

              <div className="contact__detail">
                <span className="contact__detail-label">
                  <PhoneIcon size={16} />
                  {t.contact.phoneLabel}
                </span>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="contact__detail-value"
                  dir="ltr"
                >
                  {SITE.phone}
                </a>
                <CopyButton
                  value={SITE.phone}
                  label={t.contact.copyPhone}
                  copiedLabel={t.common.copied}
                  className="copy-button--light"
                />
              </div>

              <div className="contact__detail">
                <span className="contact__detail-label">
                  <MapPinIcon size={16} />
                  {t.contact.locationLabel}
                </span>
                <span className="contact__detail-value">
                  {SITE.location[locale]}
                </span>
              </div>
            </div>

            <div className="contact__socials">
              <span className="contact__detail-label">
                {t.contact.socialsLabel}
              </span>
              <SocialLinks className="social-links--light" />
            </div>

            <p className="contact__response">{t.contact.responseTime}</p>
          </div>

          <div className="contact__form-wrap" data-reveal>
            <div className="contact__form-head">
              <h3>{t.contact.title}</h3>
              <p>{t.contact.intro}</p>
            </div>
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
