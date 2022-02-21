const { body } = require("express-validator");

const userValidator = [
    body('first_name').notEmpty().withMessage("first name is required!"),
    body('last_name').notEmpty().withMessage("second name is required!"),
    body('email').notEmpty().withMessage("email is required!").isEmail().withMessage("Email should be proper email!")
];

module.exports = userValidator;