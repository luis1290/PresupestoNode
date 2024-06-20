const { income } = require('../models');

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

const getIncomeSum = async () => {
    const totalIncome = await income.sum('amount'); 
    return totalIncome;
};

const getAllyIncome = async () => {
    const incomDate = await income.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    return incomDate
}

const getOneIncome = async (name) => {
    const incomDate = await income.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { name }
    });
    return incomDate;
}

module.exports = {
    createIncome,
    updateIncome,
    deleteIncome,
    getIncomeSum,
    getAllyIncome,
    getOneIncome
}