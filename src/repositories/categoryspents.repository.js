const { categoryspents } = require('../models');

const createCategorySpent = async (dataAplication) => {
    const spentCategory = await categoryspents.create(dataAplication);
    return spentCategory;
}

const updateCategorySpent = async (dataAplication, id) => {
    const spentCategory = await categoryspents.update(dataAplication,
        {
            where: { id }
        })
    return spentCategory
}

const deleteCategorySpent = async (id) => {
    const spentCategory = await categoryspents.destroy({
        where: { id }
    })
    return spentCategory
}

const getAllCategorySpent = async () => {
    const spentCategory = await categoryspents.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    return spentCategory
}

const getOneCategorySpent = async (name) => {
    const spentCategory = await categoryspents.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { name }
    });
    return spentCategory;
}



module.exports = {
    createCategorySpent,
    updateCategorySpent,
    deleteCategorySpent,
    getAllCategorySpent,
    getOneCategorySpent
}