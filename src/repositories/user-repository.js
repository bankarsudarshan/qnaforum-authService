const { User } = require('../models');
const { Op } = require('sequelize');

class UserRepository {
    
    async insertUser(data) {
        try{
            const user = await User.create(data);
            return user;
        } catch(error) {
            console.log('Something went wrong while creating new user');
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: { email: userEmail },
            });
    
            return user; // Returns the user or null if not found
        } catch (error) {
            console.log('Something went wrong while fetching user:', error.message);
            throw error;
        }
    }    

    async getById(userId) {
        try{
            const user = await User.findByPk(userId, {
                attributes: { exclude: ['password'] },
            });
            return user;
        } catch(error) {
            console.log('Something went wrong while creating new user');
            throw error;
        }
    }

    async deleteUser(userId) {
        try{
            const response = await User.destroy({
                where: {
                    [Op.eq]: userId,
                }
            });
            return response;
        } catch(error) {
            console.log('Something went wrong while deleting user');
            throw error;
        }
    }

}

module.exports = UserRepository;