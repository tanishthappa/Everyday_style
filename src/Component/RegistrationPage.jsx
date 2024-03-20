import React, { useState } from 'react';
import { Navigate, useNavigate,NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navi=useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const passwordRegex = /^(?=.*[A-Z])/; 
    if (!passwordRegex.test(formData.password)) {
      setError('Password must contain at least one uppercase letter.');
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const isemailExists = storedUsers.some((user) => user.email === formData.email);

    if (isemailExists) {
      setError('Email is already taken. Please choose a different one.');
    } else {
     
      const newUser = { ...formData };
      storedUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

      
      alert('Registration successful!');
      navi('/')
    
    }
  };

  return (
    <div>
      <h1 className='d-flex justify-content-center py-3 mt-5'>Registration Page</h1>
      <form onSubmit={handleSubmit}>
       
        <label className='container pt-3'>
          Email:
          <input className=' col-12' type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label className='container pb-3' >
          Password:
          <input className='col-12' type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='mb-3' type="submit">Register</button>  
         
         
      </form>
     
      </div>
      
  );
};

export default RegistrationPage;