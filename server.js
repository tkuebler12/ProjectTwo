const path = require('path');
const express = require('express');
const helpers = require('./utils/helpers');
const session = require('express-session');


// import sequelize connection
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
	secret: 'Super secret secret',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
};

app.use(session (sess));
app.use(require('./routes'));




// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(
	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	})
);
