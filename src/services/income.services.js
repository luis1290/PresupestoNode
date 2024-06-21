const { createIncome, updateIncome, deleteIncome, getIncomeSum, getAllyIncome, getOneIncome } = require("../repositories/incomes.repository");

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

    static async getAllIncomeServices() {
        try {
            return await getAllyIncome();
        } catch (error) {
            throw error
        }
    }

    static async getOneIncomeService(name) {
        try {
            const income = await getOneIncome(name);
            return income;
        } catch (e) {
            throw e
        }
    }

    static async getTotalIncomeService() {
        try {
            const income = await getIncomeSum();
            return income;
        } catch (e) {
            throw e
        }
    }
}

module.exports = incomeServices