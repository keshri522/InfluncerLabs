import React, { useState } from "react";
// import child components of forms which contains the forsm of taking input from the users
import InputForms from "../Forms/UserInputforms";
const Edit = () => {
  // creating a state of the component
  const [values, Setvalues] = useState({
    Sname: "",
    Tname: "",
    marks: "",
    Sub: "",
  });
  const [show, Setshow] = useState(false);
  // create a function which will keep the track of chaingin the inputs fields
  const handlechange = (e) => {
    // prevennt the reloding

    const { name, value } = e.target;
    Setvalues({ ...values, [name]: value }); // set the value of each field based on changing the value
  };
  // this function will submit or post the new data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    Setshow(true);
    setTimeout(() => {
      Setshow(false);
    }, 1000);
    // console.log(values); // just for debugging
    // after making a api request to backend to post the data to db
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
        <h2 className="text-dark">Post new Records</h2>
      </div>
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col-md-12">
            <InputForms
              handleSubmit={handleSubmit}
              handlechange={handlechange}
              values={values}
              Setvalues={Setvalues}
              show={show}
              Setshow={Setshow}
              handleReset={handleReset}
            ></InputForms>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
