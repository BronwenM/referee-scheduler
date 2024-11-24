import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <NavBar />
      </Router>
    </>
  )
}

export default App
