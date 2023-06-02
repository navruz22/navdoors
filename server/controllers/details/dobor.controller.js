const DoborService = require("../../services/details/DoborService");


module.exports = class Dobor {
    static async create(req, res, next) {
        try {
            const {name} = req.body;

            const dobor = await DoborService.create({name})

            res.status(200).json(dobor)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const dobor = await DoborService.getAll()

            res.status(200).json(dobor)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const dobor = req.body;
            const response = await DoborService.update(dobor)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await DoborService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}