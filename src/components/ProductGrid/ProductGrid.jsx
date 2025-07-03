import React from "react";
import "./ProductGrid.css";
import { IoMdAdd } from "react-icons/io";

const ProductGrid = ({ products }) => {
    return (
        <div className="grid-container">
            {products.map((product, index) => (
                <div className="grid-card" key={index}>
                    <div className="grid-image-wrapper">
                        <img src={product.image} alt={product.title} className="grid-image main-img" />
                        <img src={product.hoverImage} alt={product.title} className="grid-image hover-img" />
                        <button className="grid-cart-btn" title="Add to Cart">
                            <IoMdAdd size={20} />
                        </button>
                    </div>
                    <h3 className="grid-title">{product.title}</h3>
                    <h3 className="grid-price">Rs. {product.price}</h3>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
