const genAmenitiy = () => {
  const amenities = [
    "parking",
    "wheelchairAccessible",
    "petAllowed",
    "toilets",
    "campfire",
    "water",
    "showers",
    "trash",
    "hotTub",
    "picnicTable",
    "wifi",
    "cookingEquipment",
  ];

  let newAmenities = [];

  for (let i = 0; i < amenities.length; i++) {
    let randomBool = Math.random() < 0.6 ? "true" : "false";

    newAmenities.push(amenities[i] + ": " + randomBool);
  }

  return newAmenities;
};
export default genAmenitiy;

