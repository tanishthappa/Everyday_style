import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import Products from './Component/Products';
import Carousal from './Component/Carousal';
import RegistrationPage from './Component/RegistrationPage';
import Home from './Layout/Home';
import LoginPage from './Component/LoginPage';
import Cart from './Component/Cart';
import AllProduct from './Component/AllProduct';
import BuyPage from './Component/BuyPage';
import Buy from './Component/Buy';
import Private from './Component/Private';
import Error404 from './Pages/Error.404';
import { useEffect, useState } from 'react';
function App() {


  return (
    <>
 <Navbar/>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/EverydayStyle' element={<Private />}>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='product' element={<Products/>}/>
          <Route path='product/:id' element={<BuyPage/>}/>
          <Route path='allproduct' element={<AllProduct/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='buy' element={<Buy/>}/>
        </Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
   

    </>
  );
}

export default App;
