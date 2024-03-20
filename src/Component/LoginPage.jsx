import React, { useLayoutEffect, useState } from 'react';
import {  Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const isLogggedIn = localStorage.getItem('loggedin');
  if(isLogggedIn) Navigate('/home');
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };



  const OnRegister=(e)=>{
    e.preventDefault();
    Navigate('/register')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      console.log(storedUsers)
      
      const user = storedUsers.find(u => u.email === formData.username);
  
     
      if (user && user.password === formData.password) {
   
        alert('success')
        localStorage.setItem('loggedin',true);
        localStorage.setItem('email', formData.username);
        Navigate('/EverydayStyle/home');
      } else {
        
        alert('Invalid Email or password');
      }
    
    
  };

  return (
    <div   >
      <h1 className='d-flex justify-content-center py-5'>Login Page</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
     
    </div>
   
  );
};

export default LoginPage;