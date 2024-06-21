const spentServices = require("../services/spent.services");

const createSpentController = async (req, res, next) => {
    try {
        const dataSpent = req.body
        await spentServices.addSpentServices(dataSpent);
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const updateSpentController = async (req, res, next) => {
    try {
        const { id } = req.params
        const dataSpent = req.body
        await spentServices.updateSpentServices(dataSpent, id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const deleteSpentController = async (req, res, next) => {
    try {
        const { id } = req.params
        await spentServices.deleteSpentServices(id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const getAllSpentController = async (req, res, next) => {
    try {
        const dataSpent = await spentServices.getAllSpentServices()
        res.json(dataSpent);
    } catch (error) {
        next(error)
    }
};


const getAllOneSpentController = async (req, res, next) => {
    try {
        const nameSpent = req.body
        const dataSpent = await spentServices.getOneSpentService(nameSpent.name)
        res.json(dataSpent);
    } catch (error) {
        next(error)
    }
};

const getSpentTotal = async (req, res) => {
    try {
        const totalSpent = await spentServices.getTotalSpentService();
        res.status(200).json({ totalSpent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSpentController,
    updateSpentController,
    deleteSpentController,
    getAllSpentController,
    getAllOneSpentController,
    getSpentTotal
}