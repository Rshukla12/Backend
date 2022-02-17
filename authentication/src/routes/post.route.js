const express = require("express");

const postRouter = require("../controllers/post.controller");

const authenticate = require("../middlewares/authenticate.middleware");
const validatorMiddleware = require("../middlewares/validator.middleware");

const postValidators = require("../utils/postValidators");


const router = express.Router();

router.get("/", authenticate, postRouter.getAllPost);
router.post("/", ...postValidators, validatorMiddleware, authenticate, postRouter.createPost);

module.exports = router;