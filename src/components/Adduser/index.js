import React from "react";
import { useState } from "react";

const Adduser = () => {
  const [inputData, setInputData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  const handleInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          id="firstname"
          name="FirstName"
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          id="lastname"
          name="LastName"
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="Email" onChange={handleInputData} />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="Phone" onChange={handleInputData} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;
