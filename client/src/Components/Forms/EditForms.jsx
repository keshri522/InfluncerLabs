import React from "react";

const Editforms = ({
  // taking pros from parent componet which is newHotels  compo
  handleSubmit,
  handlechange,
  values,
  Setvalues,
  show,
  Setshow,
  handleReset,
}) => {
  const { Sname, Tname, Sub, marks } = values; // Destructuring values for easier access

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Sname"
        value={Sname}
        onChange={handlechange}
        placeholder="Enter Student Name"
        className="form-control mt-3 p-3"
        required
      />
      <input
        type="text"
        name="Tname"
        value={Tname}
        onChange={handlechange}
        placeholder="Enter Teacher Name"
        className="form-control mt-3 p-3"
        required
      />

      <input
        type="text"
        name="Sub"
        value={Sub}
        onChange={handlechange}
        placeholder="Enter Subjects Name"
        className="form-control mt-3 p-3"
        required
      />
      <input
        type="number"
        name="marks"
        value={marks}
        onChange={handlechange}
        placeholder="Enter Marks"
        className="form-control mt-3 p-3"
        required
      />
      {show ? (
        <button className="btn btn-outline-primary mt-3 p-3 w-100">
          Posting...
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-outline-primary mt-3 p-3 w-100 "
          disabled={
            Tname.length === 0 ||
            Sname.length === 0 ||
            Sub.length === 0 ||
            marks.length === 0
          }
        >
          Post
        </button>
      )}
      {/* this button will reset the all fields */}
      <button
        onClick={handleReset}
        className="btn btn-outline-danger mt-3 p-3 w-100"
      >
        Reset
      </button>
    </form>
  );
};

export default Editforms;
