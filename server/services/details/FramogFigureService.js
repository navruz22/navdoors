const { FramogFigure } = require("../../models/details/FramogFigure")


module.exports = class FramogFigureService {
    static async create(data) {
        try {
            const framogfigure = await new FramogFigure(data).save()
            return framogfigure;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const framogfigures = await FramogFigure.find()
            return framogfigures;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await FramogFigure.findByIdAndUpdate(data._id, {...data})
            const response = await FramogFigure.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const framogfigure = await FramogFigure.findByIdAndDelete(_id)
            return framogfigure;
        } catch (error) {
            console.log(error);
        }
    }
}