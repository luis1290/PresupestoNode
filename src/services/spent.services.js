const { createSpent, updateSpent, deleteSpent, getSpentSum, getAllySpent, getOneSpent } = require("../repositories/spents.repository");

class incomeServices {

    static async addSpentServices(dataSpent) {
        try {
            const spent = await createSpent(dataSpent);
            return spent;
        } catch (error) {
            throw error
        }
    }

    static async updateSpentServices(dataSpent, id) {
        try {
            return await updateSpent(dataSpent, id)
        } catch (error) {
            throw error
        }
    }

    static async deleteSpentServices(id) {
        try {
            return await deleteSpent(id)
        } catch (error) {
            throw error
        }
    }

    static async getAllSpentServices(userId) {
        try {
            return await getAllySpent(userId);
        } catch (error) {
            throw error
        }
    }

    static async getOneSpentService(name, userId) {
        try {
            const spent = await getOneSpent(name, userId);
            return spent;
        } catch (e) {
            throw e
        }
    }

    static async getTotalSpentService(userId) {
        try {
            const spent = await getSpentSum(userId);
            return spent;
        } catch (e) {
            throw e
        }
    }
}

module.exports = incomeServices