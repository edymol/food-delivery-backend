const { generateSalt, hashPassword } = require("../utils/passwordHelper");
const { generateToken } = require("../utils/tokenHelper");
const Restaurant = require("../models/restaurant.model");
const { passwordDecoder } = require("../utils/passwordHelper");

// This function will create a user in the database.
const createRestaurant = async (body) => {
    const restaurant = {
        name: body.name,
        ownerName: body.ownerName,
        email: body.email,
        address: body.address,
        phone: body.phone,
        ratings: body.ratings,
        servicesAvailable: false,
    };

    // This function is brought from utils/passwordHelper.js
    const salt = generateSalt();
    // The user password will use the hashPassword function from utils/passwordHelper.js and take two parameters, one from the create user function and the other from the salt function.
    restaurant.password = hashPassword(body.password, salt);

    const result = await Restaurant.create(restaurant);
    // Creating a token same time with the user creation
    const token = generateToken(restaurant.email, restaurant.name);

    return { result, token };
};

const checkEmailPassword = async (restaurant) => {
    const checkRestaurantEmail = await Restaurant.findOne({
        email: restaurant.email,
    });
    if (checkRestaurantEmail) {
        // This function is brought from utils/passwordHelper.js and will check the password from the user input and the password from the database.
        const checkPassword = passwordDecoder(
            restaurant.password,
            checkRestaurantEmail.password
        );
        if (checkPassword) {
            // generating and sending a token to the user
            const token = generateToken(restaurant.email, checkRestaurantEmail.name);
            // console.log(token);
            return { result: "Login successful", token: token };
        } else {
            return "Password incorrect";
        }
    } else {
        return "Email not found";
    }
};

const returnAllRestaurants = async () => {
    const restaurants = await Restaurant.findById();
    if (restaurants) {
        return restaurants;
    } else{
    return "No restaurants found";
    }
    
};

const returnARestaurant = async (id) => {
    const restaurant = await Restaurant.findById(id); // or findOne({ _id: id })
    if (restaurant) {
        return restaurant;
    } else {
        return "No restaurant found";
    }
};


module.exports = {
    createRestaurant,
    checkEmailPassword,
    returnAllRestaurants,
    returnARestaurant
};
