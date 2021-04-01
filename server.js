
//const path = require('path');
const express = require('express');
//const session = require('express-session');
//const exphbs = require('express-handlebars');
//const routes = require('./controllers');
//const helpers = require('./utils/helpers');

//const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 8080;

//Set up Handlebars.js
//const hbs = exphbs.create({ helpers });

/*const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};*/

//app.use(session(sess));

// Inform Express.js on which template engine to use

//app.engine('handlebars', expbs({defaultLayour: 'main'}));
//app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Poke-Routes
require('./routes/cardAPI.js')(app);
require('./routes/gameAPI.js')(app);

//handlebars-routing
app.get('/', (req, res) => {
  res.render('homepage')
});
app.get('/', (req, res) => {
  res.render('cards')
});
app.get('/', (req, res) => {
  res.render('login')
});




// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
