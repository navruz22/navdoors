const { Order } = require("../models/Order")

module.exports = class OrderService {
    static async create(data) {
        try {
            const door = await new Order(data).save()
            return door;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const doors = await Order.find()
            return doors;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Order.findByIdAndUpdate(data._id, {...data})
            const response = await Order.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }
  
    static async delete(_id) {
        try {
            const door = await Order.findByIdAndDelete(_id)
            return door;
        } catch (error) {
            console.log(error);
        }
    }
}