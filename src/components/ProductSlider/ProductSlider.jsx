import React, { useState, useRef } from "react";
import "./ProductSlider.css";
import { IoCart } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductSlider = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
      const navigate = useNavigate(); 

    const nextSlide = () => setStartIndex((prev) => (prev + 4) % products.length);
    const prevSlide = () => setStartIndex((prev) => (prev === 0 ? products.length - 4 : prev - 4));

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // scroll speed multiplier
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

       const handleProductClick = () => {
        // Navigate to product detail page with the product ID
        navigate(`/ProductDetail`);
    };

    return (
        <div className="product-slider">
            <button className="nav-btn left" onClick={prevSlide}>‹</button>
            <div
                className="slider-view"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {products.slice(startIndex, startIndex + 4).map((item, idx) => (
                    <div className="product-card" key={idx}>
                        <div className="image-wrapper"  onClick={() => handleProductClick(item.id)}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="product-image main-image"
                            />
                            {item.hoverImage && (
                                <img
                                    src={item.hoverImage}
                                    className="product-image hover-image"
                                />
                            )}
                            <button className="add-to-cart-btn" title="Add to Cart">
                                <IoMdAdd size={20} />
                            </button>
                        </div>
                        <h3 className="product-title">{item.title}</h3>
                        <h3 className="product-price">Rs. {item.price}</h3>
                    </div>
                ))}
            </div>
            <button className="nav-btn right" onClick={nextSlide}>›</button>
        </div>
    );
};

export default ProductSlider;
