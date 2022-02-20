const express = require("express");
const router = express.Router();

const tweetController = require("../controllers/tweet.controllers");

// group by tags, and average likes of posts with these tags,
//  and list of users who belong to this tag
router.get("/tags", tweetController.getByTags );


module.exports = router;