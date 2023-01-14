const dbService = require('./services/db.service')
const authService = require('./api/auth/auth.service')

async function seedDB() {
  try {
    console.log('creating toys')
    let collection = await dbService.getCollection('toy')
    await collection.drop()
    await collection.insertMany([{
      name: "Talking Doll",
      price: 123,
      labels: ["Doll", "Battery Powered", "Baby"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Doll',
    },
    {
      name: "Kinetic Sand",
      price: 25,
      labels: ["Sensory toy", "Kids"],
      createdAt: 1631031801811,
      inStock: false,
      type: 'Baby',
    },
    {
      name: "Spring Toy",
      price: 15,
      labels: ["Metal", "Party", "Kids"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Doll',
    },
    {
      name: "Marvel Spidey",
      price: 100,
      labels: ["Kids", "Battery Powered"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Motor-skills',
    },
    {
      name: "Toss Ball",
      price: 43,
      labels: ["Ball", "Kids", "Beach Toys"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Motor-skills',
    },
    {
      name: "Toy Story",
      price: 13,
      labels: ["Puzzle", "Kids"],
      createdAt: 1634331801011,
      type: 'Motor-skills',
      inStock: false,
    },
    {
      name: "Hot Wheels",
      price: 123,
      labels: ["Doll", "Battery Powered", "Baby"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Doll',
    },
    {
      name: "Nerf N-Strike",
      price: 25,
      labels: ["Sensory toy", "Kids"],
      createdAt: 1631031801811,
      inStock: false,
      type: 'Baby',
    },
    {
      name: "Fisher-Price",
      price: 15,
      labels: ["Metal", "Party", "Kids"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Doll',
    },
    {
      name: "Monopoly",
      price: 100,
      labels: ["Kids", "Battery Powered"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Motor-skills',
    },
    {
      name: "Play-Doh",
      price: 43,
      labels: ["Ball", "Kids", "Beach Toys"],
      createdAt: 1631031801011,
      inStock: true,
      type: 'Motor-skills',
    },
    {
      name: "Melissa",
      price: 13,
      labels: ["Puzzle", "Kids"],
      createdAt: 1634331801011,
      type: 'Motor-skills',
      inStock: false,
    },
    ])

    console.log('creating users')
    collection = await dbService.getCollection('user')
    await collection.drop()

    await authService.signup('baraki', 'baraki', 'barak i ')
    await authService.signup('yanivi', 'yanivi', 'yaniv i ')
    await authService.signup('kfiri', 'kfiri', 'kfir i ')

    console.log('done seeding')
  } catch (err) {
    console.log('unexpected error', err.stack);
  }
}

(async () => {
  const txt = await seedDB()
  process.exit()
})();
