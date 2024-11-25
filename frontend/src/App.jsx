import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  const handleClick = () => {
    console.log('Button clicked');
  };
  
  const dlClick = () => {
    console.log('DBL Button clicked');
  };

  return (
    <>
      <Router>
        <NavBar />
        <h1>{message}</h1>
        <div>
          <Button 
            handle={handleClick} 
            name="Click Me" 
            className="primary" 
            eventType="onClick" 
          />
        </div>
        <div>
          <Button 
            handle={dlClick} 
            name="Submit" 
            className="primary2" 
            eventType="onDoubleClick" 
          />
        </div>
      </Router>
    </>
  );
}

export default App;