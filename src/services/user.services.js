
const User = require('../models/user.model');

const createUser = async (body) => {
    const user ={
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        address: body.address,
        phone: body.phone,
    };

    const result = await User.create(user);

    return result;
};

module.exports = {
    createUser,
};