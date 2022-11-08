// This is the model for our tweet table
module.exports = (sequelize, Sequelize) => {
    const Tweet = sequelize.define("tweet", {
      user: {
        type: Sequelize.STRING
      },
      tweet: {
        type: Sequelize.TEXT
      }
    });
  
    return Tweet;
  };