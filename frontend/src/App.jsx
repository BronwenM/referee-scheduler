import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate as navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Hero from "./components/Hero/Hero";
import AvailabilityForm from "./components/AvailabilityForm/AvailabilityForm";
import users from "./mocks/users.js";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { useAuth } from "./hooks/useAuth.jsx";

function App() {
  const [message, setMessage] = useState("");
  const { user, setUser } = useAuth();

  useEffect(() => {
    axios
      .get("/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((e) => {
        console.log(e.message);
      });

    setUser(users[0]);
  }, []);

  return (
    <>
      { user.name && <Hero connectionTest={message} userFN={user.name ? user.name : "User"} />}
      <NavBar />
      <main className="app__content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/availability" element={<ProtectedRoute> <AvailabilityForm /> </ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
