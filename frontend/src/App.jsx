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
import GameForm from "./components/GameForm/GameForm.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import AccountForm from "./components/CreateAccountForm/AccountForm.jsx";
import GamesPage from "./components/GamesPage/GamesPage.jsx";
import ReportPage from "./components/ReportPage/ReportPage.jsx";
import ProfileEditPage from "./components/ProfileEditPage/ProfileEditPage.jsx";


function App() {
  const [message, setMessage] = useState("");
  const { user, setUser, userLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get("/api/authenticated_user", { withCredentials: true })
    //   .then((response) => {
    //     setUser(response.data.user);
    //   })
    //   .catch((e) => {
    //     console.log('Not authenticated: ', e.message);
    //   });

    //TODO: before demo remove this
    setUser(users[0]);
    console.log(user[0]);
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
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute permittedRoles={["official", "admin"]} />} >
            <Route path="/dashboard" element={<Dashboard />} />          
            <Route path="/availability" element={ <AvailabilityForm /> } />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
        <ReportPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
