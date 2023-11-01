// creating the server using the express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const UserRoute = require("./Routes/auth");
// Database connection
const Connection = require("./DatabaseConnection/config");
Connection(); // this function will create connection between node and mongo db using monggose
// middlewares ................>>>>>>
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // parse the data coming from body
app.use(cors()); // send the data with two diffrent origin
app.use(morgan("tiny")); // this will give all the details of the req like status code endpoints and etc
app.use("/api", UserRoute); // added this UserRoute to the middle that can access globally

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
