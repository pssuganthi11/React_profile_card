const BadgeItem = (prop) => {
  console.log(prop);
  let badgecolor;
  if (prop.color === "green") {
    badgecolor = "bg-green-500";
  } else if (prop.color === "yellow") {
    badgecolor = "bg-yellow-500";
  } else if (prop.color === "black") {
    badgecolor = "bg-black";
  } else if (prop.color === "orange") {
    badgecolor = "bg-orange-500";
  } else if (prop.color === "blue") {
    badgecolor = "bg-blue-500";
  } else if (prop.color === "cyan") {
    badgecolor = "bg-cyan-500";
  } else if (prop.color === "gray") {
    badgecolor = "bg-gray-500";
  } else if (prop.color === "red") {
    badgecolor = "bg-red-500";
  } else if (prop.color === "teal") {
    badgecolor = "bg-teal-500";
  }

  return (
    <div
      className={`${badgecolor} text-white px-3 py-1 rounded flex items-center `}
    >
      {prop.children}
      {prop.skill}
    </div>
  );
};

export default BadgeItem;
