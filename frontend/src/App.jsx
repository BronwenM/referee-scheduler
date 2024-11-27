import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate as navigate, useNavigate } from "react-router-dom";
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
import AssignmentForm from "./components/AssignmentForm/AssignmentForm.jsx";


function App() {
  const [message, setMessage] = useState("");
  const { user, setUser, userLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/authenticated_user", { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((e) => {
        console.log('Not authenticated: ', e.message);
      });

    //TODO: before demo remove this
    setUser(users[0]);
  }, []);

  return (
    <>
      {userLoggedIn() && (
        <Hero
          connectionTest={message}
          userFN={user.name ? user.name : "User"}
        />
      )}
      <NavBar />
      <main className="app__content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/availability"
            element={
              <ProtectedRoute>
                <AvailabilityForm />
              </ProtectedRoute>
            }
          />
        </Routes>
        <AssignmentForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
