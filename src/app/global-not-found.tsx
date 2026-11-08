import type { Metadata } from "next";
import "./globals.css";
import { inter, spaceGrotesk } from "@/lib/fonts-en";

export const metadata: Metadata = {
  title: "404 — Page not found | Mahmoud Elnagdy",
  description: "This page does not exist.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr" className={`locale-en ${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <main className="not-found">
          <div className="not-found__inner">
            <p className="not-found__code">404</p>
            <h1>This page doesn&apos;t exist.</h1>
            <p>
              The link may be broken, or the page may have moved. Let&apos;s get you back to
              something useful.
            </p>
            <p lang="ar" dir="rtl">
              الصفحة دي مش موجودة. ممكن اللينك اتكسر أو الصفحة اتنقلت.
            </p>
            <div className="not-found__actions">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="button">
                Back home
              </a>
              <a href="/ar/" className="button button--ghost" hrefLang="ar" lang="ar">
                الرئيسية
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
