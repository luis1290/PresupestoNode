const { Router } = require("express");
const { createCategorySpentController, updateCategorySpentController, deleteCategorySpentController, getAllCategorySpentController, getAllOneCategorySpentController } = require('../controllers/categorySpent.controllers');

const {
    createCategoryIncomeValidator, updateCategoryIncomeValidator
} = require("../validators/categoryIncome.validators");

const router = Router();

router.post("/addcategoryspent", createCategoryIncomeValidator, createCategorySpentController);
router.put("/editcategoryspent/:id", updateCategoryIncomeValidator, updateCategorySpentController);
router.delete("/delitecategoryspent/:id", deleteCategorySpentController);
router.get("/getallcategoryspent/", getAllCategorySpentController);
router.get("/getonecategoryspent/", getAllOneCategorySpentController);

module.exports = router;