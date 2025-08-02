// components/BlogDetail.js
import React from "react";
import "./BlogdetailCard.css";

const BlogdetailCard = ({ title, sections }) => {
  return (
    <div className="blog-detail">
      <h1 className="blogdetails-title">{title}</h1>

      {sections.map((section, index) => (
        <div key={index}>
          {section.heading && <h2 className="blog-heading">{section.heading}</h2>}
          <p className="blog-paragraph" dangerouslySetInnerHTML={{ __html: section.text }}></p>
        </div>
      ))}
    </div>
  );
};

export default BlogdetailCard;
