import React, { useState } from "react";
// import child components of forms which contains the forsm of taking input from the users
import Editforms from "../Forms/EditForms";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditData = () => {
  const navigate = useNavigate();
  // creating a state of the component
  const [values, Setvalues] = useState({
    Sname: "",
    Tname: "",
    marks: "",
    Sub: "",
  });
  const location = useLocation(); // this will find all the values of previous state
  const previousData = location.state.data; // this will give all the previous data that cabn be added i the input filds
  const [show, Setshow] = useState(false);
  // create a function which will keep the track of chaingin the inputs fields
  const handlechange = (e) => {
    // prevennt the reloding

    const { name, value } = e.target;
    Setvalues({ ...values, [name]: value }); // set the value of each field based on changing the value
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
            ></Editforms>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditData;
