const { Lock } = require("../../models/details/Lock")


module.exports = class LockService {
    static async create(data) {
        try {
            const lock = await new Lock(data).save()
            return lock;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const locks = await Lock.find()
            return locks;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Lock.findByIdAndUpdate(data._id, {...data})
            const response = await Lock.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const lock = await Lock.findByIdAndDelete(_id)
            return lock;
        } catch (error) {
            console.log(error);
        }
    }
}