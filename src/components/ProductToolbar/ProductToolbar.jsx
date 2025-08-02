import React, { useState } from "react";
import "./ProductToolbar.css";
import { FaThLarge, FaTh, FaList } from "react-icons/fa";

const ProductToolbar = ({ onFilterOpen }) => {
  const [active, setActive] = useState("large");
  return (
    <div className="product-toolbar">
      <div className="top-row">
        <div className="view-toggle-container">
          <button
            className={`toggle-btn ${active === "large" ? "active" : ""}`}
            onClick={() => setActive("large")}
          >
            <FaThLarge size={18} />
          </button>
          <button
            className={`toggle-btn ${active === "medium" ? "active" : ""}`}
            onClick={() => setActive("medium")}
          >
            <FaTh size={18} />
          </button>
          <button
            className={`toggle-btn ${active === "list" ? "active" : ""}`}
            onClick={() => setActive("list")}
          >
            <FaList size={18} />
          </button>
        </div>
        <div className="actions">
          <select className="sort-select">
            <option value="">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
          <button className="filter-btn" onClick={onFilterOpen}>
            Filter
          </button>
        </div>
      </div>
      <hr className="slider-separators" />
      <div className="size-buttons">
        {["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map((size) => (
          <button className="size-btn" key={size}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductToolbar;
