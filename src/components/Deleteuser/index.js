import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

const Deleteuser = ({ users, setData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    const filterData = users.filter((user) => user.id !== parseInt(id));
    alert("contact deleted successfully");
    setData(filterData);
    navigate("/");
  };

  return (
    <div>
      <h1>Are you sure want to delete the contact?</h1>
      <button type="button" onClick={handleDelete}>
        Yes Delete
      </button>
      <button type="button" onClick={() => navigate("/")}>
        Cancel
      </button>
    </div>
  );
};

export default Deleteuser;
