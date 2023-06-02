const DoorTypeService = require("../../services/details/DoorTypeService");


module.exports = class DoorType {
    static async create(req, res, next) {
        try {
            const {name, price, dobor_price, jamb_price} = req.body;

            const dobor = await DoorTypeService.create({name, price, dobor_price, jamb_price})

            res.status(200).json(dobor)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const dobor = await DoorTypeService.getAll()

            res.status(200).json(dobor)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const dobor = req.body;
            const response = await DoorTypeService.update(dobor)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await DoorTypeService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}