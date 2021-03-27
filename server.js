const express = require('express');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/cardAPI.js')(app);
require('./routes/gameAPI.js')(app);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
