// components/BlogCard.js
import React from "react";
import "./BlogCard.css";

const BlogCard = ({ image, category, title, description, link }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <p className="blog-category">{category}</p>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{description}</p>
      <a href={link} className="blog-read-more">
        Read more
      </a>
    </div>
  );
};

export default BlogCard;