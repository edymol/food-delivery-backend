const express = require('express');
const { signupUser, getAllUsers } = require('../controllers/user.controller');

const userRouter = express.Router();

// creating the create user API

userRouter.post("/users", signupUser);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;