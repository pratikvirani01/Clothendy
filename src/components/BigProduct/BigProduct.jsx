import React from "react";
import "./BigProduct.css";

const BigProduct = ({ bigProducts }) => {
    return (
        <div className="bigProduct-grid">
            {bigProducts.map((item, index) => (
                <div className="bigProduct-card" key={index}>
                    <img src={item.image} alt={item.title} className="bigProduct-image" />
                    <div className="bigProduct-info">
                        <h3 className="bigProduct-info-Text">{item.title}</h3>
                        <a href={item.link} className="view-button">View Products</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BigProduct;
