import { faker } from "@faker-js/faker";
import fs from "fs";
import genAmenitiy from "./gen-amenity.js";
import genActivity from "./gen-activity.js";


function generateSites() {
  let sites = [];

  for (let i = 1; i <= 50; i++) {
    let name = faker.address.city();
    let location = faker.address.streetAddress();
    let description = faker.lorem.sentence(5);
    let price = faker.finance.amount(1,50,0);
    let amenities = genAmenitiy();
    let activities = genActivity();

    sites.push({
      "name": name,
      "location": location,
      "description": description,
      "price": price,
      "amenities": amenities,
      "activities": activities,
    });
  }
  return sites;
}

let dataObj = generateSites();

fs.writeFileSync("./dist/campsites.js", JSON.stringify(dataObj, null, "\t"));