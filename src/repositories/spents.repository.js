const { spent } = require('../models');

const createSpent = async (dataAplication) => {
    const spentDate = await spent.create(dataAplication);
    return spentDate;
}

const updateSpent = async (dataAplication, id) => {
    const spentDate = await spent.update(dataAplication,
        {
            where: { id }
        })
    return spentDate
}


const deleteSpent = async (id) => {
    const spentDate = await spent.destroy({
        where: { id }
    })
    return spentDate
}

const getSpentSum = async (userId) => {
    const totalSpent = await spent.sum('amount', { where: { user_id: userId } });
    return totalSpent;
};

const getAllySpent = async (userId) => {
    const spentDate = await spent.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: { user_id: userId }
    })
    return spentDate
}

const getOneSpent = async (name, userId) => {
    const spentDate = await spent.findOne({
        attributes: { exclude: ["updatedAt"] },
        where: { name },
        where: { user_id: userId }
    });
    return spentDate;
}

module.exports = {
    createSpent,
    updateSpent,
    deleteSpent,
    getSpentSum,
    getAllySpent,
    getOneSpent
}