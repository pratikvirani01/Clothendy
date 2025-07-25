import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import Footer from "../../components/Footer/Footer";

const images = [
  "/bigproductImage.jpg",
  "/banner-image.jpg",
  "/bigproductImage.jpg",
  "/banner-image.jpg",
  "/bigproductImage.jpg",
];

const ProductDetail = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play slider every 3 seconds
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="product-page">
        {isMobile ? (
          <div className="mobile-slider-container">
            <div className="mobile-slider">
              <button onClick={handlePrev} className="slider-btn left">
                ‹
              </button>
              <img
                src={images[currentImageIndex]}
                alt={`Product ${currentImageIndex + 1}`}
                className="mobile-slider-image"
              />
              <button onClick={handleNext} className="slider-btn right">
                ›
              </button>
            </div>
          </div>
        ) : (
          <div className="scroll-image-section">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Product view ${index + 1}`} />
            ))}
          </div>
        )}

        <div className="product-info">
          <h2>Pastel olive green Narayanpet Border Saree</h2>
          <p className="price">Rs. 2,000</p>
          <div className="rating">★★★★★ (0.0)</div>

          <div className="quantity-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <label className="gift-wrap">
            <input type="checkbox" />
            🎁 Gift Wrap
          </label>

          {/* <div className="blouse-stitching">
          <span>Blouse Stitching</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div> */}

          <button className="add-to-cart">ADD TO CART</button>
          <button className="buy-now">BUY IT NOW</button>

          <a className="size-chart">📏 Size Chart</a>

          <div className="description">
            <h4>Saree Description</h4>
            <p>
              <strong>Fabric:</strong> Narayanpet Saree
            </p>
            <p>
              <strong>Length:</strong> 6.2 meters
            </p>
          </div>

          <div className="blouse-section">
            <h4>Blouse Description</h4>
            <p>Attached Running Blouse</p>

            <p className="disclaimer">
              <strong>Disclaimer:</strong> Slight black lines and thread pulling
              are very normal in narayanpet handloom weaves. These are natural
              characteristics of handwoven fabrics and cannot be considered as
              defects.
            </p>

            <div className="delivery-tags">
              <div className="tag red">
                Estimated delivery within 3-5 days across India
              </div>
              <div className="tag">🧵 Authentic & Quality Assured</div>
              <div className="tag">🔄 Hassle Free Exchanges</div>
              <div className="tag">
                🚚 Flat Rs. 100 shipping for all Domestic Orders
              </div>
            </div>

            <div className="accordion">
              <details>
                <summary>Wash care</summary>
                <p>
                  Hand wash separately in cold water using mild detergent. Do
                  not bleach or tumble dry. Dry in shade.
                </p>
              </details>
              <details>
                <summary>Shipping & Delivery</summary>
                <p>
                  Domestic delivery in 3-5 business days. International shipping
                  available at additional cost.
                </p>
              </details>
              <details>
                <summary>International Shipments</summary>
                <p>
                  We ship worldwide via trusted courier partners. Customs duties
                  and taxes are the responsibility of the customer.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetail;
