const { body } = require("express-validator");

module.exports = [
    body('title').not().isEmpty().withMessage('Title is required!').isString().withMessage("Title needs to be valid string"),
    body('body').not().isEmpty().withMessage('Body is required!').isString().withMessage("Title needs to be valid string")
];