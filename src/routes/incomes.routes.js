const { Router } = require("express");
const { createIncomeController, updateIncomeController, deleteIncomeController, getAllImcomeController, getAllOneImcomeController, getIncomeTotal, getIncomeBalanceController, getIncomeByDateRangeController } = require('../controllers/incomes.controllers');

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
router.get("/getincomdatarange/:userId", getIncomeByDateRangeController);

module.exports = router;