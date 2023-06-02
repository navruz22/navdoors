const { Layer } = require("../../models/details/Layer")


module.exports = class DepthService {
    static async create(data) {
        try {
            const layer = await new Layer(data).save()
            return layer;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const layers = await Layer.find()
            return layers;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Layer.findByIdAndUpdate(data._id, {...data})
            const response = await Layer.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const layer = await Layer.findByIdAndDelete(_id)
            return layer;
        } catch (error) {
            console.log(error);
        }
    }
}