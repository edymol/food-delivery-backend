const express = require('express');
const { signupUser } = require('../controllers/user.controller');

const userRouter = express.Router();

// creating the create user API

userRouter.post("/users", signupUser);

module.exports = userRouter;