const fs = require("fs/promises");
const path = require("path");
const faker = require("@faker-js/faker").faker;

function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(async function main() {
  const airlines = JSON.parse(
    await fs.readFile(path.join(__dirname, "./data/airlines.json"), "utf8")
  );
  for (const airline of airlines) {
    const numberOfReviews = rndInt(3, 11);
    airline.customerServiceEmail = faker.internet.email();
    airline.customerServicePhone = faker.phone.phoneNumber();
    airline.customerServiceWebsite = faker.internet.url();
    airline.reviews = [];
    for (let i = 0; i < numberOfReviews; i++) {
      airline.reviews.push({
        customerName: faker.name.firstName(),
        review: faker.lorem.paragraph(rndInt(1, 5)),
        overallScore: rndInt(1, 5),
        scheduleAccuracy: rndInt(-5, 5),
        foodQuality: rndInt(1, 5),
        legRoom: rndInt(1, 5),
        cleanliness: rndInt(1, 5),
        staff: rndInt(1, 5),
        wouldRecommend: rndInt(1, 5),
      });
    }
  }
  await fs.writeFile(
    path.join(__dirname, "./data/airlines_data_for_service.json"),
    JSON.stringify(airlines, null, 2)
  );
})();
