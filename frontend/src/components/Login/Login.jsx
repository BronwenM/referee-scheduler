import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';
import axios from "axios";
import users from '../../mocks/users';


const Login = () => {
  //This userRef is used to set the focus on the username input field when the page loads
  const userRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //to set the focus on the username input field 
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //This clears the error message when the user types in the username or password
  useEffect(() => {
    if (username || password) {
      setError('');
    }
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    //This finds the user(from users.js mock data) in the users array and logs them in if the username and password match(This is strickly for the mock data) When we start posting to the backend, we will use the axios.post method to post the username and password to the backend and the backend will return the user if the username and password match
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      console.log('Login successful:', user);
      toast.success('Login successful');
    } else {
      setError('Invalid username or password');
      toast.error('Invalid username or password');
    }


    setUsername('');
    setPassword('');
  };


  return (
    <section>
    <ToastContainer />
    <h1>Login</h1>
    <form>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        ref={userRef}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete='off'
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <Button
        handle={handleSubmit}
        name="Login"
        className="primary" 
      />
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </section>
  );
};

export default Login;