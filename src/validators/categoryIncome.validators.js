// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createCategoryIncomeValidator = [
    check("name", "Error con el campo name")
        .exists()
        .withMessage("name es obligatorio")
        .notEmpty()
        .withMessage("name no debe estar vacio")
        .isString()
        .withMessage("El tipo de dato debe ser string")
        .isLength({ min: 1, max: 40 })
        .withMessage("El name debe tener minimo 1 caracteres y máximo 40"),
    check("description", "Error con el campo description")
        .exists()
        .withMessage("description es obligatorio")
        .notEmpty()
        .withMessage("description no puede estar vacio")
        .isString()
        .withMessage("description debe ser un string"),
    validateResult,
];

const updateCategoryIncomeValidator = [
    check("name", "Error con el campo name")
        .exists()
        .withMessage("name es obligatorio")
        .notEmpty()
        .withMessage("name no debe estar vacio")
        .isString()
        .withMessage("El tipo de dato debe ser string")
        .isLength({ min: 1, max: 40 })
        .withMessage("El name debe tener minimo 6 caracteres y máximo 40"),
    check("description", "Error con el campo description")
        .exists()
        .withMessage("description es obligatorio")
        .notEmpty()
        .withMessage("description no puede estar vacio")
        .isString()
        .withMessage("description debe ser un string"),
    validateResult,
];


// object.hasOwnProperty('propertyName')
module.exports = { createCategoryIncomeValidator, updateCategoryIncomeValidator };