import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Hero from "./components/Hero/Hero";
import AvailabilityForm from "./components/AvailabilityForm/AvailabilityForm";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import AssignmentForm from "./components/AssignmentForm/AssignmentForm.jsx";
import GameForm from "./components/GameForm/GameForm.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import GamesView from "./components/GamesView/GamesView.jsx";
import ReportPage from "./components/ReportPage/ReportPage.jsx";
import AssignmentView from "./components/AssignmentView/AssignmentView.jsx";
import { useModal } from "./hooks/useModal.jsx";
import Modal from "./components/Modal/Modal.jsx";
import CalendarComponent from "./components/Calendar/CalendarComponent.jsx"
import ProfileEditPage from "./components/ProfileEditPage/ProfileEditPage.jsx";
import AccountForm from "./components/CreateAccountForm/AccountForm.jsx";
import GodsFavouriteIdiot from './assets/images/GodsFavouriteIdiot.png'


function App() {
  const { user, setUser, userLoggedIn } = useAuth();
  const {showModal} = useModal();

  return (
    <>
      {showModal && <Modal />}
      {userLoggedIn() && (
        <Hero
          userFN={user.name ? user.name : "User"}
          role={user.role}
        />
      )}
      <NavBar />
      <main className="app__content">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wanted-dead-or-alive" element={<> <h1>WANTED DEAD OR ALIVE FOR CRIMES AGAINST GITHUB</h1><img src={GodsFavouriteIdiot}/><h3>Reward of $0 and Krispy Kreme for information leading to his destruction and safe return of my sanity</h3> </>} />

          {/* Routes any authenticated user can access */}
          <Route element={<ProtectedRoute permittedRoles={["admin", "assigner", "official"]} />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileEditPage />} />
          </Route>

          {/* Routes only admins and assigners can acccess */}
          <Route element={<ProtectedRoute permittedRoles={["admin", "assigner"]} />} >
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/games" element={<GamesView />} />
            <Route path="/new-assignment" element={<AssignmentForm />}/>
            <Route path="/new-account" element={<AccountForm />} />
          </Route>

          {/* Admins Only */}
          <Route element={<ProtectedRoute permittedRoles={["admin"]} />} >
            <Route path="/new-game" element={<GameForm />}/>
          </Route>

          {/* Assigners Only */}
          <Route element={<ProtectedRoute permittedRoles={["assigner"]} />} >
          </Route>

          {/* Officials Only */}
          <Route element={<ProtectedRoute permittedRoles={["official"]} />} >
              <Route path="/availability" element={ <AvailabilityForm /> } />
              <Route path="/assignments" element={ <AssignmentView /> } />
              <Route path="/calendar" element={<CalendarComponent />} />
          </Route>
        </Routes>        
      </main>
      <Footer />
    </>
  );
}

export default App;
