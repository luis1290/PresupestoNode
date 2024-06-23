const { createIncome, updateIncome, deleteIncome, getIncomeSum, getAllyIncome, getOneIncome, getIncomeBalance } = require("../repositories/incomes.repository");

class incomeServices {

    static async addIncomeServices(dataIncome) {
        try {
            const income = await createIncome(dataIncome);
            return income;
        } catch (error) {
            throw error
        }
    }

    static async updateIncomeServices(dataIncome, id) {
        try {
            return await updateIncome(dataIncome, id)
        } catch (error) {
            throw error
        }
    }

    static async deleteIncomeServices(id) {
        try {
            return await deleteIncome(id)
        } catch (error) {
            throw error
        }
    }

    static async getAllIncomeServices(userId) {
        try {
            return await getAllyIncome(userId);
        } catch (error) {
            throw error
        }
    }

    static async getOneIncomeService(name, userId) {
        try {
            const income = await getOneIncome(name, userId);
            return income;
        } catch (e) {
            throw e
        }
    }

    static async getTotalIncomeService(userId) {
        try {
            const income = await getIncomeSum(userId);
            return income;
        } catch (e) {
            throw e
        }
    }

    static async getBalanceIncomeService(userId) {
        try {
            const income = await getIncomeBalance(userId);
            return income;
        } catch (e) {
            throw e
        }
    }
}

module.exports = incomeServices