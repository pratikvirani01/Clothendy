import React, { useEffect, useState } from "react";
import "./CartDrawer.css";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Sample Product 1",
      price: 999.99,
      size: "M",
      qty: 1,
      image: "/bigproductImage.jpg",
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: 799.99,
      size: "L",
      qty: 2,
      image: "/bigproductImage.jpg",
    },
     {
      id: 2,
      title: "Sample Product 2",
      price: 799.99,
      size: "L",
      qty: 2,
      image: "/bigproductImage.jpg",
    },
     {
      id: 2,
      title: "Sample Product 2",
      price: 799.99,
      size: "L",
      qty: 2,
      image: "/bigproductImage.jpg",
    },
  ]);

  // Function to update quantity
  const handleUpdateQuantity = (itemId, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: newQty } : item
      )
    );
  };

  // Function to remove item
  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  useEffect(() => {
    // Toggle body overflow and backdrop active class
    if (isOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>
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
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
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
