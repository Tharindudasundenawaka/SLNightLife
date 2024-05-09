import React, { useState } from 'react';
import axios from 'axios';
import './Ligin.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      console.log(response.data);

      if (response.data.userType === 'User') {
        window.location.href = '/user-dashboard';
      } else if (response.data.userType === 'Seller') {
        window.location.href = '/seller-dashboard';
      } else if (response.data.userType === 'Admin') {
        window.location.href = '/admin-dashboard';
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className ="lbutton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
