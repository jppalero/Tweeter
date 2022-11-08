//server.js main entry point of our application
const express = require('express');
const bodyParser = require('body-parser'); //body-parser middleware
const path = require('path'); //working with our directories
const cors = require("cors");

const app = express(); //creating express app object

const port = process.env.PORT || 3000; //used for local development

//global middleware: called on every request and moved on to next
app.use(bodyParser.json()); //parsing appplication/json requests (can use json)
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);//parsing nested objects

//todo:
//var corsOptions = { origin: "http://localhost:8081" };
//app.use(cors(corsOptions));

//test DB by synchronizing with it
const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
// drop the table if it already exists (for now we are okay with keeping existing tweets)
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

//test route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Twitter App" });
});

require("./app/routes/routes")(app);

//set up server to listen specific port
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});