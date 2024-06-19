const { Router } = require("express");
const { createCategoryIncomeController, updateCategoryIncomeController, deleteCategoryIncomeController, getAllCategoryImcomeController, getAllOneCategoryImcomeController } = require('../controllers/categoryIncomes.controllers');

const {
    createCategoryIncomeValidator, updateCategoryIncomeValidator
} = require("../validators/categoryIncome.validators");

const router = Router();

router.post("/addcategoryincome", createCategoryIncomeValidator, createCategoryIncomeController);
router.put("/editcategoryincome/:id", updateCategoryIncomeValidator, updateCategoryIncomeController);
router.delete("/delitecategoryincome/:id", deleteCategoryIncomeController);
router.get("/getallcategoryincome/", getAllCategoryImcomeController);
router.get("/getonecategoryincome/", getAllOneCategoryImcomeController);

module.exports = router;