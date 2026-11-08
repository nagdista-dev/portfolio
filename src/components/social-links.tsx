import Link from "next/link";
import type { ReactElement } from "react";
import { SOCIAL_LINKS } from "@/content/site";
import {
  GithubIcon,
  LinkedinIcon,
  TopmateIcon,
  XIcon,
  type IconProps,
} from "./icons";

const ICONS: Record<string, (props: IconProps) => ReactElement> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
  Topmate: TopmateIcon,
};

type SocialLinksProps = {
  className?: string;
  showHandles?: boolean;
};

export function SocialLinks({
  className = "",
  showHandles = false,
}: SocialLinksProps) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = ICONS[item.label];
        return (
          <li key={item.label}>
            <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label={`${item.label} — ${item.handle}`}
            >
              {Icon ? <Icon size={17} /> : null}
              <span>{item.label}</span>
              {showHandles ? (
                <span className="social-link__handle">{item.handle}</span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
