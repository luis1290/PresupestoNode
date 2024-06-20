const categorySpentServices = require("../services/categorySpents.services");

const createCategorySpentController = async (req, res, next) => {
    try {
        const dataCategorySpent = req.body
        await categorySpentServices.addCategorySpentServices(dataCategorySpent);
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const updateCategorySpentController = async (req, res, next) => {
    try {
        const { id } = req.params
        const dataCategorySpent = req.body
        await categorySpentServices.updateCategorySpentServices(dataCategorySpent, id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const deleteCategorySpentController = async (req, res, next) => {
    try {
        const { id } = req.params
        await categorySpentServices.deleteCategorySpentServices(id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const getAllCategorySpentController = async (req, res, next) => {
    try {
        const dataCategorySpent = await categorySpentServices.getAllCategorySpentServices()
        res.json(dataCategorySpent);
    } catch (error) {
        next(error)
    }
};

const getAllOneCategorySpentController = async (req, res, next) => {
    try {
        const nameCategorySpent = req.body
        const dataCategorySpent = await categorySpentServices.getOneCategorySpent(nameCategorySpent.name)
        res.json(dataCategorySpent);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createCategorySpentController,
    updateCategorySpentController,
    deleteCategorySpentController,
    getAllCategorySpentController,
    getAllOneCategorySpentController
}