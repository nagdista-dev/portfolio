import type { CSSProperties } from "react";
import type { Project } from "@/content/types";
import { CheckIcon, PlayIcon } from "./icons";

function PlaylistMotif() {
  return (
    <div className="motif motif--playlist">
      <span className="motif-stack motif-stack--back" />
      <span className="motif-stack motif-stack--mid" />
      <span className="motif-stack motif-stack--front">
        <span className="motif-play">
          <PlayIcon size={26} />
        </span>
        <span className="motif-line" />
        <span className="motif-line motif-line--short" />
        <span className="motif-progress">
          <span />
        </span>
      </span>
    </div>
  );
}

function VideoMotif() {
  return (
    <div className="motif motif--video">
      <span className="motif-video motif-video--a">
        <PlayIcon size={22} />
        <span className="motif-video__bar">
          <span />
        </span>
      </span>
      <span className="motif-video motif-video--b">
        <PlayIcon size={16} />
      </span>
      <span className="motif-video motif-video--c">
        <PlayIcon size={16} />
      </span>
    </div>
  );
}

function WordbankMotif() {
  return (
    <div className="motif motif--wordbank">
      <span className="motif-word-card">
        <span className="motif-word-card__label">WORD BANK</span>
        <span className="motif-word-card__word">word</span>
        <span className="motif-word-card__translation" dir="rtl">
          كلمة
        </span>
        <span className="motif-word-card__check">
          <CheckIcon size={16} />
        </span>
      </span>
      <span className="motif-chip">Markdown</span>
      <span className="motif-chip motif-chip--alt">local</span>
    </div>
  );
}

const PRAYER_TIMES = ["04:58", "12:14", "15:42", "18:06", "19:34"];

function ScheduleMotif() {
  return (
    <div className="motif motif--schedule">
      <span className="motif-schedule__line" />
      {PRAYER_TIMES.map((time, index) => (
        <span
          className="motif-schedule__row"
          key={time}
          style={{ "--i": index } as CSSProperties}
        >
          <span className="motif-schedule__dot" />
          <span className="motif-schedule__time">{time}</span>
          <span className="motif-schedule__bar" />
        </span>
      ))}
    </div>
  );
}

function FeedMotif() {
  return (
    <div className="motif motif--feed">
      {[0, 1, 2].map((index) => (
        <span
          className="motif-post"
          key={index}
          style={{ "--i": index } as CSSProperties}
        >
          <span className="motif-post__avatar" />
          <span className="motif-post__body">
            <span className="motif-post__line" />
            <span className="motif-post__line motif-post__line--short" />
          </span>
          <span className="motif-post__dot" />
        </span>
      ))}
    </div>
  );
}

type ProjectCoverProps = {
  project: Project;
  className?: string;
};

export function ProjectCover({
  project,
  className = "",
}: ProjectCoverProps) {
  const style = {
    "--cover-bg": project.cover.bg,
    "--cover-fg": project.cover.fg,
    "--cover-accent": project.cover.accent,
  } as CSSProperties;

  return (
    <div
      className={`project-cover ${className}`.trim()}
      style={style}
      data-motif={project.cover.motif}
      aria-hidden="true"
    >
      <span className="project-cover__mark">N</span>
      <div className="project-cover__top">
        <span>{project.index}</span>
        <span>{project.year}</span>
      </div>
      <div className="project-cover__motif">
        {project.cover.motif === "playlist" ? <PlaylistMotif /> : null}
        {project.cover.motif === "video" ? <VideoMotif /> : null}
        {project.cover.motif === "wordbank" ? <WordbankMotif /> : null}
        {project.cover.motif === "schedule" ? <ScheduleMotif /> : null}
        {project.cover.motif === "feed" ? <FeedMotif /> : null}
      </div>
      <div className="project-cover__bottom">
        <span className="project-cover__name">{project.name}</span>
        <span className="project-cover__stack">
          {project.stack.slice(0, 2).join(" · ")}
        </span>
      </div>
    </div>
  );
}
