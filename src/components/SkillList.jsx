export function SkillList({ data, view }) {
  const iconList = [
    "/Attack_icon.png",
    "/Hitpoints_icon.png",
    "/Mining_icon.png",
    "/Strength_icon.png",
    "/Agility_icon.png",
    "/Smithing_icon.png",
    "/Defence_icon.png",
    "/Herblore_icon.png",
    "/Fishing_icon.png",
    "/Ranged_icon.png",
    "/Thieving_icon.png",
    "/Cooking_icon.png",
    "/Prayer_icon.png",
    "/Crafting_icon.png",
    "/Firemaking_icon.png",
    "/Magic_icon.png",
    "/Fletching_icon.png",
    "/Woodcutting_icon.png",
    "/Runecraft_icon.png",
    "/Slayer_icon.png",
    "/Farming_icon.png",
    "/Construction_icon.png",
    "/Hunter_icon.png",
    "",
  ];

  if (!data || !view) return null;

  const newList = [
    data.skills[1],
    data.skills[4],
    data.skills[15],
    data.skills[3],
    data.skills[17],
    data.skills[14],
    data.skills[2],
    data.skills[16],
    data.skills[11],
    data.skills[5],
    data.skills[18],
    data.skills[8],
    data.skills[6],
    data.skills[13],
    data.skills[12],
    data.skills[7],
    data.skills[10],
    data.skills[9],
    data.skills[21],
    data.skills[19],
    data.skills[20],
    data.skills[23],
    data.skills[22],
    data.skills[0],
  ];

  if (data && view) {
    return (
      <>
        <h2>Skills</h2>
        <div className="grid-container">
          {newList.map((skill, index) => (
            <div key={skill.id} className="grid-item">
              <img
                src={iconList[index]}
                alt={`${skill.name && "Total level:"} icon`}
              />

              {skill.level}
              {skill.name}
              {/* <strong>{skill.name}</strong>: Rank {skill.rank}, Level{" "}
              {skill.level}, XP {skill.xp} */}
            </div>
          ))}
        </div>
      </>
    );
  }
}
