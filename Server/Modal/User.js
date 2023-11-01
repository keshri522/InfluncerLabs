// this file  i will be creating the Schema of the collection
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      trim: true,
      required: true,
    },
    TeacherName: {
      type: String,
      trim: true,
      required: true,
    },
    Subject: {
      type: String,
      trim: true,
      required: true,
    },
    Marks: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { timestamps: true } // this will add the current data and time on which user is added to db
);

// creating collection with that UserShhema
const User = new mongoose.model("User", UserSchema);
module.exports = User;
