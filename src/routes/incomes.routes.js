const { Router } = require("express");
const { createIncomeController, updateIncomeController, deleteIncomeController, getAllImcomeController, getAllOneImcomeController, getIncomeTotal } = require('../controllers/incomes.controllers');

const {
    createIncomeValidator, updateIncomeValidator
} = require("../validators/income.validators");
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post("/addincome", createIncomeValidator, authenticate, createIncomeController);
router.put("/editincome/:id", updateIncomeValidator, authenticate, updateIncomeController);
router.delete("/deliteincome/:id", authenticate, deleteIncomeController);
router.get("/getallincome/", getAllImcomeController);
router.get("/getotalneincome/", getIncomeTotal);
router.get("/geoneincome/", getAllOneImcomeController);

module.exports = router;