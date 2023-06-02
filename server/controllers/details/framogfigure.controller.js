const FramogFigureService = require("../../services/details/FramogFigureService");


module.exports = class FramogFigure {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const framogfigure = await FramogFigureService.create({name, price})

            res.status(200).json(framogfigure)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const framogfigure = await FramogFigureService.getAll()

            res.status(200).json(framogfigure)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const framogfigure = req.body;
            const response = await FramogFigureService.update(framogfigure)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await FramogFigureService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}