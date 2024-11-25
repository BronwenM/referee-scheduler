import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Hero from "./components/Hero/Hero";

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
        <Hero />
        <NavBar />
        <main className="app__content">
          <h1>{message}</h1>
          <Dashboard />
        </main>
      </Router>
    </>
  );
}

export default App;
