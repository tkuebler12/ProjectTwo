const express = require('express');
const expbs = require('handlebars');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 8080;

// app.engine('handlebars', expbs({defaultLayour: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing
app.get('/', (req, res) => {
  res.render('homepage.handlebars')
});
app.get('/', (req, res) => {
  res.render('cards.handlebars')
});
app.get('/', (req, res) => {
  res.render('login.handlebars')
});


require('./routes/cardAPI.js')(app);
require('./routes/gameAPI.js')(app);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
