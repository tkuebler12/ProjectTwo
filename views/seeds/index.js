const sequelize = require('../config/connection');
const Poke = require('../models/Poke-Card');
const pokeData = require('./Poke-Card-Seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Poke-Card.bulkCreate(pokeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();