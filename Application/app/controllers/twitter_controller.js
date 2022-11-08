const db = require("../models");
const Twitter = db.tweet;
const Comment = db.comment;

// Create and Save a new Tweet
exports.create = (req, res) => {
  // Validate request
  if (!req.body.user || !req.body.tweet) {
      res.status(400).send({
      message: "Content can not be empty!"
      });
      return;
  }

  console.log(`Adding user ${req.body.user} tweet into db`);

  // Create a Tweet Object
  const tweet = {
      user: req.body.user,
      tweet: req.body.tweet,
  };

  // Save Tweet in the database
  Twitter.create(tweet)
  .then(data => {
      res.send(data).status(200);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while creating a Tweet."
      });
  });
};

// Retrieve all Tweets from the database.
exports.findAll = (req, res) => {

  console.log('Querying database to get all tweets');

  Twitter.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tweets."
      });
    });
};

// Create and Save a new Comment
exports.createComment = (req, res) => {
  // Validate request
  if (!req.body.user || !req.body.comment || !req.body.tweetId) {
      res.status(400).send({
      message: "Content for request is missing!"
      });
      return;
  }

  console.log(`Adding comment by ${req.body.user} into db`);

  // Create a Tweet Object
  const comment = {
      user: req.body.user,
      comment: req.body.comment,
      tweetId: req.body.tweetId
  };

  // Save Tweet in the database
  Comment.create(comment)
  .then(data => {
      res.send(data).status(200);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while creating a Tweet."
      });
  });
};

//Retrieve all comments for one tweet
exports.finAllComments = (req, res) => {
  // Validate request
  if (!req.params.tweetId) {
    res.status(400).send({
    message: "Missing Tweet ID to get comments"
    });
    return;
  };

  tweetId = req.params.tweetId;
  var condition = tweetId ? { tweetId: tweetId } : null; //setting up condition for query
  console.log(condition);
  console.log(`Querying database to get all comments for a tweet (tweetId = ${tweetId})`);

  Comment.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments from db."
      });
    });
};