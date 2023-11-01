const express = require("express");
const router = express.Router(); // creating a global routes that can used for creating routes
// this is controllers  which give functionlity to routes
const {
  getUsers,
  postRecords,
  deleteRecordById,
} = require("../Controllers/user");
// creating routes or endpoint where User can make request to Backend or Server
router.get("/userdetails", getUsers); // this is the get request endpoint
router.post("/createuser", postRecords); // this is post routes where user can post data
router.post("/deleteuser", deleteRecordById); // this will just delete the records and send the remaining users
module.exports = router;
