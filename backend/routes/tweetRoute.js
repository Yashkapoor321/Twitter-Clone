const express = require("express");

const authMiddleware = require("../middleware/authMiddleware")
const tweetController = require("../controllers/tweetController");

const route = express.Router();

route.post("/create", authMiddleware, tweetController.createTweet);
route.delete("/delete/:id", authMiddleware, tweetController.deleteTweet)
route.put("/like/:id", authMiddleware, tweetController.likeOrDislike)
route.get("/alltweets/:id", authMiddleware, tweetController.getAllTweets)
route.get("/followingtweets/:id", authMiddleware, tweetController.getFollowingTweets)





module.exports = route