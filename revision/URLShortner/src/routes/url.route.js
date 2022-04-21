const express = require("express");
const router = express.Router();

const urlController = require("../controllers/url.controller");

// generate new URL
router.post("/generateURL", urlController.createShortURL);

// redirect url
router.get("/visit/:url", urlController.visitShortenURL);

module.exports = router;