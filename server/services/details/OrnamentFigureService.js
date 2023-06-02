const { OrnamentFigure } = require("../../models/details/OrnamentFigure")


module.exports = class OrnamentFigureService {
    static async create(data) {
        try {
            const ornamentfigure = await new OrnamentFigure(data).save()
            return ornamentfigure;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const ornamentfigures = await OrnamentFigure.find()
            return ornamentfigures;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await OrnamentFigure.findByIdAndUpdate(data._id, {...data})
            const response = await OrnamentFigure.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const ornamentfigure = await OrnamentFigure.findByIdAndDelete(_id)
            return ornamentfigure;
        } catch (error) {
            console.log(error);
        }
    }
}