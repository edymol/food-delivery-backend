
const { generateSalt, hashPassword } = require('../utils/passwordHelper');
const User = require('../models/user.model');

const createUser = async (body) => {
    const user ={
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        address: body.address,
        phone: body.phone,
    };

    // This function is brought from utils/passwordHelper.js
    const salt = generateSalt();
    // The user password will use the hashPassword function from utils/passwordHelper.js and take two parameters, one from the create user function and the other from the salt function.
    user.password = hashPassword(body.password, salt);

    const result = await User.create(user);

    return result;
};

const returnAllUsers = async () => {
    const result = await User.find();

    return result;
};

module.exports = {
    createUser,
    returnAllUsers,
};