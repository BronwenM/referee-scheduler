import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css'

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
      </Router>
    </>
  )
}

export default App
