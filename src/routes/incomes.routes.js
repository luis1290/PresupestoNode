const { Router } = require("express");
const { createIncomeController, updateIncomeController, deleteIncomeController, getAllImcomeController, getAllOneImcomeController, getIncomeTotal } = require('../controllers/incomes.controllers');

const {
    createIncomeValidator, updateIncomeValidator
} = require("../validators/income.validators");

const router = Router();

router.post("/addincome", createIncomeValidator, createIncomeController);
router.put("/editincome/:id", updateIncomeValidator, updateIncomeController);
router.delete("/deliteincome/:id", deleteIncomeController);
router.get("/getallincome/", getAllImcomeController);
router.get("/getoneincome/", getAllOneImcomeController);

module.exports = router;