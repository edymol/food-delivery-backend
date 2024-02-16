const express = require("express");
const {
    signupRestaurant,
    logingRestaurant,
    getAllRestaurants,
    getARestaurant
} = require("../controllers/restaurant.controller");

const authToken = require("../middleware/auth.token");

// creating the create user API
const RestaurantRouter = express.Router();

// API to create a restaurant using the signupRestaurant function from the restaurant.controller.js
RestaurantRouter.post("/restaurants", signupRestaurant);

// API to login a restaurant
RestaurantRouter.post("/restaurants/login", logingRestaurant);

RestaurantRouter.get("/restaurants", authToken, getAllRestaurants);

// API to get a restaurant by id. This API is protected by the authToken middleware
RestaurantRouter.get("/restaurants/:id", authToken, getARestaurant);

module.exports = RestaurantRouter;
