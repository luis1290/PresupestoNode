const { Router } = require("express");
const { createIncomeController, updateIncomeController, deleteIncomeController, getAllImcomeController, getAllOneImcomeController, getIncomeTotal, getIncomeBalanceController, getIncomeByDateRangeController, getIncomeByDateRangeTotalController } = require('../controllers/incomes.controllers');

const {
    createIncomeValidator, updateIncomeValidator
} = require("../validators/income.validators");
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post("/addincome", createIncomeValidator, authenticate, createIncomeController);
router.put("/editincome/:id", updateIncomeValidator, authenticate, updateIncomeController);
router.delete("/deliteincome/:id", authenticate, deleteIncomeController);
router.get("/getallincome/:userId", getAllImcomeController);
router.get("/getotalneincome/:userId", getIncomeTotal);
router.get("/getbalanceincome/:userId", getIncomeBalanceController);
router.get("/geoneincome/:userId", getAllOneImcomeController);
router.post("/getincomdatarange/:userId", getIncomeByDateRangeController);
router.get("/getincomedatarangetotal/:userId", getIncomeByDateRangeTotalController);

module.exports = router;