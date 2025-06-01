// Local Seed script to populate the database with initial data
// import { createSeedClient } from "@snaplet/seed";
// import { faker } from "@faker-js/faker";

// const main = async () => {
//   const seed = await createSeedClient();

//   await seed.$resetDatabase();

//   await seed.cities((x) =>
//     x(10, () => ({
//       name: faker.location.city(),
//     }))
//   );

//   await seed.holidays_offers((x) =>
//     x(2, () => ({
//       name: faker.lorem.words(3),
//       address: faker.location.streetAddress(),
//       postal_code: faker.location.zipCode(),
//       description: faker.lorem.paragraph(),
//       max_people: faker.number.int({ min: 1, max: 10 }),
//       rooms: faker.number.int({ min: 1, max: 5 }),
//       host_type: faker.helpers.arrayElement([
//         "hotel",
//         "gite",
//         "apartment",
//         "villa",
//       ]),
//       equipments: JSON.stringify(
//         faker.helpers.arrayElements(
//           ["wifi", "pool", "parking", "kitchen", "ac"],
//           { min: 1, max: 3 }
//         )
//       ),
//     }))
//   );

//   await seed.doctors((x) =>
//     x(2, () => ({
//       name: faker.person.fullName(),
//       id_holidays_offers: faker.number.int({ min: 0, max: 2 }),
//     }))
//   );

//   await seed.offers_availability((x) =>
//     x(2, () => ({
//       date: faker.date.future({ years: 1 }),
//       max_people: faker.number.int({ min: 1, max: 10 }),
//       available: faker.datatype.boolean(),
//     }))
//   );

//   await seed.offers_bookings((x) =>
//     x(10, () => ({
//       people: faker.number.int({ min: 1, max: 4 }),
//       status: faker.helpers.arrayElement(["pending", "confirmed", "cancelled"]),
//     }))
//   );

//   process.exit();
// };

// main();
