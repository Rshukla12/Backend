const express = require("express");

const postController = require("../controllers/post.controller");

// validation
const postValidator = require( "../utils/postValidator" );
const validator = require("../middlewares/validator.middleware");
const authenticate = require("../middlewares/authenticate.middleware");

const router = express();

// view all blogs
router.get("/", postController.getAllPosts);

// view specific blog
router.get("/:id", postController.getPost);

router.post("/", 
    ...postValidator,
    validator,
    authenticate, 
    postController.createPost
);

// only the user who is the author can update or delete
router.patch("/:id", 
    ...postValidator,
    validator,
    authenticate, 
    postController.updatePost 
);

router.delete("/:id", authenticate, postController.deletePost);

module.exports = router;