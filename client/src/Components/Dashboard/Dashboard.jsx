import React from "react";
import { useNavigate } from "react-router-dom";
// this dashboard show all the details like name id student name teacer name in a table
const Dashboards = () => {
  const navigate = useNavigate();
  // this function will redirects user to input form where they can enter the fields that can  be added into database
  const handleAdd = () => {
    // navigating to taking input fields
    navigate("/addNew");
  };

  return (
    <>
      <div className="container-fluid  bg-dark p-3 text-center">
        <h2 className="text-white ">Students Data</h2>
      </div>

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
                <tr>
                  <th scope="row">1</th>

                  <td>Rahul</td>
                  <td>Prince</td>
                  <td>Maths</td>
                  <td>760</td>
                  <td className="d-flex justify-content-around ">
                    <button className="btn btn-danger btn-sm  m-1 m-md-0  ">
                      Delete
                    </button>{" "}
                    <button className="btn btn-primary btn-sm m-1 m-md-0  ">
                      Edit
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Rahul</td>
                  <td>Prince</td>
                  <td>Maths</td>
                  <td>760</td>
                  <td className="d-flex justify-content-around">
                    <button className="btn btn-danger btn-sm   m-1 m-md-0  d-sm-block">
                      Delete
                    </button>{" "}
                    <button className="btn btn-primary btn-sm   m-1 m-md-0 d-sm-block">
                      Edit
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Rahul</td>
                  <td>Prince</td>
                  <td>Maths</td>
                  <td>760</td>
                  <td className="d-flex justify-content-around">
                    <button className="btn btn-danger btn-sm   m-1 m-md-0 d-sm-block">
                      Delete
                    </button>{" "}
                    <button className="btn btn-primary btn-sm  m-1 m-md-0 d-sm-block">
                      Edit
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboards;
