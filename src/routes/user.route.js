const express = require('express');
const { 
    signupUser, 
    getAllUsers, 
    loginUser,
    getUserByEmail,
} = require('../controllers/user.controller');
const authToken = require('../middleware/auth.token');


// creating the create user API
const UserRouter = express.Router();

// API to create a user
UserRouter.post("/users", signupUser);
// API to get all users. This API is protected by the authToken middleware
UserRouter.get("/users", authToken, getAllUsers);
// API to login a user
UserRouter.post("/login", loginUser);
// API to get a user by email. This API is protected by the authToken middleware
UserRouter.get("/me/", authToken, getUserByEmail);

module.exports = UserRouter;