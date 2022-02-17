const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller.js");

const validatorMiddleware = require("../middlewares/validator.middleware");

const userValidators = require("../utils/userValidators");

router.post("/signup", ...userValidators, validatorMiddleware, authController.signup);
router.post("/signin", userValidators[1], userValidators[2],validatorMiddleware, authController.signin);

module.exports = router;