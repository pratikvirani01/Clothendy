import React from "react";
import "./ProductGrid.css";
import { IoCart } from "react-icons/io5";

const ProductGrid = ({ products }) => {
    return (
        <div className="grid-container">
            {products.map((product, index) => (
                <div className="grid-card" key={index}>
                    <div className="grid-image-wrapper">
                        <img src={product.image} alt={product.title} className="grid-image" />
                        <button className="grid-cart-btn" title="Add to Cart">
                            <IoCart size={20} />
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
