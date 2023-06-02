const { Dobor } = require("../../models/details/Dobor")


module.exports = class DepthService {
    static async create(data) {
        try {
            const dobor = await new Dobor(data).save()
            return dobor;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const dobors = await Dobor.find()
            return dobors;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Dobor.findByIdAndUpdate(data._id, {...data})
            const response = await Dobor.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const dobor = await Dobor.findByIdAndDelete(_id)
            return dobor;
        } catch (error) {
            console.log(error);
        }
    }
}