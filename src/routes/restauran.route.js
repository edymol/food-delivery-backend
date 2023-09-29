const express = require('express');
const { signupRestaurant,
logingRestaurant } = require('../controllers/restaurant.controller');

// creating the create user API
const RestaurantRouter = express.Router();

// API to create a restaurant using the signupRestaurant function from the restaurant.controller.js
RestaurantRouter.post("/restaurants", signupRestaurant);

// API to login a restaurant
RestaurantRouter.post("/restaurants/login", logingRestaurant);

module.exports = RestaurantRouter;