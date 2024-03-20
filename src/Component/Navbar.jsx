import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/action/Index1';

const Navbar = () => {

  const isLogggedIn = localStorage.getItem('loggedin')
  const state = useSelector((state) => state.HandleCart)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {

    localStorage.removeItem('loggedin')
    localStorage.removeItem('cartItems');
    dispatch(clearCart());

    navigate('/');
  }

  const isLogin = localStorage.getItem('loggedin')
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg py-3 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bolder fs-3" style={{ color: '#265073' }} to="/">Everyday Styles</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold fs-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/EverydayStyle/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/EverydayStyle/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/EverydayStyle/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/EverydayStyle/allproduct">Product</NavLink>
              </li>
            </ul>

            <div className="buttons" >
              {!isLogggedIn && <NavLink to="/" className="btn btn-outline-dark" style={{ color: '#2D9596' }}>
                Login
              </NavLink>}
              {!isLogggedIn && <NavLink to="/register" className="btn btn-outline-dark ms-2" style={{ color: '#2D9596' }}>
                Register
              </NavLink>}
              <NavLink to="/EverydayStyle/cart" className="btn btn-outline-dark ms-2" style={{ color: '#2D9596' }}>
                Cart ({state.length})
              </NavLink>
              {
                isLogin && <button onClick={handleLogout} className="btn btn-outline-dark ms-2" style={{ color: '#2D9596' }}>Logout </button>
              }
              {
                isLogin && <button className="btn btn-outline-dark ms-2" style={{ color: '#2D9596' }}>
                  {localStorage.getItem('email')}
                </button>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar