module.exports = app => {
    //tweet controller
    const tweet = require("../controllers/twitter_controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tweet
    router.post("/", tweet.create);
  
    // Retrieve all Tweets
    router.get("/", tweet.findAll);

    // Creating a new comment
    router.post("/comments", tweet.createComment);

    //Seeing all comments
    router.get("/comments/:tweetId", tweet.finAllComments);

    app.use('/api/twitter', router);
};
  