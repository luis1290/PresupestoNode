// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createIncomeValidator = [
    check("user_id", "Error con el campo user_id")
        .exists()
        .withMessage("user_id es obligatorio")
        .notEmpty()
        .withMessage("user_id no debe estar vacio")
        .isIn()
        .withMessage("El campo user_id tiene que ser entero"),
    check("category_id", "Error con el campo category_id")
        .exists()
        .withMessage("category_id es obligatorio")
        .notEmpty()
        .withMessage("category_id no debe estar vacio")
        .isIn()
        .withMessage("El campo category_id tiene que ser entero"),
    check("amount", "Error con el campo amount")
        .exists()
        .withMessage("amount es obligatorio")
        .notEmpty()
        .withMessage("amount no debe estar vacio")
        .isFloat()
        .withMessage("El campo amount tiene que ser un número decimal"),
    validateResult,
];

const updateIncomeValidator = [
    check("user_id", "Error con el campo user_id")
        .exists()
        .withMessage("user_id es obligatorio")
        .notEmpty()
        .withMessage("user_id no debe estar vacio")
        .isIn()
        .withMessage("El campo user_id tiene que ser entero"),
    check("category_id", "Error con el campo category_id")
        .exists()
        .withMessage("category_id es obligatorio")
        .notEmpty()
        .withMessage("category_id no debe estar vacio")
        .isIn()
        .withMessage("El campo category_id tiene que ser entero"),
    check("amount", "Error con el campo amount")
        .exists()
        .withMessage("amount es obligatorio")
        .notEmpty()
        .withMessage("amount no debe estar vacio")
        .isFloat()
        .withMessage("El campo amount tiene que ser un número decimal"),
    validateResult,
];


// object.hasOwnProperty('propertyName')
module.exports = { createIncomeValidator, updateIncomeValidator };