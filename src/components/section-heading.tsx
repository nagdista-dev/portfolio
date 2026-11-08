import Link from "next/link";
import { ArrowRight } from "./icons";

type SectionHeadingProps = {
  label: string;
  title: string;
  intro?: string;
  action?: {
    label: string;
    href: string;
  };
  align?: "start" | "center";
};

export function SectionHeading({
  label,
  title,
  intro,
  action,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align}`}
      data-reveal
    >
      <p className="eyebrow">{label}</p>
      <div className="section-heading__grid">
        <h2 className="section-heading__title">{title}</h2>
        {intro ? <p className="section-heading__intro">{intro}</p> : null}
      </div>
      {action ? (
        <Link href={action.href} className="text-link section-heading__action">
          {action.label}
          <ArrowRight size={16} />
        </Link>
      ) : null}
    </div>
  );
}
