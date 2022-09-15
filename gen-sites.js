import { faker } from "@faker-js/faker";
import fs from "fs";
function generateSites() {
  let sites = [];

  for (let i = 1; i <= 50; i++) {
    let name = faker.address.city();
    let location = faker.address.streetAddress();
    let description = faker.lorem.sentence(5);
    let rate = faker.finance.amount(1,50,0);

    sites.push({
      "name": name,
      "location": location,
      "description": description,
      "rate": rate,
    });
  }
  return { data: sites };
}

let dataObj = generateSites();

fs.writeFileSync("sites.js", JSON.stringify(dataObj, null, "\t"));