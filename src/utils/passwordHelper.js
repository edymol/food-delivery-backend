const bcrypt = require('bcrypt');

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

module.exports = {
    generateSalt,
    hashPassword,
};