const JambService = require("../../services/details/JambService");


module.exports = class Jamb {
    static async create(req, res, next) {
        try {
            const {name} = req.body;

            const jamb = await JambService.create({name})

            res.status(200).json(jamb)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const jamb = await JambService.getAll()

            res.status(200).json(jamb)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const jamb = req.body;
            const response = await JambService.update(jamb)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await JambService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}