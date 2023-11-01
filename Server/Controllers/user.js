// this is contorllers file whhere i can wrtie all the function of that endpoints
const User = require("../Modal/User"); // this is User modal
const getUsers = async (req, res) => {
  try {
    let allUsers = await User.find({});
    if (allUsers) {
      res.status(200).send(allUsers);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    // console.log(error); // just for debugging
    res.status(404).send(error);
  }
};

// this function allow user to post and Create new Records in the database
const postRecords = async (req, res) => {
  //   console.log(req.body.data);
  const { Sname, Tname, marks, Sub } = req.body.data; // destructure the data coming in body
  try {
    const adddetails = await new User({
      // saving or creating new records in db
      Name: Sname,
      TeacherName: Tname,
      Marks: marks,
      Subject: Sub,
    });
    await adddetails.save(); // saving to db
    // console.log(adddetails); // jsut for debugging
    res.status(200).send(adddetails);
  } catch (error) {
    // console.log(error); // jsut for debugging
    res.status(500).send(error);
  }
};
module.exports = { getUsers, postRecords };
