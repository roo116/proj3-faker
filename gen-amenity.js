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

let newAmenities = []

newAmenities = amenities.push([0])

console.log(newAmenities)

// let newAmenities = [];

// console.log(">>> creating array amenities", amenities);

// // amenities.map(addBoolean);

// function addBoolean(arr) {
//   console.log("<<< This is arr ", arr);
//   for (let i = 0; i < arr.lenght; i++) {
//     let randomBool = Math.random() < 0.6 ? "true" : "false";
// console.log("<<< This is randomBool", randomBool);
//     newAmenities = arr.push(i);
//   }
// }

// addBoolean(amenities);git 

// const createAmenities = (numAmen = 5) => {
// pseudocode
// use the gen-site code to create the fake sites,
// within in that generation loop add code to create amenities

// map through amenities
// add either true or false to the amenity using a random true/false generator function
// output the results to a new amenity array
// return that array as part of the sites.json data.

//  !!!! CHECK HOW THIS IS DONE IN password-generator !!!!

// i need to create a function that generates the array with true or false boolean values
// var array = [amenities]
// var true = 0
// var false = 0
// for (i = 0: i<array.length; i++) {
// const amenlist = map.amenities(amenity => {
// bool_rand =
// array.push(`"${amenity}:${result of rand_boolean})
// })
// }

// }

// var randomBool = (function() {
//     var a = new Uint8Array(1);
//     return function() {
//       crypto.getRandomValues(a);
//       return a[0] > 127;
//     };
//   })();

//   var trues = 0;
//   var falses = 0;
//   for (var i = 0; i < 255; i++) {
//     if (randomBool()) {
//       trues++;
//     }
//     else {
//       falses++;
//     }
//   }

// const random_boolean = Math.random()<0.4

// return Array.from({length: numAmen}, createAmenities);
// Array.from({length: 40}, () => Math.floor(Math.random() * 40));
