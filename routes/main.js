const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");


//Main Routes - simplified for now
router.get("/", homeController.getIndex);

router.get("/thankyou", homeController.getThankYou);

router.get("/post", homeController.getPosts)


module.exports = router;
