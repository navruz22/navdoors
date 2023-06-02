const { Depth } = require("../../models/details/Depth")

module.exports = class DepthService {
    static async create(data) {
        try {
            const depth = await new Depth(data).save()
            return depth;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const depthes = await Depth.find()
            return depthes;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Depth.findByIdAndUpdate(data._id, {...data})
            const response = await Depth.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const depth = await Depth.findByIdAndDelete(_id)
            return depth;
        } catch (error) {
            console.log(error);
        }
    }
}