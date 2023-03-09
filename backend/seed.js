const dbService = require('./services/db.service')
const authService = require('./api/auth/auth.service')

async function seedDB() {
  try {

    console.log('creating toys')
    let collection = await dbService.getCollection('toy')
    await collection.drop()
    await collection.insertMany([
      {
        name: "Talking Doll",
        price: 123,
        labels: ["Doll", "Battery Powered", "Baby"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Kinetic Sand",
        price: 25,
        labels: ["Sensory toy", "Kids"],
        createdAt: 1631031801811,
        inStock: false,
      },
      {
        name: "Spring Toy",
        price: 15,
        labels: ["Metal", "Party", "Kids"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Marvel Spidey",
        price: 100,
        labels: ["Kids", "Battery Powered"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Toss Ball",
        price: 43,
        labels: ["Ball", "Kids", "Beach Toys"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Toy Story",
        price: 13,
        labels: ["Puzzle", "Kids"],
        createdAt: 1634331801011,
        inStock: false,
      },
      {
        name: "Hot Wheels",
        price: 123,
        labels: ["Doll", "Battery Powered", "Baby"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Nerf N-Strike",
        price: 25,
        labels: ["Sensory toy", "Kids"],
        createdAt: 1631031801811,
        inStock: false,
      },
      {
        name: "Fisher-Price",
        price: 15,
        labels: ["Metal", "Party", "Kids"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Monopoly",
        price: 100,
        labels: ["Kids", "Battery Powered"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Play-Doh",
        price: 43,
        labels: ["Ball", "Kids", "Beach Toys"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        name: "Melissa",
        price: 13,
        labels: ["Puzzle", "Kids"],
        createdAt: 1634331801011,
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


    console.log('creating reviews')
    let reviewCollection = await dbService.getCollection('review')
    await reviewCollection.drop()

    await reviewCollection.insertMany([
      {
        userId: "63c2ccbca12d195dfff2611d",
        toyId: "63c4516e919e7e4227e76f4b",
        txt: "loved it!!"
      },
    ])

  } catch (err) {
    console.log('unexpected error', err.stack);
  }

}



(async () => {
  const txt = await seedDB()
  process.exit()
})();
