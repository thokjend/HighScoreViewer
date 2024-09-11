import { useState } from "react";

export function SkillList({ data, view, name }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  if (!data || !view) return null;

  const skillData = [
    { skill: data.skills[1], icon: "/Attack_icon.png" },
    { skill: data.skills[4], icon: "/Hitpoints_icon.png" },
    { skill: data.skills[15], icon: "/Mining_icon.png" },
    { skill: data.skills[3], icon: "/Strength_icon.png" },
    { skill: data.skills[17], icon: "/Agility_icon.png" },
    { skill: data.skills[14], icon: "/Smithing_icon.png" },
    { skill: data.skills[2], icon: "/Defence_icon.png" },
    { skill: data.skills[16], icon: "/Herblore_icon.png" },
    { skill: data.skills[11], icon: "/Fishing_icon.png" },
    { skill: data.skills[5], icon: "/Ranged_icon.png" },
    { skill: data.skills[18], icon: "/Thieving_icon.png" },
    { skill: data.skills[8], icon: "/Cooking_icon.png" },
    { skill: data.skills[6], icon: "/Prayer_icon.png" },
    { skill: data.skills[13], icon: "/Crafting_icon.png" },
    { skill: data.skills[12], icon: "/Firemaking_icon.png" },
    { skill: data.skills[7], icon: "/Magic_icon.png" },
    { skill: data.skills[10], icon: "/Fletching_icon.png" },
    { skill: data.skills[9], icon: "/Woodcutting_icon.png" },
    { skill: data.skills[21], icon: "/Runecraft_icon.png" },
    { skill: data.skills[19], icon: "/Slayer_icon.png" },
    { skill: data.skills[20], icon: "/Farming_icon.png" },
    { skill: data.skills[23], icon: "/Construction_icon.png" },
    { skill: data.skills[22], icon: "/Hunter_icon.png" },
    { skill: data.skills[0], icon: "" },
  ];

  return (
    <>
      <h2 className="header-text">Personal scores for {name}</h2>
      <h2>Skills</h2>

      <div className="grid-container">
        {skillData.map(({ skill, icon }, index) => (
          <div
            key={skill.id}
            className="grid-item"
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {index === 23 ? (
              <span>Total level: {skill.level}</span>
            ) : (
              <>
                <img src={icon} alt={`${skill.name} icon`} />
                <div className="skill-level">
                  <span className="skill-part-top">{skill.level}</span>
                  <span className="skill-separator"></span>
                  <span className="skill-part-bottom">{skill.level}</span>
                </div>
              </>
            )}
            {hoveredSkill === skill && (
              <div className="tooltip">
                <strong>Rank:</strong>{" "}
                {skill.rank === -1 ? "Unranked" : skill.rank} <br />
                <strong>XP:</strong> {skill.xp}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
