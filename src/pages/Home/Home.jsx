import React, { useState, useEffect } from "react";
import "./Home.css";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Footer from "../../components/Footer/Footer";
import BigProduct from "../../components/BigProduct/BigProduct";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

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
    id: 1,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Scarlet Red Alia Cut Printed Co-ord Set",
    price: "2,500",
  },
  {
    id: 2,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Coral Orange Cotton Suit with Kota Dupatta Dupatta Dupatta Dupatta",
    price: "2,500",
  },
  {
    id: 3,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Shoulder Cut Light Marigold Suit",
    price: "2,500",
  },
  {
    id: 4,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Twilight Blossom Printed Co-ord Set",
    price: "2,000",
  },
  {
    id: 5,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Dark Blue Chiffon Saree",
    price: "2,800",
  },
  {
    id: 6,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Yellow Embroidered Kurti",
    price: "2,200",
  },
  {
    id: 7,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Yellow Embroidered Kurti",
    price: "2,200",
  },
  {
    id: 8,
    image: "/sliderImages.jpg",
    hoverImage: "/banner-image.jpg",
    title: "Yellow Embroidered Kurti",
    price: "2,200",
  },
  // add more products as needed
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [otpError, setOtpError] = useState("");

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) { // Only allow numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setOtpError("");
      
      // Auto-focus next input
      if (value && index < 4) {
        const nextInput = document.querySelectorAll(".otp-input")[index + 1];
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Handle OTP verification
  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 5) {
      setOtpError("Please enter the complete 5-digit OTP");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would verify with your backend here
      alert(`OTP ${enteredOtp} verified successfully!`);
      setShowModal(false);
      setShowOtp(false);
      setOtp(["", "", "", "", ""]);
      setPhoneNumber("");
    }, 1500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("+91");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleJoin = () => {
  // Validate phone number
  if (phoneNumber.length < 10) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }
  
  // In a real app, you would send the OTP to the phone number here
  // For demo, we'll just show the OTP inputs
  setShowOtp(true);
};


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
      <div>
          {showModal && (
        <div className="overlay">
          <div className="modal">
            <button 
              className="close-btn" 
              onClick={() => {
                setShowModal(false);
                setShowOtp(false);
                setOtp(["", "", "", "", ""]);
                setPhoneNumber("");
              }}
            >
              ×
            </button>
            <h2>Welcome To Clothendy</h2>
            <p>
              Join us and be the first to get notified when we launch our
              exclusive collections.
            </p>
            
            {!showOtp ? (
              <>
                <div className="phone-input-container">
                  <select
                    className="country-code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">India (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+971">UAE (+971)</option>
                    <option value="+65">Singapore (+65)</option>
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setPhoneNumber(value);
                      }
                    }}
                    className="phone-input"
                    placeholder="Enter phone number"
                    maxLength="10"
                  />
                </div>
                <button
                  className="join-button"
                  onClick={handleJoin}
                  disabled={phoneNumber.length < 10 || isLoading}
                >
                  {isLoading ? "Sending OTP..." : "Join Us"}
                </button>
              </>
            ) : (
              <div className="otp-container">
                <p>We've sent a 5-digit OTP to {countryCode + phoneNumber}</p>
                <div className="otp-inputs">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength="1"
                      className="otp-input"
                      value={otp[i] || ""}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => {
                        // Handle backspace to move to previous input
                        if (e.key === "Backspace" && !otp[i] && i > 0) {
                          const prevInput = document.querySelectorAll(".otp-input")[i - 1];
                          if (prevInput) prevInput.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                {otpError && <p className="error-message">{otpError}</p>}
                <button 
                  className="verify-button" 
                  onClick={handleVerify}
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
