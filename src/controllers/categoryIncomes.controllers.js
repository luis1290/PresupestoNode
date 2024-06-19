const categoryIncomeServices = require("../services/categoryIncome.services");

const createCategoryIncomeController = async (req, res, next) => {
    try {
        const dataCategoryIncome = req.body
        await categoryIncomeServices.addCategoryIncomeServices(dataCategoryIncome);
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const updateCategoryIncomeController = async (req, res, next) => {
    try {
        const { id } = req.params
        const dataCategoryIncome = req.body
        await categoryIncomeServices.updateCategoryIncomeServices(dataCategoryIncome, id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const deleteCategoryIncomeController = async (req, res, next) => {
    try {
        const { id } = req.params
        await categoryIncomeServices.deleteCategoryIncomeServices(id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const getAllCategoryImcomeController = async (req, res, next) => {
    try {
        const dataCategoryIncome = await categoryIncomeServices.getAllCategoryIncomeServices()
        res.json(dataCategoryIncome);
    } catch (error) {
        next(error)
    }
};

const getAllOneCategoryImcomeController = async (req, res, next) => {
    try {
        const nameCategoryIncome = req.body
        const dataCategoryIncome = await categoryIncomeServices.getOneCategoryIncome(nameCategoryIncome.name)
        res.json(dataCategoryIncome);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createCategoryIncomeController,
    updateCategoryIncomeController,
    deleteCategoryIncomeController,
    getAllCategoryImcomeController,
    getAllOneCategoryImcomeController
}