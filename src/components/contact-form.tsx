"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
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
  const startRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fill-time signal for the form backend's spam filter.
    if (startRef.current) {
      startRef.current.value = String(Date.now());
    }
  }, []);

  function update(field: keyof Values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (honeypot) return;

    const form = event.currentTarget;
    const subject =
      values.subject.trim() ||
      (locale === "ar" ? "رسالة من nagdista.com" : "Message from nagdista.com");

    setStatus("sending");

    const data = new FormData(form);
    data.set("_subject", subject);
    data.set("_page", window.location.href);
    if (startRef.current) {
      data.set("_start_time", startRef.current.value);
    }

    try {
      const response = await fetch(SITE.contactEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;

      if (response.ok && result?.ok) {
        setStatus("success");
        setValues(EMPTY);
        form.reset();
        if (startRef.current) {
          startRef.current.value = String(Date.now());
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      action={SITE.contactEndpoint}
      method="post"
      onSubmit={onSubmit}
      aria-busy={status === "sending"}
    >
      <input
        type="text"
        name="_gotcha"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />
      <input ref={startRef} type="hidden" name="_start_time" defaultValue="" />
      <input
        type="hidden"
        name="_next"
        value={
          locale === "ar"
            ? "https://nagdista.com/ar/thanks/"
            : "https://nagdista.com/thanks/"
        }
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
          {status === "sending" ? t.contact.sending : t.contact.send}
          <ArrowUpRight size={16} />
        </button>
        <p className="contact-form__privacy">{t.contact.privacy}</p>
      </div>

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
