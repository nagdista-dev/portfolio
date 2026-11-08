import { Fragment, type ReactNode } from "react";
import type { ArticleBlock } from "@/content/types";

function renderInline(text: string): ReactNode {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} dir="ltr">
            {part.slice(1, -1)}
          </code>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
}

function headingId(text: string, index: number): string {
  const slug = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return slug ? `${slug}-${index}` : `section-${index}`;
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return <p key={index}>{renderInline(block.text)}</p>;
          case "h2":
            return (
              <h2 key={index} id={headingId(block.text, index)}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} id={headingId(block.text, index)}>
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={index}>
                <p>{renderInline(block.text)}</p>
                {block.cite ? <cite>— {block.cite}</cite> : null}
              </blockquote>
            );
          case "code":
            return (
              <figure className="code-block" key={index}>
                <figcaption>{block.lang}</figcaption>
                <pre dir="ltr">
                  <code>{block.code}</code>
                </pre>
              </figure>
            );
          case "callout":
            return (
              <aside className="callout" key={index}>
                <p className="callout__title">{block.title}</p>
                <p>{renderInline(block.text)}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
