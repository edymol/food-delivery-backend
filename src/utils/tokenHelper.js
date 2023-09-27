const jwt = require('jsonwebtoken');
require("dotenv").config();

// This function will generate a token for the user.

const generateToken = (email) => { //if you want to add more data to the token, you can add it here as a parameter and then add it to the object in the jwt.sign function. email, firstName, lastName, etc.
    const token = jwt.sign(
        { email }, // this is the payload add the same parameters, firstName, lastName, etc. here.
        process.env.JWT_SECRET, 
        { expiresIn: '3d' }
    );
    return token;
};

// This function will decode the token.
const tokenDecoder = (token) => {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    return tokenDecoded;
};
module.exports = {
    generateToken,
    tokenDecoder,
};