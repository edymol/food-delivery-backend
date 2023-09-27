const express = require('express');
const dbConnection = require('./src/config/db.config');
const userRouter = require('./src/routes/user.route');
require("dotenv").config();

const app = express();
app.use(express.json());;
app.use(userRouter);


app.listen(process.env.PORT, async() => {
  console.log('Server is running on port 3000');
  await dbConnection();
});

