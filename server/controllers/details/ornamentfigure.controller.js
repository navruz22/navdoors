const OrnamentFigureService = require("../../services/details/OrnamentFigureService");


module.exports = class OrnamentFigure {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const ornamentfigure = await OrnamentFigureService.create({name, price})

            res.status(200).json(ornamentfigure)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const ornamentfigures = await OrnamentFigureService.getAll()

            res.status(200).json(ornamentfigures)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const ornamentfigure = req.body;
            const response = await OrnamentFigureService.update(ornamentfigure)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await OrnamentFigureService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}