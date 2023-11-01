// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import getAllUsers from "../Functions/getUser";
// import DeleteUser from "../Functions/DeleteUser";
// import { toast } from "react-toastify";

// // this dashboard show all the details like name id student name teacer name in a table
// const Dashboards = () => {
//   const [response, Setresponse] = useState([]);
//   const navigate = useNavigate();
//   const [track, settrack] = useState(false); // this will make sure once user delete then our getUserdetails will run and shows all the user except deleted users
//   const [show, setshow] = useState(false); // show a loading based on this
//   // this function will redirects user to input form where they can enter the fields that can  be added into database
//   const handleAdd = () => {
//     // navigating to taking input fields
//     navigate("/addNew");
//   };
//   //calling a api request to get all the records from the data base
//   useEffect(() => {
//     setshow(true);
//     getAllUsers()
//       .then((res) => {
//         setTimeout(() => {
//           Setresponse(res.data);
//           setshow(false);
//           // console.log(res.data); // jsut for debugging
//         }, 500);
//       })
//       .catch((err) => {
//         toast.error(err);
//         setshow(false);
//       });
//   }, [track]); // when ever track changstates

//   // this function will delete the row based on the id
//   const Delterow = async (id) => {
//     settrack(true); // make sure once my getuserdetails also runs
//     try {
//       let delterow = await DeleteUser(id);
//       toast.success("Successfully deleted");
//       settrack(false);
//     } catch (error) {
//       toast.error(error);
//       settrack(false);
//     }
//   };
//   // this function will edit the  row make a request to server
//   const Editrow = (row) => {
//     // here i am redirecting users to edit page where user can eidt the rows
//     navigate("/editpage", { state: { data: row } }); // here  i am also sending the current user all data into edit page that we can fill the input with that data later on we can change or nake a api call
//   };
//   return (
//     <>
//       <div className="container-fluid  bg-dark p-3 text-center">
//         <h2 className="text-white ">Students Data</h2>
//       </div>
//       {/* this will show a  loading effect untill our response comes */}
//       {show ? (
//         <div className="container box ">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h1 className="text-white ">fetching data please wait...</h1>
//               <p className="text-muted">Server is Slow have patience..</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="container mt-5 p-3 d-flex justify-content-center">
//             {" "}
//             {/* for adding new data into data base */}
//             <button
//               onClick={handleAdd}
//               className="btn btn-outline-primary w-100 "
//             >
//               Add New
//             </button>
//           </div>

//           <div className="container-fluid mt-2 p-2">
//             <div className="row">
//               <div className="col-md-10 offset-md-1">
//                 <table class="table table-striped">
//                   <thead>
//                     <tr>
//                       <th scope="col" className="col-md-1">
//                         Id
//                       </th>
//                       <th scope="col" className="col-md-2">
//                         Name
//                       </th>
//                       <th scope="col" className="col-md-2">
//                         Teacher Name
//                       </th>
//                       <th scope="col" className="col-md-2">
//                         Subject
//                       </th>
//                       <th scope="col" className="col-md-1">
//                         Marks
//                       </th>
//                       <th scope="col" className="col-md-2 text-center ">
//                         User Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* here i am using response to show all the fields based on the response of api */}
//                     {response?.map((row, index) => (
//                       <tr key={index}>
//                         <th scope="row">{index + 1}</th>
//                         <td>{row.Name}</td>
//                         <td>{row.TeacherName}</td>
//                         <td>{row.Subject}</td>
//                         <td>{row.Marks}</td>
//                         <td className="d-flex justify-content-around ">
//                           <button
//                             onClick={() => {
//                               Delterow(row._id);
//                             }}
//                             className="btn btn-danger btn-sm  m-1 m-md-0  "
//                           >
//                             Delete
//                           </button>{" "}
//                           <button
//                             onClick={() => {
//                               Editrow(row);
//                             }}
//                             className="btn btn-primary btn-sm m-1 m-md-0  "
//                           >
//                             Edit
//                           </button>{" "}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Dashboards;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getAllUsers from "../Functions/getUser";
import DeleteUser from "../Functions/DeleteUser";
import { toast } from "react-toastify";

const Dashboards = () => {
  const [response, Setresponse] = useState([]);
  const navigate = useNavigate();
  const [track, settrack] = useState(false);
  const [show, setshow] = useState(false);

  const handleAdd = () => {
    navigate("/addNew");
  };

  useEffect(() => {
    setshow(true);
    getAllUsers()
      .then((res) => {
        setTimeout(() => {
          Setresponse(res.data);
          setshow(false);
        }, 500);
      })
      .catch((err) => {
        toast.error(err);
        setshow(false);
      });
  }, [track]);

  const Delterow = async (id) => {
    settrack(true);
    try {
      let delterow = await DeleteUser(id);
      settrack(false);
      toast.success("Successfully deleted");
    } catch (error) {
      toast.error(error);
      settrack(false);
    }
  };

  const Editrow = (row) => {
    navigate("/editpage", { state: { data: row } });
  };

  return (
    <>
      <div className="container-fluid bg-dark p-3 text-center">
        <h2 className="text-white">Students Data</h2>
      </div>
      {show ? (
        <div className="container box">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white">Fetching data, please wait...</h1>
              <p className="text-muted">
                Server is slow, please have patience...
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container mt-5 p-3 d-flex justify-content-center">
            <button
              onClick={handleAdd}
              className="btn btn-outline-primary w-100"
            >
              Add New
            </button>
          </div>

          <div className="container-fluid mt-2 p-2">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <table className="table table-striped">
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
                    {response?.map((row, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{row.Name}</td>
                        <td>{row.TeacherName}</td>
                        <td>{row.Subject}</td>
                        <td>{row.Marks}</td>
                        <td className="d-flex justify-content-around ">
                          <button
                            onClick={() => {
                              Delterow(row._id);
                            }}
                            className="btn btn-danger btn-sm  m-1 m-md-0  "
                          >
                            Delete
                          </button>{" "}
                          <button
                            onClick={() => {
                              Editrow(row);
                            }}
                            className="btn btn-primary btn-sm m-1 m-md-0  "
                          >
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
