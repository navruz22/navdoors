const { Jamb } = require("../../models/details/Jamb")


module.exports = class JambService {
    static async create(data) {
        try {
            const layer = await new Jamb(data).save()
            return layer;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const layers = await Jamb.find()
            return layers;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await Jamb.findByIdAndUpdate(data._id, {...data})
            const response = await Jamb.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const layer = await Jamb.findByIdAndDelete(_id)
            return layer;
        } catch (error) {
            console.log(error);
        }
    }
}