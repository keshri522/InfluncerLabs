// this is contorllers file whhere i can wrtie all the function of that endpoints
const User = require("../Modal/User"); // this is User modal
const getUsers = async (req, res) => {
  try {
    let allUsers = await User.find({}).sort({ createdAt: -1 });
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
// this function will delete the user based on the id and then return all  the  remaing users
const deleteRecordById = async (req, res) => {
  const { id } = req.body; // Assuming you're passing the ID as a URL parameter

  try {
    const deletedRecord = await User.findByIdAndDelete(id); // Find and delete record by ID
    if (!deletedRecord) {
      return res.status(404).send({ message: "Record not found" });
    }
    res.status(200).send(true);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
// this function will fitst check the id user sending in body if matched then update if not matched in db then create
const eidtRecordsById = async () => {
  const { id } = req.body; // destructure the id
  const { Sname, Tname, marks, Sub } = req.body.data;
  try {
    let find = await User.findOneAndUpdate(
      { id: id }, // if id  is present then simply update this  using this fields
      {
        Name: Sname,
        TeacherName: Tname,
        Marks: marks,
        Subject: Sub,
      }
    );
    // note
    if (find) {
      // send the all user included the update urser to frontend
      let res = await User.find({}); // find all the users
      if (res) {
        res.status(200).send(res);
      } else {
        res.status(404).send("user not found");
      }
    }
    // if there are not users the we have create the users into the databse
    else {
      postRecords(); // this will save the  new records in the db
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getUsers, postRecords, deleteRecordById, eidtRecordsById };
