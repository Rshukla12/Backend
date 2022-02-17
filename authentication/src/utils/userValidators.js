const { body } = require("express-validator");

module.exports = [
    body('name').notEmpty().withMessage("Name is required!"),
    body('email').notEmpty().withMessage("Email is required!").isEmail().withMessage("Email must be valid email!"),
    body('password').notEmpty().withMessage("Password is required!").isLength({min: 8}).withMessage("Password must be 8 or more characters long")
];