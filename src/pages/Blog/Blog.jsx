import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blog.css";

const blogData = [
  {
    image: "/bigproductImage.jpg",
    category: "Mangalagiri cotton saree",
    title: "Explore The Exquisite Mangalagiri Saree Designs For Your Wardrobe",
    description:
      "India is a land of numerous cultures and traditions, every location providing its unique contributions...",
    link: "/BlogDetails",
  },
  {
    image: "/bigproductImage.jpg",
    category: "Kanchipuram pure silk sarees",
    title: "Unveiling The Origins Of Traditional Motifs In Kanchipuram Sarees",
    description:
      "Kanchipuram sarees, widely recognized for high-quality first-rate handiwork and undying beauty...",
    link: "/BlogDetails",
  },
  {
    image: "/bigproductImage.jpg",
    category: "",
    title: "A Look into the Current Status of the Kanchipuram Silk Industry",
    description:
      "The pure silk Kanchipuram silk sarees have gained immense popularity worldwide due to their exceptional hues...",
    link: "/BlogDetails",
  },
  {
    image: "/bigproductImage.jpg",
    category: "Mangalagiri cotton saree",
    title: "Explore The Exquisite Mangalagiri Saree Designs For Your Wardrobe",
    description:
      "India is a land of numerous cultures and traditions, every location providing its unique contributions...",
    link: "/BlogDetails",
  },
  {
    image: "/bigproductImage.jpg",
    category: "Kanchipuram pure silk sarees",
    title: "Unveiling The Origins Of Traditional Motifs In Kanchipuram Sarees",
    description:
      "Kanchipuram sarees, widely recognized for high-quality first-rate handiwork and undying beauty...",
    link: "/BlogDetails",
  },
  {
    image: "/bigproductImage.jpg",
    category: "",
    title: "A Look into the Current Status of the Kanchipuram Silk Industry",
    description:
      "The pure silk Kanchipuram silk sarees have gained immense popularity worldwide due to their exceptional hues...",
    link: "/BlogDetails",
  },
];

const Blog = () => {
  return (
    <div className="blog-list">
      {blogData.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Blog;