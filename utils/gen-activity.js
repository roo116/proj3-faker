const genActivity = () => {
  const activities = [
    "fishing",
		"paddling",
		"birdWatching",
		"wildlifeWatching",
		"biking",
		"boating",
		"offRoading",
		"climbing",
		"snowSports",
		"horsebackRiding",
		"surfing",
		"windSport",
  ];

  let newActivities = [];

  for (let i = 0; i < activities.length; i++) {
    let randomBool = Math.random() < 0.6 ? "true" : "false";

    newActivities.push(activities[i] + ": " + randomBool);
  }

  return newActivities;
};
export default genActivity;

