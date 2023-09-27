//  function I provided is a custom function that clears the Node.js module cache for a specific module before requiring it again. 
const clearModuleCache = () => {
    for (const key in require.cache) {
        if (key.includes('path-to-module-to-clear')) {
            delete require.cache[key];
        }
    }
};

// Call the function to clear the cache before requiring the module
clearModuleCache();
const { generateToken } = require('../utils/tokenHelper');


const User = require('../models/user.model');
const { 
    generateSalt, 
    hashPassword, 
    passwordDecoder 
} = require('../utils/passwordHelper');


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
    // Creating a token same time with the user creation
    const token = generateToken(user.email);

    return {result, token};
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
            // generating and sending a token to the user
            const token = generateToken(user.email);
            // console.log(token);
            return {result: 'Login successful', token: token};
        } else {
            return 'Password incorrect';
        }
    } else {
        return 'Email not found';
    }
};

const userByEmail = async (email) => {
    const findByEmail = await User.findOne({ email: email });
    if (findByEmail) {
        return findByEmail;
    } else {
        return `User with email ${email} not found.`;
    }
};

module.exports = {
    createUser,
    returnAllUsers,
    checkEmailPassword,
    userByEmail,
};