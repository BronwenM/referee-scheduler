import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    user_association_id: 1, // This is hardcoded to 1 for now. once we do permissions we will change this
    name:'',
    username:'',
    email:'',
    password:'',
    password_confirmation:'',
    address:'',
    phone:'',
    payment_info:'',
    role_name:'admin'
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }
    console.log(formData);

    try {
      const response = await axios.post('/api/users', formData);
      console.log('Account created:', response.data);
      setSuccess('Account created successfully!');
      setError(null);

      // Reset the form
      setFormData({
        user_association_id: 1,
        name:'',
        username:'',
        email:'',
        password:'',
        password_confirmation:'',
        address:'',
        phone:'',
        payment_info:'',
        role_name:'admin'
      });
    } catch (error) {
      console.error('Failed to create account:', error);
      setError('Failed to create account');
      setSuccess(null);
    }
  };

  return (
    <div>
      
      <h1>Create Account</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="payment_info">Payment Info:</label>
        <input
          type="text"
          id="payment_info"
          name="payment_info"
          placeholder="Payment Info"
          value={formData.payment_info}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="role_name">Account Type:</label>
        <select
          id="role_name"
          name="role_name"
          placeholder="Account Type"
          value={formData.role_name}
          onChange={handleChange}
        >
          <option value="admin">Administrator</option>
          <option value="assigner">Assigner</option>
          <option value="official">Official</option>
        </select>
        <br/>
        <Button
          name="Create Account"
          className="primary"
          handle={handleSubmit}
        />
      </form>
    </div>
  );
};

export default AccountForm;