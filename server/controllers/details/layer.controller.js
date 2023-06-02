const LayerService = require("../../services/details/LayerService");


module.exports = class Dobor {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const layer = await LayerService.create({name, price})

            res.status(200).json(layer)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const layers = await LayerService.getAll()

            res.status(200).json(layers)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const layer = req.body;
            const response = await LayerService.update(layer)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await LayerService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}