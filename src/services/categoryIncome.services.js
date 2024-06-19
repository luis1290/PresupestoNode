const { createCategoryIncome, updateCategoryIncome, deleteCategoryIncome, getAllCategoryIncome, getOneCategoryIncome } = require("../repositories/categoryIncomes.repository");

class categoryIncomeServices {

    static async addCategoryIncomeServices(dataCategoryIncome) {
        try {
            const incomeCategory = await createCategoryIncome(dataCategoryIncome);
            return incomeCategory;
        } catch (error) {
            throw error
        }
    }
    static async updateCategoryIncomeServices(dataCategoryIncome, id) {
        try {
            return await updateCategoryIncome(dataCategoryIncome, id)
        } catch (error) {
            throw error
        }
    }

    static async deleteCategoryIncomeServices(id) {
        try {
            return await deleteCategoryIncome(id)
        } catch (error) {
            throw error
        }
    }

    static async getAllCategoryIncomeServices() {
        try {
            return await getAllCategoryIncome();
        } catch (error) {
            throw error
        }
    }

    static async getOneCategoryIncome(name) {
        try {
            const incomeCategory = await getOneCategoryIncome(name);
            return incomeCategory;
        } catch (e) {
            throw e
        }
    }
}


module.exports = categoryIncomeServices