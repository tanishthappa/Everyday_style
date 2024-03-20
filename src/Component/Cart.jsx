import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import '../Component/Cart.css';
import { decrementQuantity, incrementQuantity } from "../redux/action/Index1";
import { NavLink } from "react-router-dom";
import { removeFromCart } from "../redux/action/Index1";
const CartPage = ({ cartItems }) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.new_price * item.qty;
    });
    setTotalAmount(total);
  }, [cartItems]);

  const handleBuy = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart Page</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <div class="cart-item">
                <img src={item.image1} alt="Product Image" height="200px"  />
                <div className="cart-item-details">
                  <span>Name: {item.name}</span>
                  <span>Price: ${item.new_price}</span>

                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <span>Quantity: {item.qty}</span>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>Total: ${item.new_price * item.qty}</span>
              <button onClick={() => handleBuy(item.id)}>Buy</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className=" d-flex justify-content-center align-items-center">
      <p>Total amount: ${totalAmount} <br/>
      <NavLink to={'/EverydayStyle/buy'} className="btn btn-outline-dark px-5 py-2">Buy</NavLink>
      </p>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.HandleCart,
  };
};

export default connect(mapStateToProps)(CartPage);