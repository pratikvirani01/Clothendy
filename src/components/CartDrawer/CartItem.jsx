import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.qty + 1);
  };

  const handleDecrement = () => {
    if (item.qty > 1) {
      onUpdateQuantity(item.id, item.qty - 1);
    } else {
      // Optionally remove item if quantity reaches 0
      onRemove(item.id);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>Rs. {item.price.toFixed(2)}</p>
        <p>{item.size}</p>
        <div className="qty-controls">
          <div className="incressItem">
            <button onClick={handleDecrement}>-</button>
            <span>{item.qty}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); handleRemove(); }}>
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;