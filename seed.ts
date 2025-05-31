import { createSeedClient } from "@snaplet/seed";
import { faker } from "@faker-js/faker";

const main = async () => {
  const seed = await createSeedClient();

  console.log("Resetting selected application tables...");
  await seed.$resetDatabase();
  console.log("Selected application tables reset successfully!");

  await seed.users((create) =>
    create(3, {
      encrypted_password: () => "password",
      email: () => faker.internet.email(),
      email_confirmed_at: () => new Date(),
      banned_until: () => null,
      role: () => "authenticated",
      aud: () => "authenticated",
    })
  );
  console.log("Seeded 20 users.");

  await seed.cities((x) =>
    x(10, {
      name: faker.location.city(),
    })
  );
  console.log("Seeded 10 cities.");

  await seed.doctors((x) =>
    x(2, {
      name: faker.person.fullName(),
    })
  );
  console.log("Seeded 15 doctors.");

  await seed.holidays_offers((x) =>
    x(2, {
      name: faker.lorem.words(3),
      address: faker.location.streetAddress(),
      postal_code: faker.location.zipCode(),
      description: faker.lorem.paragraph(),
      max_people: faker.number.int({ min: 1, max: 10 }),
      rooms: faker.number.int({ min: 1, max: 5 }),
      host_type: faker.helpers.arrayElement([
        "hotel",
        "gite",
        "apartment",
        "villa",
      ]),
      equipments: JSON.stringify(
        faker.helpers.arrayElements(
          ["wifi", "pool", "parking", "kitchen", "ac"],
          { min: 1, max: 3 }
        )
      ),
    })
  );
  console.log("Seeded 20 holiday offers.");

  await seed.offers_availability((x) =>
    x(2, {
      date: faker.date.future({ years: 1 }),
      max_people: faker.number.int({ min: 1, max: 10 }),
      available: faker.datatype.boolean(),
    })
  );
  console.log("Seeded 50 offers availability.");

  await seed.offers_bookings((x) =>
    x(40, {
      people: faker.number.int({ min: 1, max: 4 }),
      status: faker.helpers.arrayElement(["pending", "confirmed", "cancelled"]),
    })
  );
  console.log("Seeded 40 offers bookings.");

  console.log("\nDatabase seeded successfully with all tables!");

  process.exit();
};

main();
