const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

// router.post("/createPost", upload.single("file"), postsController.createPost);
router.post("/createPost", upload.array("files", 2), postsController.createPost);


module.exports = router;
