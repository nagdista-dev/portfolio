import type { Locale, SkillGroup } from "@/content/types";

export function SkillGroups({
  groups,
  locale,
}: {
  groups: SkillGroup[];
  locale: Locale;
}) {
  return (
    <div className="skill-groups">
      {groups.map((group, index) => (
        <section className="skill-group" key={group.id} data-reveal>
          <div className="skill-group__head">
            <span className="skill-group__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="skill-group__title">{group.label[locale]}</h3>
          </div>
          <p className="skill-group__note">{group.note[locale]}</p>
          <ul className="skill-group__list" aria-label={group.label[locale]}>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
