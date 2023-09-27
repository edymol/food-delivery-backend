const { tokenDecoder } = require("../utils/tokenHelper");

// Middleware to check if the user is logged in. This function takes 3 parameters req, res and next. Next is used to call the next middleware function.
const authToken = async (req, res, next) => {
    try {
        const token = (req.get('Authorization'));

        if (token) {
        const decodedDetails = tokenDecoder(token);
        // this will add the email to the req object
        req.email = decodedDetails.email;
        next();
        } 
        else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        return res.json({ message: "Invalid token" });
    }


    
    // next();
};

module.exports = authToken;