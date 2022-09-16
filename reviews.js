import { faker } from "@faker-js/faker";
import fs from "fs";
function generateReviews() {
  let reviews = [];

  for (let id = 1; id <= 5; id++) {
    let campsite = faker.address.city()
    let rating = Math.floor(Math.random(1)*6);
    let reviewText = faker.random.words(10);
    let createdAt = faker.date.recent(90)
    let username = "current-user";
   
    reviews.push({
        "_id": id,
    "campsite": campsite,
    "rating": rating,
    "reviewText": reviewText,
    "createdAt": createdAt,
    "username": username
   })

  }
  return reviews;
}

let dataObj = generateReviews();

fs.writeFileSync("./dist/reviews.js", JSON.stringify(dataObj, null, "\t"));

