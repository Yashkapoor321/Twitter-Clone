const express = require("express");

const authMiddleware = require("../middleware/authMiddleware")
const userController = require("../controllers/userController.js");


const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login)
router.get("/logout", userController.logout)

router.put("/bookmark/:id", authMiddleware, userController.bookmark);
router.get("/profile/:id", authMiddleware, userController.getMyProfile )
router.get("/otheruser/:id", authMiddleware, userController. getOtherUsers)
router.post("/follow/:id", authMiddleware, userController.follow)
router.post("/unfollow/:id", authMiddleware, userController.unfollow)



module.exports = router;


