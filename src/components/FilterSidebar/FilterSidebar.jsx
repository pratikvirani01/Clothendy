import React from "react";
import { X } from "lucide-react";
import "./FilterSidebar.css";

const FilterSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`filter-overlay ${isOpen ? "show" : ""}`} onClick={onClose} />
            <div className={`filter-sidebar ${isOpen ? "open" : ""}`}>
                <div className="filter-header">
                    <h3>Filters</h3>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="filter-section">
                    <h4>Availability</h4>
                    <label className="toggle-wrapper">
                        <input type="checkbox" />
                        <span className="toggle-slider" />
                        <span className="toggle-label">In stock only</span>
                    </label>
                </div>

                <div className="filter-section">
                    <h4>Price</h4>
                    <div className="price-slider">
                        <input type="range" min="0" max="3000" />
                        <input type="range" min="0" max="3000" />
                    </div>
                    <div className="price-inputs">
                        <div>₹INR <input type="number" placeholder="0" /></div>
                        <span>to</span>
                        <div>₹INR <input type="number" placeholder="2950" /></div>
                    </div>
                </div>

                <div className="filter-section">
                    <h4>Color</h4>
                    <div className="color-options">
                        <span className="color-circle" style={{ backgroundColor: "blue" }}></span>
                        <span className="color-circle" style={{ backgroundColor: "green" }}></span>
                        <span className="color-circle" style={{ backgroundColor: "maroon" }}></span>
                        <span className="color-circle" style={{ backgroundColor: "pink" }}></span>
                        <span className="color-circle" style={{ backgroundColor: "yellow" }}></span>
                    </div>
                </div>

                <div className="filter-section">
                    <h4>Size</h4>
                    <div className="size-options">
                        {["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map(size => (
                            <span key={size}>{size}</span>
                        ))}
                    </div>
                </div>

                <button className="view-results-btn">VIEW RESULTS</button>
            </div>
        </>
    );
};

export default FilterSidebar;
