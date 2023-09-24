const express = require('express');
const { 
    signupUser, 
    getAllUsers, 
    loginUser 
} = require('../controllers/user.controller');

// creating the create user API
const userRouter = express.Router();

// API to create a user
userRouter.post("/users", signupUser);
// API to get all users
userRouter.get("/users", getAllUsers);
// API to login a user
userRouter.post("/login", loginUser);

module.exports = userRouter;