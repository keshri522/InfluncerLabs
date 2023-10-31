// App.js
import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Paths from "./Components/Routes/Paths";
function App() {
  return (
    <>
      <div className="App">
        <ToastContainer></ToastContainer>
        <Paths />
      </div>
    </>
  );
}

export default App;
