const { Router } = require("express");
const { createSpentController, updateSpentController, deleteSpentController, getAllSpentController, getAllOneSpentController, getSpentTotal } = require('../controllers/spent.controller');

const {
    createSpentValidator, updateSpentValidator
} = require("../validators/spent.validators");
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post("/addspent", createSpentValidator, authenticate, createSpentController);
router.put("/editspent/:id", updateSpentValidator, authenticate, updateSpentController);
router.delete("/delitespent/:id", authenticate, deleteSpentController);
router.get("/getallspent/", getAllSpentController);
router.get("/getotalnespent/", getSpentTotal);
router.get("/geonespent/", getAllOneSpentController);

module.exports = router;


