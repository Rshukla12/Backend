const { body } = require("express-validator");

module.exports = [
    body('title').not().isEmpty().withMessage('Title is required!'),
    body('body').not().isEmpty().withMessage('Body is required!'),
];