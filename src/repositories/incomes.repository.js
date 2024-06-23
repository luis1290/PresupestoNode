const { income, spent } = require('../models');
const { Op } = require('sequelize');

const createIncome = async (dataAplication) => {
    const incomDate = await income.create(dataAplication);
    return incomDate;
}

const updateIncome = async (dataAplication, id) => {
    const incomDate = await income.update(dataAplication,
        {
            where: { id }
        })
    return incomDate
}


const deleteIncome = async (id) => {
    const incomDate = await income.destroy({
        where: { id }
    })
    return incomDate
}

const getIncomeSum = async (userId) => {
    const totalIncome = await income.sum('amount', { where: { user_id: userId } });
    return totalIncome;
};

const getIncomeBalance = async (userId) => {
    const totalIncome = await income.sum('amount', { where: { user_id: userId } });
    const totalSpent = await spent.sum('amount', { where: { user_id: userId } });
    const balanceIncome = totalIncome - totalSpent;
    return balanceIncome;
};

const getAllyIncome = async (userId) => {
    const incomDate = await income.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: { user_id: userId }
    })
    return incomDate
}

const getOneIncome = async (name, userId) => {
    const incomDate = await income.findOne({
        attributes: { exclude: ["updatedAt"] },
        where: { name },
        where: { user_id: userId }
    });
    return incomDate;
}

const getIncomeByDateRange = async (userId, dataIncome) => {
    return income.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {
            user_id: userId,
            createdAt: {
                [Op.between]: [dataIncome.startDate, dataIncome.endDate]
            }
        }
    });
};

module.exports = {
    createIncome,
    updateIncome,
    deleteIncome,
    getIncomeSum,
    getAllyIncome,
    getOneIncome,
    getIncomeBalance,
    getIncomeByDateRange
}