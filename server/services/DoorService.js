const { Door } = require("../models/Door")

module.exports = class DoorService {
    static async create(data) {
        try {
            const door = await new Door(data).save()
            return door;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const doors = await Door.find()
            return doors;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Door.findByIdAndUpdate(data._id, {...data})
            const response = await Door.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const door = await Door.findByIdAndDelete(_id)
            return door;
        } catch (error) {
            console.log(error);
        }
    }
}