import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';
import axios from "axios";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  //BM: Removed useRef and replaced with autfocused attribute
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  //This clears the error message when the user types in the username or password
  useEffect(() => {
    if (email || password) {
      setError('');
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      const response = await axios.post('/api/sessions', { email, password });
      console.log('Login successful:', response.data);
      toast.success('Login successful');
      console.log(response.data);
      login(response.data);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
      toast.error('Invalid email or password');
    }

    setEmail('');
    setPassword('');
  };


  return (
    <section>
    <ToastContainer />
    <h1>Login</h1>
    <form>
    <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
          autoFocus
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