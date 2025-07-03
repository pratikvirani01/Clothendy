import React, { useState, useEffect } from "react";
import "./Home.css";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Footer from "../../components/Footer/Footer";
import BigProduct from "../../components/BigProduct/BigProduct";

const images = [
  {
    src: "/banner-image.jpg",
    title: "Mangalagiri Cotton Saree with Zari border",
  },
  {
    src: "/bannerimage.jpg",
    title: "Chanderi Silk Saree",
  },
  {
    src: "/banner-image.jpg",
    title: "Kanchi Pattu Saree",
  },
];

const products = [
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Scarlet Red Alia Cut Printed Co-ord Set",
    price: "2,500",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Coral Orange Cotton Suit with Kota Dupatta",
    price: "2,500",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Shoulder Cut Light Marigold Suit",
    price: "2,500",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Twilight Blossom Printed Co-ord Set",
    price: "2,000",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Dark Blue Chiffon Saree",
    price: "2,800",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Yellow Embroidered Kurti",
    price: "2,200",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Yellow Embroidered Kurti",
    price: "2,200",
  },
  {
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Yellow Embroidered Kurti",
    price: "2,200",
  },
  // add more products as needed
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const bigProducts = [
    {
      title: "Pure Kanchipuram Silk Sarees",
      image: "/bigproductImage.jpg",
      link: "#",
    },
    {
      title: "Maheshwari Silk Cotton",
      image: "/bigproductImage.jpg",
      link: "#",
    },
    {
      title: "Majestic Mangalagiri",
      image: "/bigproductImage.jpg",
      link: "#",
    },
    {
      title: "Elegant Banarasi Sarees",
      image: "/bigproductImage.jpg",
      link: "#",
    },
    {
      title: "Graceful Tussar Silk",
      image: "/bigproductImage.jpg",
      link: "#",
    },
    {
      title: "Charming Chanderi Cotton",
      image: "/bigproductImage.jpg",
      link: "#",
    },
  ];

  return (
    <div className="mainContainer">
      <div className="slider-container">
        <img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="slider-image"
        />
        <div className="slider-overlay">
          {/* <h2 className="slider-title">{images[currentIndex].title}</h2> */}
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="slider-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

      <h2 className="titleProductSection">New Arrivals</h2>
      <ProductSlider products={products} />
      <div className="commoneButton">
        <button className="shop-view-all">VIEW ALL</button>
      </div>

      <hr className="slider-separator" />

      <h2 className="titleProductSection">Best Seller - Sarees</h2>
      <ProductSlider products={products} />
      <div className="commoneButton">
        <button className="shop-view-all">VIEW ALL</button>
      </div>

      <hr className="slider-separator" />

      <h2 className="titleProductSection">Best Seller - Salwars</h2>
      <ProductSlider products={products} />
      <div className="commoneButton">
        <button className="shop-view-all">VIEW ALL</button>
      </div>

      <hr className="slider-separator" />

      <BigProduct bigProducts={bigProducts} />
      <Footer />
    </div>
  );
};

export default Home;
