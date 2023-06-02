const GlassCountService = require("../../services/details/GlassCountService");


module.exports = class GlassCount {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const glasscount = await GlassCountService.create({name, price})

            res.status(200).json(glasscount)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const glasscounts = await GlassCountService.getAll()

            res.status(200).json(glasscounts)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const glasscount = req.body;
            const response = await GlassCountService.update(glasscount)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await GlassCountService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}