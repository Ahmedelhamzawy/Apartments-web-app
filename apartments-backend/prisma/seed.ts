import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Check if there is already any apartment in the database
  const apartmentCount = await prisma.apartment.count();

  if (apartmentCount > 0) {
    console.log('Database already has data, skipping seeding.');
    return;
  }
  const apartments = [
    {
      unit_name: "Palm Hills Residence",
      unit_number: "A101",
      project: "Palm Hills",
      city: "Cairo",
      price: 2500000,
      unit_description: "Modern apartment with garden view"
    },
    {
      unit_name: "Mountain View Apartment",
      unit_number: "B202",
      project: "Mountain View",
      city: "Alexandria",
      price: 3200000,
      unit_description: "Luxury apartment near the beach"
    },
    {
      unit_name: "New Cairo Heights",
      unit_number: "C303",
      project: "New Cairo",
      city: "New Cairo",
      price: 2800000,
      unit_description: "Spacious apartment with private balcony"
    },
  ];

  await prisma.apartment.createMany({ data: apartments });
  console.log('Seed data inserted successfully');
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
