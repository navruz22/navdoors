const {User} = require('../models/User')


module.exports = class UserService {
    static async createUser (data) {
        try {
            const user = await new User(data).save()
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllUser() {
        try {
            const users = await User.find()
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    static async getUserById(userId) {
        try {
            const user = await User.findById(userId)
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    static async getUserByParams(params) {
        try {
            const user = await User.findOne(params)
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateUser(userId, data) {
        try {
            const user = await User.findByIdAndUpdate(userId, {...data})
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}