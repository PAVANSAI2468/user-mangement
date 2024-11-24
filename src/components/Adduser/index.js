import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Adduser = ({ users, setData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(users);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        setInputData({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
        });
      }
    }
  }, [id, users]);

  const handleForm = (e) => {
    e.preventDefault();
    if (id) {
      setData(
        users.map((user) =>
          user.id === parseInt(id) ? { ...user, ...inputData } : user
        )
      );
    } else {
      setData([...users, { id: users.length + 1, ...inputData }]);
    }
    navigate("/");
  };

  const handleInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={inputData.name}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={inputData.email}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={inputData.phone}
          onChange={handleInputData}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;
