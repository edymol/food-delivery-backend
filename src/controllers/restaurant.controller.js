const { model } = require("mongoose");
const { createRestaurant,
    checkEmailPassword,
    returnAllRestaurants,
    returnARestaurant,
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

const loginRestaurant = async (req, res) => {
    try {
        const restaurant = {
            email: req.body.email,
            password: req.body.password,
        };
        response = await checkEmailPassword(restaurant);
        // console.log(response);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error.message });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const response = await returnAllRestaurants();
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error.message });
    }
};

const getARestaurant = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await returnARestaurant(id);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error.message });
    }
}


module.exports = {
    signupRestaurant,
    loginRestaurant,
    getAllRestaurants,
    getARestaurant,
    
};