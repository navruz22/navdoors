const { DoorType } = require("../../models/details/DoorType")


module.exports = class DoorTypeService {
    static async create(data) {
        try {
            const doortype = await new DoorType(data).save()
            return doortype;
        } catch (error) {
            console.log(error);
        }
    }
  
    static async getAll() {
        try {
            const doortypes = await DoorType.find()
            return doortypes;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(data) {
        try {
            await DoorType.findByIdAndUpdate(data._id, {...data})
            const response = await DoorType.findById(data._id)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(_id) {
        try {
            const doortype = await DoorType.findByIdAndDelete(_id)
            return doortype;
        } catch (error) {
            console.log(error);
        }
    }
}