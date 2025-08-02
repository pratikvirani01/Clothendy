import React, { useState } from "react";
import Slider from "react-slick";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartDrawer from "../CartDrawer/CartDrawer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";

const sampleCart = [
  {
    image: "/bigproductImage.jpg",
    title: "Black Ikkat Cotton Kurta",
    price: 1350,
    size: "XXS",
    qty: 1,
  },
  {
    image: "/bigproductImage.jpg",
    title: "Half White & Blue Ajrakh Kurta",
    price: 1750,
    size: "XXS",
    qty: 1,
  },
];

const ProductSlider = ({ products }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
       {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider-container">
      <div className="product-slider">
        <Slider {...settings}>
          {products.map((item, idx) => (
            <div className="product-card" key={idx}>
              <div
                className="image-wrapper"
                onClick={() => navigate(`/ProductDetail`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image default-image"
                />
                <img
                  src={item.hoverImage}
                  alt={item.title}
                  className="product-image hover-image"
                />
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartOpen(true);
                  }}
                >
                  <IoMdAdd size={20} />
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-price">Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={sampleCart}
      />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span>&gt;</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span>&lt;</span>
    </div>
  );
};

export default ProductSlider;
