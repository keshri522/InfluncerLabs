import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getAllUsers from "../Functions/getUser";
import { toast } from "react-toastify";
// this dashboard show all the details like name id student name teacer name in a table
const Dashboards = () => {
  const [response, Setresponse] = useState([]);
  const navigate = useNavigate();

  const [show, setshow] = useState(false); // show a loading based on this
  // this function will redirects user to input form where they can enter the fields that can  be added into database
  const handleAdd = () => {
    // navigating to taking input fields
    navigate("/addNew");
  };
  //calling a api request to get all the records from the data base
  useEffect(() => {
    setshow(true);
    getAllUsers()
      .then((res) => {
        Setresponse(res.data);
        setshow(false);
        // console.log(res.data); // jsut for debugging
      })
      .catch((err) => {
        toast.error(err);
        setshow(false);
      });
  }, []);

  return (
    <>
      <div className="container-fluid  bg-dark p-3 text-center">
        <h2 className="text-white ">Students Data</h2>
      </div>
      {/* this will show a  loading effect untill our response comes */}
      {show ? (
        <div className="container box ">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white ">fetching data please wait...</h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container mt-5 p-3 d-flex justify-content-center">
            {" "}
            {/* for adding new data into data base */}
            <button onClick={handleAdd} className="btn btn-success">
              Add New
            </button>
          </div>

          <div className="container-fluid mt-2 p-2">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" className="col-md-1">
                        Id
                      </th>
                      <th scope="col" className="col-md-2">
                        Name
                      </th>
                      <th scope="col" className="col-md-2">
                        Teacher Name
                      </th>
                      <th scope="col" className="col-md-2">
                        Subject
                      </th>
                      <th scope="col" className="col-md-1">
                        Marks
                      </th>
                      <th scope="col" className="col-md-2 text-center ">
                        User Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* here i am using response to show all the fields based on the response of api */}
                    {response?.map((row, index) => (
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{row.Name}</td>
                        <td>{row.TeacherName}</td>
                        <td>{row.Subject}</td>
                        <td>{row.Marks}</td>
                        <td className="d-flex justify-content-around ">
                          <button className="btn btn-danger btn-sm  m-1 m-md-0  ">
                            Delete
                          </button>{" "}
                          <button className="btn btn-primary btn-sm m-1 m-md-0  ">
                            Edit
                          </button>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboards;
