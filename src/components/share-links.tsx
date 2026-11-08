"use client";

import { useEffect, useRef, useState } from "react";
import { messages } from "@/content/messages";
import type { Locale } from "@/content/types";
import { CheckIcon, LinkIcon, LinkedinIcon, XIcon } from "./icons";

type ShareLinksProps = {
  url: string;
  title: string;
  locale: Locale;
};

export function ShareLinks({ url, title, locale }: ShareLinksProps) {
  const t = messages[locale];
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="share-links">
      <span className="share-links__label">{t.articlePage.share}</span>
      <div className="share-links__actions">
        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(
            title,
          )}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="share-link"
          aria-label="Share on X"
        >
          <XIcon size={16} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="share-link"
          aria-label="Share on LinkedIn"
        >
          <LinkedinIcon size={16} />
        </a>
        <button
          type="button"
          className="share-link share-link--button"
          onClick={copyLink}
          aria-label={t.articlePage.copyLink}
        >
          {copied ? <CheckIcon size={16} /> : <LinkIcon size={16} />}
          <span>{copied ? t.articlePage.copied : t.articlePage.copyLink}</span>
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? t.articlePage.copied : ""}
        </span>
      </div>
    </div>
  );
}
