const { createCategorySpent, updateCategorySpent, deleteCategorySpent, getAllCategorySpent, getOneCategorySpent } = require("../repositories/categoryspents.repository");

class categoryIncomeServices {

    static async addCategorySpentServices(dataCategorySpent) {
        try {
            const spentCategory = await createCategorySpent(dataCategorySpent);
            return spentCategory;
        } catch (error) {
            throw error
        }
    }
    static async updateCategorySpentServices(dataCategorySpent, id) {
        try {
            return await updateCategorySpent(dataCategorySpent, id)
        } catch (error) {
            throw error
        }
    }

    static async deleteCategorySpentServices(id) {
        try {
            return await deleteCategorySpent(id)
        } catch (error) {
            throw error
        }
    }

    static async getAllCategorySpentServices() {
        try {
            return await getAllCategorySpent();
        } catch (error) {
            throw error
        }
    }

    static async getOneCategorySpent(name) {
        try {
            const spentCategory = await getOneCategorySpent(name);
            return spentCategory;
        } catch (e) {
            throw e
        }
    }
}


module.exports = categoryIncomeServices