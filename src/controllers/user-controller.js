const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try{
        const response = await userService.createUser({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            messge: 'Successfully created a new user',
            data: response,
            err: {},
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error,
        })
    }
}

const signIn = async (req, res) => {
    try{
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            success: true,
            messge: 'Successfully signed in',
            data: response,
            err: {},
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error,
        })
    }
}

module.exports = {
    create,
    signIn,
}