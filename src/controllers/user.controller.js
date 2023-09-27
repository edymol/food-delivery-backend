const {
    createUser,
    returnAllUsers,
    checkEmailPassword,
    userByEmail,
} = require("../services/user.services");

const signupUser = async (req, res) => {
    try {
        const response = await createUser(req.body);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const response = await returnAllUsers();
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password,
        };
        response = await checkEmailPassword(user);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error });
    }
};

// this function will get a user by email. Imported from services/user.services.js
const getUserByEmail = async (req, res) => {
    try {
        const email = req.email;
        const response = await userByEmail(email);

        return res.json({ message: response });
        
    } catch (error) {
        return res.json({ Error: error });
    }
};

module.exports = {
    signupUser,
    getAllUsers,
    loginUser,
    getUserByEmail,
};
