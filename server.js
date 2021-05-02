const express = require('express');
const { sequelize } = require('./models/PokeCard');

// import sequelize connection
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/api/cardAPI')(app);
require('./routes/api/gameRoute')(app);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
