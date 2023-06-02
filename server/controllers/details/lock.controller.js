const LockService = require("../../services/details/LockService");


module.exports = class Lock {
    static async create(req, res, next) {
        try {
            const {name, price} = req.body;

            const lock = await LockService.create({name, price})

            res.status(200).json(lock)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const locks = await LockService.getAll()

            res.status(200).json(locks)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const lock = req.body;
            const response = await LockService.update(lock)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await LockService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}