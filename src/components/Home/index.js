import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import the CSS file

const Home = ({ users }) => {
  return (
    <div className="home-container">
      <h1>User Management</h1>
      <Link to="./adduser" className="add-user-btn">
        Add User
      </Link>
      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((each) => (
              <tr key={each.id}>
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.phone}</td>
                <td>
                  <Link to={`./edituser/${each.id}`}>
                    <button type="button">Edit</button>
                  </Link>
                </td>
                <td>
                  <Link to={`./deleteuser/${each.id}`}>
                    <button type="button">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
