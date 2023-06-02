const DepthService = require("../../services/details/DepthService");


module.exports = class Depth {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const depth = await DepthService.create({name, price})

            res.status(200).json(depth)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const depthes = await DepthService.getAll()

            res.status(200).json(depthes)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const depth = req.body;
            const response = await DepthService.update(depth)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await DepthService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}