const express = require('express');
const dbConnection = require('./src/config/db.config');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message : "Test passed" });
});

app.listen(3000, async() => {
  console.log('Server is running on port 3000');
  await dbConnection();
});

