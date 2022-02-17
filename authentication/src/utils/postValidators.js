const { body } = require("express-validator");

module.exports = [
    body('title').notEmpty().withMessage("Title is required!"),
    body('body').notEmpty().withMessage("Body is required!"),
];