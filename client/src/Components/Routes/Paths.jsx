import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboards from "../Dashboard/Dashboard";
import Home from "../HomePage/Home";
import Edit from "../Actions/Edit";
const Paths = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboards></Dashboards>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/addNew" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default Paths;
