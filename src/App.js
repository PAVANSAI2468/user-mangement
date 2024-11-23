import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Deleteuser from "./components/Deleteuser";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.org/users");
        const getdata = await response.data;
        setData(getdata);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchusers();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home users={data} />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="edituser" element={<Edituser />} />
          <Route path="deleteuser" element={<Deleteuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
