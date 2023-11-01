// creating the server using the express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// Database connection
const Connection = require("./DatabaseConnection/config");
Connection(); // this function will create connection between node and mongo db using monggose
// middlewares ................>>>>>>
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // parse the data coming from body
app.use(cors()); // send the data with two diffrent origin
app.use(morgan("tiny")); // this will give all the details of the req like status code endpoints and etc

// routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my  App");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
