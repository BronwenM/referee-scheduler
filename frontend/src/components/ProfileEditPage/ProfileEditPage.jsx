import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Button from '../Button/Button';

const ProfileEditPage = () => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    address: '',
    phone: '',
    user_association_id: 1,
    payment_info: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const userIdFromCookie = Cookies.get('new_user_id');
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
      fetchUserData(userIdFromCookie);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/users/${userId}`, { user: userData });
      setMessage('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Error updating user');
    }
  };

  const renderInput = (label, name, type = 'text') => (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={userData[name] || ''}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <div>
      <h1>Edit Profile</h1>
      {userId && (
        <form>
          {renderInput('Name', 'name')}
          {renderInput('Email', 'email', 'email')}
          {renderInput('Username', 'username')}
          {renderInput('Address', 'address')}
          {renderInput('Phone', 'phone')}
          {renderInput('Payment Info', 'payment_info')}
          <Button 
          name="Update Profile"
          handle={handleSubmit}
          className="primary" 
          />
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProfileEditPage;