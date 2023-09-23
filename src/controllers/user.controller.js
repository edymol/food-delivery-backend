const { createUser } = require("../services/user.services");

const signupUser =  async(req, res) => {
    try {
        const response = await createUser(req.body);
        return res.json({ message: response });
    } catch (error) {
        return res.json({ Error: error });
    }
};


module.exports = {
    signupUser,
};