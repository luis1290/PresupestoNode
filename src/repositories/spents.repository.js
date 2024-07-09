const { spents } = require('../models');
const { Op } = require('sequelize');

const createSpent = async (dataAplication) => {
    const spentDate = await spents.create(dataAplication);
    return spentDate;
}

const updateSpent = async (dataAplication, id) => {
    const spentDate = await spents.update(dataAplication,
        {
            where: { id }
        })
    return spentDate
}


const deleteSpent = async (id) => {
    const spentDate = await spents.destroy({
        where: { id }
    })
    return spentDate
}

const getSpentSum = async (userId) => {
    const totalSpent = await spents.sum('amount', { where: { user_id: userId } });
    return totalSpent;
};

const getAllySpent = async (userId) => {
    const spentDate = await spents.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: { user_id: userId }
    })
    return spentDate
}

const getOneSpent = async (name, userId) => {
    const spentDate = await spents.findOne({
        attributes: { exclude: ["updatedAt"] },
        where: { name },
        where: { user_id: userId }
    });
    return spentDate;
}

const getSpentByDateRange = async (userId, dataSpent) => {
    const spentDate = await spents.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {
            user_id: userId,
            createdAt: {
                [Op.between]: [dataSpent.startDate, dataSpent.endDate]
            }
        }
    });
    return spentDate
};


const getSpentByDateRangeTotal = async (userId, dataSpent) => {
    const spentDate = await spents.sum('amount', {
        where: {
            user_id: userId,
            createdAt: {
                [Op.between]: [dataSpent.startDate, dataSpent.endDate]
            }
        }
    });
    return spentDate !== null ? spentDate : 0;
};

module.exports = {
    createSpent,
    updateSpent,
    deleteSpent,
    getSpentSum,
    getAllySpent,
    getOneSpent,
    getSpentByDateRange,
    getSpentByDateRangeTotal
}