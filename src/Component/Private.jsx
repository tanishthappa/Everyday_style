import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const Private = () => {

  const navigate = useNavigate();
  
  useLayoutEffect(() => {
    const islogin = localStorage.getItem('loggedin');
    if(!islogin) navigate('/');
  },[])


  return (
    <>
    <Outlet/>
    </>
  )
}

export default Private