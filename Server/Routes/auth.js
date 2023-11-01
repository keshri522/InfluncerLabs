const express = require("express");
const router = express.Router(); // creating a global routes that can used for creating routes

// creating routes or endpoint where User can make request to Backend or Server
router.get("/userdetails"); // this is the get request endpoint
router.post("/createuser"); // this is post routes where user can post data

module.exports = router;
