const { categorySpent } = require('../models');

const createCategorySpent = async (dataAplication) => {
    const spentCategory = await categorySpent.create(dataAplication);
    return spentCategory;
}

const updateCategorySpent = async (dataAplication, id) => {
    const spentCategory = await categorySpent.update(dataAplication,
        {
            where: { id }
        })
    return spentCategory
}

const deleteCategorySpent = async (id) => {
    const spentCategory = await categorySpent.destroy({
        where: { id }
    })
    return spentCategory
}

const getAllCategorySpent = async () => {
    const spentCategory = await categorySpent.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    return spentCategory
}

const getOneCategorySpent = async (name) => {
    const spentCategory = await categorySpent.findOne({
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