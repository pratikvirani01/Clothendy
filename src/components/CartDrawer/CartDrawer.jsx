import React from "react";
import "./CartDrawer.css";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      {isOpen && <div className="cart-backdrop" onClick={onClose}></div>}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="cart-info">
          Prices are inclusive of taxes. Flat Rs. 100 shipping for all Domestic
          Orders.
        </p>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>

        <div className="cart-footer">
          <p>Add order note</p>
          <p>
            Prices are inclusive of taxes. Flat Rs. 100 shipping for all
            Domestic Orders.
          </p>
          <p className="gift-note">
            🎁 <strong>Gift Wrap</strong>
          </p>
          <div className="checkout-bar">
            <button className="checkout-btn">
              CHECKOUTS • Rs. {total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
