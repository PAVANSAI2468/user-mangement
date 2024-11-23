import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ users }) => {
  return (
    <div>
      <h1>user management</h1>
      <Link to="./adduser">
        <button type="button">Add User</button>
      </Link>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
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
              <td>{each.firstname}</td>
              <td>{each.lastname}</td>
              <td>{each.email}</td>
              <td>{each.phone}</td>
              <td>
                <Link to="./edituser">
                  <button type="button">Edit</button>
                </Link>
              </td>
              <td>
                <Link to="./deleteuser">
                  <button type="button">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
