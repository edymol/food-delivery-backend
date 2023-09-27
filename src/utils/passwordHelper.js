const bcrypt = require('bcrypt');
require("dotenv").config();

// This generateSalt function is to create the Salt for the password which is the first step in the hashing process.
const generateSalt =  () => {
    const salt = bcrypt.genSaltSync(10);
    return salt;
};

// This hashPassword function is to hash the password using the salt generated in the previous step and is the second step in the hashing process. These two steps will be used in the service file. 
const hashPassword = (plainPassword, salt) => {
    const hashedPasword =  bcrypt.hashSync(plainPassword, salt);
    return hashedPasword;
};

// This passwordDecoder function is to decode the password and is used in the service file.
const passwordDecoder = (plainPassword, hashedPassword) => {
    const result = bcrypt.compareSync(plainPassword, hashedPassword);
    return result; // This is a true or false value
};

module.exports = {
    generateSalt,
    hashPassword,
    passwordDecoder,
};