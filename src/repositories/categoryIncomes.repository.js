const { categoryincomes } = require('../models');

const createCategoryIncome = async (dataAplication) => {
    const incomeCategory = await categoryincomes.create(dataAplication);
    return incomeCategory;
}

const updateCategoryIncome = async (dataAplication, id) => {
    const incomeCategory = await categoryincomes.update(dataAplication,
        {
            where: { id }
        })
    return incomeCategory
}

const deleteCategoryIncome = async (id) => {
    const incomeCategory = await categoryincomes.destroy({
        where: { id }
    })
    return incomeCategory
}

const getAllCategoryIncome = async () => {
    const incomeCategory = await categoryincomes.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    return incomeCategory
}

const getOneCategoryIncome = async (name) => {
    const incomeCategory = await categoryincomes.findOne({
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