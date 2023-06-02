const { GlassCount } = require("../../models/details/GlassCount")


module.exports = class GlassCountService {
    static async create(data) {
        try {
            const glasscount = await new GlassCount(data).save()
            return glasscount;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const glasscounts = await GlassCount.find()
            return glasscounts;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await GlassCount.findByIdAndUpdate(data._id, {...data})
            const response = await GlassCount.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const glasscount = await GlassCount.findByIdAndDelete(_id)
            return glasscount;
        } catch (error) {
            console.log(error);
        }
    }
}