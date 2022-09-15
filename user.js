import { faker } from "@faker-js/faker";
import fs from "fs";
function generateUsers() {
  let users = [];

  for (let id = 1; id <= 10; id++) {
    let username = faker.internet.userName();
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let phone = faker.phone.number();
    let password = faker.internet.password();

    users.push({
      "username": username,
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
    });
  }
  return { data: users };
}

let dataObj = generateUsers();

fs.writeFileSync("users.json", JSON.stringify(dataObj, null, "\t"));

// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();
// let email = faker.internet.email();
// let phone = faker.phone.number();
// let password = faker.internet.password();
// let prefix = faker.name.prefix();
// let suffix = faker.name.suffix();
// console.log(
//     `User: ${prefix} ${firstName} ${lastName} ${email} ${phone} ${password} ${suffix}`
//   );
