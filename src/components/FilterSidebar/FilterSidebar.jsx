import React, { useState } from "react";
import { X } from "lucide-react";
import "./FilterSidebar.css";
import { Range } from "react-range";

const MIN = 0;
const MAX = 3000;

const FilterSidebar = ({ isOpen, onClose }) => {
  const [values, setValues] = useState([0, 3000]);

  return (
    <>
      <div
        className={`filter-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />
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
          <div className="price-slider-container">
            <Range
              values={values}
              step={50}
              min={MIN}
              max={MAX}
              onChange={setValues}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    background: `linear-gradient(to right, lightgray ${
                      ((values[0] - MIN) / (MAX - MIN)) * 100
                    }%, black ${
                      ((values[0] - MIN) / (MAX - MIN)) * 100
                    }%, black ${
                      ((values[1] - MIN) / (MAX - MIN)) * 100
                    }%, lightgray ${((values[1] - MIN) / (MAX - MIN)) * 100}%)`,
                    borderRadius: "4px",
                    margin: "24px 0",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "16px",
                    width: "16px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    boxShadow: "0 0 2px rgba(0, 0, 0, 0.6)",
                    cursor: "pointer",
                  }}
                />
              )}
            />

            <div className="price-inputs">
              <div>
                ₹INR{" "}
                <input
                  type="number"
                  value={values[0]}
                  onChange={(e) => setValues([+e.target.value, values[1]])}
                />
              </div>
              <span>to</span>
              <div>
                ₹INR{" "}
                <input
                  type="number"
                  value={values[1]}
                  onChange={(e) => setValues([values[0], +e.target.value])}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h4>Color</h4>
          <div className="color-options">
            <span
              className="color-circle"
              style={{ backgroundColor: "blue" }}
            ></span>
            <span
              className="color-circle"
              style={{ backgroundColor: "green" }}
            ></span>
            <span
              className="color-circle"
              style={{ backgroundColor: "maroon" }}
            ></span>
            <span
              className="color-circle"
              style={{ backgroundColor: "pink" }}
            ></span>
            <span
              className="color-circle"
              style={{ backgroundColor: "yellow" }}
            ></span>
          </div>
        </div>

        <div className="filter-section">
          <h4>Size</h4>
          <div className="size-options">
            {["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map(
              (size) => (
                <span key={size}>{size}</span>
              )
            )}
          </div>
        </div>

        <button className="view-results-btn">VIEW RESULTS</button>
      </div>
    </>
  );
};

export default FilterSidebar;
