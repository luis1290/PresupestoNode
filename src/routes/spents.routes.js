const { Router } = require("express");
const { createSpentController, updateSpentController, deleteSpentController, getAllSpentController, getAllOneSpentController, getSpentTotal, getSpentByDateRangeController, getSpentByDateRangeTotalController } = require('../controllers/spent.controller');

const {
    createSpentValidator, updateSpentValidator
} = require("../validators/spent.validators");
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post("/addspent", createSpentValidator, authenticate, createSpentController);
router.put("/editspent/:id", updateSpentValidator, authenticate, updateSpentController);
router.delete("/delitespent/:id", authenticate, deleteSpentController);
router.get("/getallspent/:userId", getAllSpentController);
router.get("/getotalnespent/:userId", getSpentTotal);
router.get("/geonespent/:userId", getAllOneSpentController);
router.get("/getspentdatarange/:userId", getSpentByDateRangeController);
router.get("/getspentdatarangetotal/:userId", getSpentByDateRangeTotalController);

module.exports = router;


