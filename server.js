const express = require("express");

// import sequelize connection
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./routes/api/cardAPI')(app);
require('./routes/api/gameRoute')(app);
require('./routes/api/userRoutes');

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(
	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	})
);
