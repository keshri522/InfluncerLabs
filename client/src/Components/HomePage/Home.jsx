import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  // this function will navigate the User to home page
  const hanldeNaviggate = () => {
    navigate("/dashboard"); // navigating to dashboard
  };
  return (
    <>
      <div className="box">
        <div className="col-md-12 text-center">
          <h2 className="text-white">Welcome to School Management System</h2>
          <br />
          <button
            onClick={hanldeNaviggate}
            className="btn btn-outline-warning p-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
