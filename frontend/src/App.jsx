import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import './App.scss'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    axios.get('/api/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <Router>
      <NavBar />
      <h1>{message}</h1>
        <Dashboard/>
      </Router>
    </>
  )
}

export default App
