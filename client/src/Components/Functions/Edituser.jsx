import axios from "axios";
// this is the api  fucntion that will delete user based on the id send in body

const EditUser = async (id) => {
  try {
    // the data is the  data which is coming from the forms
    let res = await axios.post(`${process.env.REACT_APP_API}/edituser`, {
      id: id, // this is sending in body that will be receive in the backend
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default EditUser;
