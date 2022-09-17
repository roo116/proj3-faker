import { faker } from "@faker-js/faker";
import fs from "fs";
import genAmenitiy from "./utils/gen-amenity.js";
import genActivity from "./utils/gen-activity.js";
import genTerrain from "./utils/gen-terrain.js";


function generateSites() {
  let sites = [];

  for (let i = 1; i <= 50; i++) {
    let name = faker.address.city();
    let location = faker.address.streetAddress();
    let description = faker.lorem.sentence(5);
    let price = faker.finance.amount(1,50,0);
    let amenities = genAmenitiy();
    let activities = genActivity();
    let terrain = genTerrain();

    sites.push({
      "name": name,
      "location": location,
      "description": description,
      "price": price,
      "amenities": amenities,
      "activities": activities,
      "terrain": terrain
    });
  }
  return sites;
}

let dataObj = generateSites();

fs.writeFileSync("./dist/campsites.js", JSON.stringify(dataObj, null, "\t"));