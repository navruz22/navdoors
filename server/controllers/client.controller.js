const ClientService = require("../services/ClientService");


module.exports = class Client {
    static async create(req, res, next) {
        try {
            const {fullname, phone} = req.body;

            const client = await ClientService.create({fullname, phone})

            res.status(200).json(client)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async getAll(req, res, next) {
        try {
            const clients = await ClientService.getAll()

            res.status(200).json(clients)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async update(req, res, next) {
        try {
            const client = req.body;
            const response = await ClientService.update(client)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const response = await ClientService.delete(id)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}