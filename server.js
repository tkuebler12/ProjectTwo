const path = require('path');
const express = require('express');
const helpers = require('./utils/helpers');



// import sequelize connection
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./routes/api/cardAPI')(app);
require('./routes/api/userRoutes');
require('./routes/api/homeRoutes');



// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(
	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	})
);
