import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Hero from "./components/Hero/Hero";
import CalendarComponent from "./components/Calendar/CalendarComponent";
import AvailabilityForm from "./components/AvailabilityForm/AvailabilityForm";
import Login from "./components/Login/Login";
import { useUser } from "./context/userContext.jsx";
import users from "./mocks/users.js";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <Router>
        <Hero connectionTest={message}/>
        <NavBar />
        <main className="app__content">
          <h1></h1>
          <Dashboard />
          <Login />
          {/* <CalendarComponent /> */}
          {/* <AvailabilityForm /> */}
        </main>
      </Router>
    </>
  );
}

export default App;