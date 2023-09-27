const jwt = require('jsonwebtoken');

// This function will generate a token for the user.

const generateToken = (email) => { //if you want to add more data to the token, you can add it here as a parameter and then add it to the object in the jwt.sign function. email, firstName, lastName, etc.
    const token = jwt.sign(
        { email }, // this is the payload add the same parameters, firstName, lastName, etc. here.
        "yOuR sEcReT kEy", 
        { expiresIn: '3d' }
    );
    return token;
};

// This function will decode the token.
const tokenDecoder = (token) => {
    const tokenDecoded = jwt.verify(token, "yOuR sEcReT kEy");
    return tokenDecoded;
};
module.exports = {
    generateToken,
    tokenDecoder,
};