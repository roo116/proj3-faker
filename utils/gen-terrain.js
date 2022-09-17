const genTerrain = () => {
  const terrain = [
    "lake",
    "beach",
    "farm",
    "forest",
    "river",
    "hotSpring",
    "swimmingHole",
    "desert",
    "cave",
  ];

  let newTerrain = [];
  console.log(">>> empty new terrain ", newTerrain)

  let pickTerrain = Math.floor(Math.random(0) * 9);
  console.log(">>> pickTerrain value ", pickTerrain)
  newTerrain.push(terrain[pickTerrain]);

  console.log("newTerrain should be populated with something ", newTerrain)
  return newTerrain;
};

export default genTerrain;
