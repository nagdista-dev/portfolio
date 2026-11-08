"use client";

import { useState, type FormEvent } from "react";
import { messages } from "@/content/messages";
import { SITE } from "@/content/site";
import type { Locale } from "@/content/types";
import { ArrowUpRight } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

type Values = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const [values, setValues] = useState<Values>(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const hasKey = Boolean(SITE.web3formsKey);

  function update(field: keyof Values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (honeypot) return;

    const subject =
      values.subject.trim() ||
      (locale === "ar" ? "رسالة من nagdista.com" : "Message from nagdista.com");

    if (!hasKey) {
      const body = [
        `${t.contact.name}: ${values.name}`,
        `${t.contact.email}: ${values.email}`,
        "",
        values.message,
      ].join("\n");

      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          name: values.name,
          email: values.email,
          subject,
          message: values.message,
          from_name: "nagdista.com",
          botcheck: honeypot,
        }),
      });

      const data = (await response.json()) as { success?: boolean };

      if (response.ok && data.success) {
        setStatus("success");
        setValues(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <input
        type="text"
        name="botcheck"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="contact-name">{t.contact.name}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.contact.namePlaceholder}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">{t.contact.email}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            dir="ltr"
            placeholder={t.contact.emailPlaceholder}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-subject">{t.contact.subject}</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder={t.contact.subjectPlaceholder}
          value={values.subject}
          onChange={(event) => update("subject", event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="contact-message">{t.contact.message}</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={4000}
          placeholder={t.contact.messagePlaceholder}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </div>

      <div className="contact-form__actions">
        <button
          type="submit"
          className="button button--accent"
          disabled={status === "sending"}
        >
          {status === "sending" ? t.contact.sending : hasKey ? t.contact.send : t.contact.fallback}
          <ArrowUpRight size={16} />
        </button>
        <p className="contact-form__privacy">{t.contact.privacy}</p>
      </div>

      {!hasKey ? (
        <p className="contact-form__note">{t.contact.fallbackNote}</p>
      ) : null}

      <p
        className={`contact-form__status contact-form__status--${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "success" ? t.contact.success : null}
        {status === "error" ? t.contact.error : null}
      </p>
    </form>
  );
}
