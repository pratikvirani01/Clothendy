import React from "react";
import "./ProductToolbar.css";

const ProductToolbar = ({ onFilterOpen }) => {
    return (
        <div className="product-toolbar">
            <div className="size-buttons">
                {["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map(size => (
                    <button className="size-btn" key={size}>{size}</button>
                ))}
            </div>
            <div className="actions">
                <select className="sort-select">
                    <option value="">Sort by</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                </select>
                <button className="filter-btn" onClick={onFilterOpen}>Filter</button>
            </div>
        </div>
    );
};

export default ProductToolbar;
