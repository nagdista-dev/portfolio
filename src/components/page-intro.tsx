import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, intro, aside }: PageIntroProps) {
  return (
    <header className="page-intro" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-intro__grid">
        <h1 className="page-intro__title">{title}</h1>
        <div className="page-intro__aside">
          <p className="page-intro__intro">{intro}</p>
          {aside}
        </div>
      </div>
    </header>
  );
}
