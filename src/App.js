import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Deleteuser from "./components/Deleteuser";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const fetchedData = response.data;
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home users={data} setData={setData} />} />
          <Route
            path="/adduser"
            element={<Adduser users={data} setData={setData} />}
          />
          <Route
            path="/edituser/:id"
            element={<Adduser users={data} setData={setData} />}
          />
          <Route
            path="/deleteuser/:id"
            element={<Deleteuser users={data} setData={setData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
