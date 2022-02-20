const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

// top 10 users who have highest average number of likes, 
// and their average size of tags, average characters

router.get( "/popular", userController.getTopTenByLikes);

module.exports = router;