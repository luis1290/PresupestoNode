const { categoryIncome } = require('../models');

const createCategoryIncome = async (dataAplication) => {
    const incomeCategory = await categoryIncome.create(dataAplication);
    return incomeCategory;
}

const updateCategoryIncome = async (dataAplication, id) => {
    const incomeCategory = await categoryIncome.update(dataAplication,
        {
            where: { id }
        })
    return incomeCategory
}

const deleteCategoryIncome = async (id) => {
    const incomeCategory = await categoryIncome.destroy({
        where: { id }
    })
    return incomeCategory
}

const getAllCategoryIncome = async () => {
    const incomeCategory = await categoryIncome.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    return incomeCategory
}

const getOneCategoryIncome = async (name) => {
    const incomeCategory = await categoryIncome.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { name }
    });
    return incomeCategory;
}



module.exports = {
    createCategoryIncome,
    updateCategoryIncome,
    deleteCategoryIncome,
    getAllCategoryIncome,
    getOneCategoryIncome
}