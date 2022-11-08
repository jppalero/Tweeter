const dbConfig = require("../config/database.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//adding models to db object
db.tweet = require("./tweet_model.js")(sequelize, Sequelize);
db.comment = require("./comment_model.js")(sequelize, Sequelize);

//declaring realtionship between tables
db.tweet.hasMany(db.comment, { as: "comment" });
db.comment.belongsTo(db.tweet, {
  foreignKey: "tweetId",
  as: "tweet",
});

//console.log(db);

module.exports = db;