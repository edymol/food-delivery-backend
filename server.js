const express = require('express');
const dbConnection = require('./src/config/db.config');
const userRouter = require('./src/routes/user.route');
const RestaurantRouter = require('./src/routes/restauran.route');
require("dotenv").config();

const app = express();
app.use(express.json());;
app.use(userRouter);
app.use(RestaurantRouter);


app.listen(process.env.PORT, async() => {
  console.log('Server is running on port 3000');
  await dbConnection();
});

