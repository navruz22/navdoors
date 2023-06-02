const FramogTypeService = require("../../services/details/FramogTypeService");


module.exports = class FramogType {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const framogtype = await FramogTypeService.create({name, price})

            res.status(200).json(framogtype)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const framogtypes = await FramogTypeService.getAll()

            res.status(200).json(framogtypes)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const framogtype = req.body;
            const response = await FramogTypeService.update(framogtype)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await FramogTypeService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}