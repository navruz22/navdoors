const { FramogType } = require("../../models/details/FramogType");


module.exports = class FramogTypeService {
    static async create(data) {
        try {
            const framogtype = await new FramogType(data).save()
            return framogtype;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll() {
        try {
            const framogtypes = await FramogType.find()
            return framogtypes;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await FramogType.findByIdAndUpdate(data._id, {...data})
            const response = await FramogType.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const framogtype = await FramogType.findByIdAndDelete(_id)
            return framogtype;
        } catch (error) {
            console.log(error);
        }
    }
}