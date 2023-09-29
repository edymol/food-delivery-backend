const { model } = require("mongoose");
const { createRestaurant,
    checkEmailPassword
 } = require( "../services/restaurant.services");
const Restaurant = require("../models/restaurant.model");


// This function will create a restaurant in the database 
const signupRestaurant = async (req, res) => {
    try {
        // This function is brought from services/restaurant.services.js and will create a restaurant in the database using the body of the request.
        const response = await createRestaurant(req.body);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error });
    }
};

const logingRestaurant = async (req, res) => {
    try {
        const restaurant = {
            email: req.body.email,
            password: req.body.password,
        };
        response = await checkEmailPassword(restaurant);
        console.log(response);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error.message });
    }
};

module.exports = {
    signupRestaurant,
    logingRestaurant,
    
};