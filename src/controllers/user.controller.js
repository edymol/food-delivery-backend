const {
    createUser,
    returnAllUsers,
    checkEmailPassword,
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

module.exports = {
    signupUser,
    getAllUsers,
    loginUser,
};
