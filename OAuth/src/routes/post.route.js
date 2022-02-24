const express = require("express");

const postController = require("../controllers/post.controller");

// validation
const postValidator = require( "../utils/postValidator" );
const validator = require("../middlewares/validator.middleware");
const authenticate = require("../middlewares/authenticatr.middleware");

const router = express();

// view all blogs
router.get("/", postController.getAllPosts);

// view specific blog
router.get("/:id", postController.getPost);

router.post("/", authenticate, postController.createPost);
// only the user who is the author can update or delete
router.patch("/",
    ...postValidator,
    validator,
    authenticate,
    postController.createPost
);

router.delete("/", authenticate, postController.createPost);

// create an endpoint where you return a users information, 
// and an array of all blogs written by the user ( ids, and title )

module.exports = router;