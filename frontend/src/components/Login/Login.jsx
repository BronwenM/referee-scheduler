import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';
import axios from "axios";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  //BM: Removed useRef and replaced with autfocused attribute
  const [userIdentifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  //This clears the error message when the user types in the userIdentifier or password
  useEffect(() => {
    if (userIdentifier || password) {
      setError('');
    }
  }, [userIdentifier, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userIdentifier || !password) {
      setError('Email/Username and password are required');
      return;
    }

    try {
      const response = await axios.post('/api/sessions', { userIdentifier, password });
      // console.log('Login successful:', response.data);
      login(response.data);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email/username or password');
      toast.error('Invalid email/username or password');
    }

    setIdentifier('');
    setPassword('');
  };


  return (
    <section>
    <ToastContainer />
    <h1>Login to Your Account</h1>
    <form>
      <label htmlFor="userIdentifier">Username or Email</label>
        <input
          id="userIdentifier"
          type="text"
          value={userIdentifier}
          onChange={(e) => setIdentifier(e.target.value)}
          autoComplete="off"
          required
          autoFocus
        />
      <br />
      <label htmlFor="password">Password</label>
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