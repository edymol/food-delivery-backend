const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://root:MR3EBpTdnjgvq4rH@deliveries.a1v07wm.mongodb.net/";

const dbConnection = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log('DB connecion Online');
    } catch (error) {
        console.log("DB connection error");
        console.log("Error :" + error);
 
    }
}

module.exports = dbConnection;