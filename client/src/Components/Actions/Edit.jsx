import React, { useState } from "react";
// import child components of forms which contains the forsm of taking input from the users
import Editforms from "../Forms/EditForms";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditUser from "../Functions/Edituser";
const EditData = () => {
  const navigate = useNavigate();
  // creating a state of the component
  const location = useLocation(); // this will find all the values of previous state
  const previousData = location.state.data; // this will give all the previous data that cabn be added i the input filds
  const userEditId = location.state.data._id; // this is the id of each user on edit buttons
  const [values, Setvalues] = useState({
    Sname: previousData.Name,
    Tname: previousData.TeacherName,
    marks: previousData.Marks,
    Sub: previousData.Subject,
  });

  const [show, Setshow] = useState(false);
  // create a function which will keep the track of chaingin the inputs fields
  const handlechange = (e) => {
    // prevennt the reloding
    const { name, value } = e.target;
    Setvalues({ ...values, [name]: value }); // set the value of each field based on changing the value
  };
  // this function will submit all the values and send to backend
  const handleSubmit = async (e) => {
    Setshow(true);
    e.preventDefault();

    try {
      // making api call to backend that will update changes and return back all the records
      const edit = await EditUser(userEditId, values);
      if (edit.status === 200) {
        setTimeout(() => {
          toast.success("Successfully updated");
          console.log(edit);
          Setshow(false);
          navigate("/dashboard");
        }, 500);
      }
    } catch (error) {
      toast.error(error);
      Setshow(false);
    }
  };
  // this function will reset the forms
  const handleReset = () => {
    Setvalues({
      Sname: "",
      Tname: "",
      marks: "",
      Sub: "",
    });
  };
  return (
    <>
      <div className="container-fluid bg-secondary p-4  text-center">
        <h2 className="text-dark">Edit User Records</h2>
      </div>
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col-md-12">
            <Editforms
              handlechange={handlechange}
              values={values}
              Setvalues={Setvalues}
              show={show}
              Setshow={Setshow}
              handleReset={handleReset}
              handleSubmit={handleSubmit}
            ></Editforms>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditData;
