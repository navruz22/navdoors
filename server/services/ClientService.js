const { Client } = require("../models/Client")

module.exports = class ClientService {
    static async create(data) {
        try {
            const client = await new Client(data).save()
            return client;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const clients = await Client.find()
            return clients;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Client.findByIdAndUpdate(data._id, {...data})
            const response = await Client.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const depth = await Client.findByIdAndDelete(_id)
            return depth;
        } catch (error) {
            console.log(error);
        }
    }
}