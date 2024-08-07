const { incomes, spents, categoryincomes } = require('../models');
const { Op } = require('sequelize');



const createIncome = async (dataAplication) => {
    const incomDate = await incomes.create(dataAplication);
    return incomDate;
}

const updateIncome = async (dataAplication, id) => {
    const incomDate = await incomes.update(dataAplication,
        {
            where: { id }
        })
    return incomDate
}


const deleteIncome = async (id) => {
    const incomDate = await incomes.destroy({
        where: { id }
    })
    return incomDate
}

const getIncomeSum = async (userId) => {
    const totalIncome = await incomes.sum('amount', { where: { user_id: userId } });
    return totalIncome;
};

const getIncomeBalance = async (userId) => {
    const totalIncome = await incomes.sum('amount', { where: { user_id: userId } });
    const totalSpent = await spents.sum('amount', { where: { user_id: userId } });
    const balanceIncome = totalIncome - totalSpent;
    return balanceIncome;
};

const getAllyIncome = async (userId) => {
    const incomDate = await incomes.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [
            {
                model: categoryincomes,
                attributes: { exclude: ["updatedAt"] },

            }
        ],
        where: { user_id: userId },
    })
    return incomDate
}

const getOneIncome = async (name, userId) => {
    const incomDate = await incomes.findOne({
        attributes: { exclude: ["updatedAt"] },
        where: { name },
        where: { user_id: userId }
    });
    return incomDate;
}

const getIncomeByDateRange = async (userId, dataIncome) => {
    const incomDate = await incomes.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {
            user_id: userId,
            createdAt: {
                [Op.between]: [dataIncome.startDate, dataIncome.endDate]
            }
        }
    });
    return incomDate
};

const getIncomeByDateRangeTotal = async (userId, dataSpent) => {
    const incomDate = await incomes.sum('amount', {
        where: {
            user_id: userId,
            createdAt: {
                [Op.between]: [dataSpent.startDate, dataSpent.endDate]
            }
        }
    });
    return incomDate !== null ? incomDate : 0;
};

module.exports = {
    createIncome,
    updateIncome,
    deleteIncome,
    getIncomeSum,
    getAllyIncome,
    getOneIncome,
    getIncomeBalance,
    getIncomeByDateRange,
    getIncomeByDateRangeTotal
}