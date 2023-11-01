import axios from "axios";
// this is the api  fucntion that will delete user based on the id send in body

const getAllUsers = async (id) => {
  try {
    // the data is the  data which is coming from the forms
    let res = await axios.get(`${process.env.REACT_APP_API}/userdetails`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
export default getAllUsers;
