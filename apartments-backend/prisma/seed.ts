import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Check if there is already any apartment in the database
  const apartmentCount = await prisma.apartment.count();

  if (apartmentCount > 0) {
    console.log('Database already has data, skipping seeding.');
    return;
  }

  // Generate 50 apartments for testing pagination
  const projects = [
    'Palm Hills', 'Mountain View', 'New Cairo Heights', 'Madinaty', 'Rehab City',
    'Fifth Settlement', 'Sheikh Zayed', 'October Plaza', 'Compound Gardens', 'City Edge'
  ];

  const cities = [
    'Cairo', 'Alexandria', 'New Cairo', 'Giza', 'Maadi', 
    'Heliopolis', 'Zamalek', 'Dokki', 'Mohandessin', 'Nasr City'
  ];

  const unitTypes = [
    'Studio', 'One Bedroom', 'Two Bedroom', 'Three Bedroom', 'Penthouse', 'Duplex'
  ];

  const descriptions = [
    'Modern apartment with garden view and premium finishes',
    'Luxury apartment near the beach with stunning sea views',
    'Spacious apartment with private balcony and city skyline',
    'Contemporary design with high-end appliances and fixtures',
    'Elegant apartment featuring marble floors and panoramic windows',
    'Cozy living space with modern amenities and parking',
    'Bright and airy apartment with excellent natural lighting',
    'Premium location with easy access to shopping and dining',
    'Fully furnished apartment ready for immediate occupancy',
    'Investment opportunity in prime residential area'
  ];

  const apartments = [];

  for (let i = 1; i <= 30; i++) {
    const project = projects[Math.floor(Math.random() * projects.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const unitType = unitTypes[Math.floor(Math.random() * unitTypes.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    // Generate varied prices between 1.5M and 5M
    const price = 1500000 + Math.floor(Math.random() * 3500000);

    apartments.push({
      unit_name: `${project} ${unitType}`,
      unit_number: `${String.fromCharCode(65 + Math.floor(i / 10))}${String(i).padStart(3, '0')}`,
      project: project,
      city: city,
      price: price,
      unit_description: description
    });
  }

  await prisma.apartment.createMany({ data: apartments });
  console.log(`Successfully seeded ${apartments.length} apartments`);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });