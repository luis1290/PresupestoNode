const incomeServices = require("../services/income.services");

const createIncomeController = async (req, res, next) => {
    try {
        const dataIncome = req.body
        await incomeServices.addIncomeServices(dataIncome);
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const updateIncomeController = async (req, res, next) => {
    try {
        const { id } = req.params
        const dataIncome = req.body
        await incomeServices.updateIncomeServices(dataIncome, id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const deleteIncomeController = async (req, res, next) => {
    try {
        const { id } = req.params
        await incomeServices.deleteIncomeServices(id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const getAllImcomeController = async (req, res, next) => {
    try {
        const { userId } = req.params
        const dataIncome = await incomeServices.getAllIncomeServices(userId)
        res.json(dataIncome);
    } catch (error) {
        next(error)
    }
};


const getAllOneImcomeController = async (req, res, next) => {
    try {
        const { userId } = req.params
        const nameIncome = req.body
        const dataIncome = await incomeServices.getOneIncomeService(nameIncome.name, userId)
        res.json(dataIncome);
    } catch (error) {
        next(error)
    }
};

const getIncomeTotal = async (req, res) => {
    try {
        const { userId } = req.params
        const totalIncome = await incomeServices.getTotalIncomeService(userId);
        res.status(200).json({ totalIncome });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getIncomeBalanceController = async (req, res) => {
    try {
        const { userId } = req.params
        const balanceIncome = await incomeServices.getBalanceIncomeService(userId);
        res.status(200).json({ balanceIncome });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createIncomeController,
    updateIncomeController,
    deleteIncomeController,
    getAllImcomeController,
    getAllOneImcomeController,
    getIncomeTotal,
    getIncomeBalanceController
}