import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>Rs. {item.price.toFixed(2)}</p>
        <p>{item.size}</p>
        <div className="qty-controls">
          <div className="incressItem">
            <button>-</button>
            <span>{item.qty}</span>
            <button>+</button>
          </div>
          <a href="#">Remove</a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
