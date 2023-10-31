import axios from "axios";
// this is the api  fucntion that will post data in mongo db or add new user in the database

const CreateUser = async (data) => {
  try {
    // the data is the  data which is coming from the forms
    let res = await axios.post(`${process.env.REACT_APP_API}/createuser`, {
      data: data, // this is sending in body that will be receive in the backend
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default CreateUser;
