
const { generateSalt, hashPassword, passwordDecoder } = require('../utils/passwordHelper');
const User = require('../models/user.model');

// This function will create a user in the database.
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

// This function will return all users from the database.
const returnAllUsers = async () => {
    const result = await User.find();

    return result;
};

// Before checking password, email must be checked first to see if it exists in the database.
const checkEmailPassword = async (user) => {
    const checkUserEmail = await User.findOne({ email: user.email });
    if (checkUserEmail) {
        // This function is brought from utils/passwordHelper.js and will check the password from the user input and the password from the database.
        const checkPassword = passwordDecoder(user.password, checkUserEmail.password);
        if (checkPassword) {
            return 'Login successful';
        } else {
            return 'Password incorrect';
        }
    } else {
        return 'Email not found';
    }
};

module.exports = {
    createUser,
    returnAllUsers,
    checkEmailPassword,
};