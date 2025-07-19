import React, { useEffect, useRef } from "react";
import {
  Users,
  ZoomIn as Loom,
  Heart,
  ShoppingBag,
  Home,
  Facebook,
  Instagram,
  Youtube,
  MessageSquare,
  ChevronDown,
  Image,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const autoScroll = () => {
      if (!scrollContainer) return;
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScroll - 5) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      scrollInterval = setInterval(autoScroll, 3000); // scroll every 3 seconds
    }

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <footer className="footer">
      {/* Top Benefits Section */}
      <div className="footer-benefits">
        <hr className="slider-separator" />
        <div className="footer-container">
          <div className="benefits-grid" ref={scrollRef}>
            {/* Uniquely Curated */}
            <div className="benefit-item">
              <div className="benefit-icon">
                {/* <Users size={64} color="#1f2937" strokeWidth={1} /> */}
                <img src="/Icons-03.png" alt="Icon" width={80} height={80} />
              </div>
              <h3 className="benefit-title">Uniquely Curated</h3>
              <p className="benefit-description">
                Discover the rare and remarkable, curated fashion for
                trendsetters
              </p>
            </div>

            {/* Handloom */}
            <div className="benefit-item">
              <div className="benefit-icon">
                {/* <Loom size={64} color="#1f2937" strokeWidth={1} /> */}
                <img src="/Icons-02.png" alt="Icon" width={80} height={80} />
              </div>
              <h3 className="benefit-title">Handloom</h3>
              <p className="benefit-description">
                Threads of heritage, weaves of artistry, embrace timeless
                craftsmanship
              </p>
            </div>

            {/* Supporting Artisans */}
            <div className="benefit-item">
              <div className="benefit-icon">
                {/* <Heart size={64} color="#1f2937" strokeWidth={1} /> */}
                <img src="/Icons-01.png" alt="Icon" width={80} height={80} />
              </div>
              <h3 className="benefit-title">Supporting Artisans</h3>
              <p className="benefit-description">
                Empower artisans, wear the mark of handcrafted excellence
              </p>
            </div>

            {/* Seamless Shopping */}
            <div className="benefit-item">
              <div className="benefit-icon">
                {/* <ShoppingBag size={64} color="#1f2937" strokeWidth={1} /> */}
                <img src="/Icons-05.png" alt="Icon" width={80} height={80} />
              </div>
              <h3 className="benefit-title">Seamless Shopping</h3>
              <p className="benefit-description">
                Shop with ease, embrace a seamless fashion experience
              </p>
            </div>

            {/* Home Grown */}
            <div className="benefit-item">
              <div className="benefit-icon">
                {/* <Home size={64} color="#1f2937" strokeWidth={1} /> */}
                <img src="/Icons-04.png" alt="Icon" width={80} height={80} />
              </div>
              <h3 className="benefit-title">Home Grown</h3>
              <p className="benefit-description">
                Rooted in authenticity, celebrate local fashion, wear your
                heritage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Quick Links */}
            <div>
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="footer-links">
                {[
                  "Return and Store Credit Request",
                  "Order Status",
                  "My Account",
                  "Cart",
                  "Frequently Asked Questions",
                  "Blog",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-column">
              <h3 className="footer-section-title">Customer Service</h3>
              <div className="footer-links-container">
                <a href="/ShippingPolicy" className="footer-link">
                  Shipping Policy
                </a>
                <a href="/ReturnExchangePolicy" className="footer-link">
                  Return & Exchange Policy
                </a>
                <a href="/PrivacyPolicy" className="footer-link">
                  Privacy Policy
                </a>
                <a href="/TermsConditions" className="footer-link">
                  Terms & Conditions
                </a>
                <a href="/ContactUs" className="footer-link">
                  Contact Us
                </a>
              </div>
            </div>

            {/* About Thenmozhi Designs */}
            <div>
              <h3 className="footer-section-title">About Thenmozhi Designs</h3>
              <p className="footer-about-text">
                Thenmozhi Designs is an online platform helping you celebrate
                the touch of intricate handloom cotton collection. The
                collections are handpicked, curated and comes in a host of
                patterns, hues and fabric.
              </p>
              <div>
                <p className="customer-care-title">Customer Care</p>
                <p className="customer-care-info">9AM - 5PM</p>
                <p className="customer-care-info">Sunday Holiday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          {/* Social Media Icons */}
          <div className="social-links">
            <a href="#" className="social-link">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link">
              <div className="pinterest-icon">P</div>
            </a>
            <a href="#" className="social-link">
              <Youtube size={20} />
            </a>
          </div>

          {/* Copyright and Currency */}
          <div className="footer-bottom-right">
            {/* Currency Selector */}
            <div className="currency-selector">
              <div className="indian-flag"></div>
              <span className="currency-text">INR</span>
              <ChevronDown size={16} color="#6b7280" />
            </div>

            {/* Copyright */}
            <div className="copyright-text">
              © 2018 Thenmozhi Designs All Rights Reserved Designed by
              <span className="designer-name">IKanakshi</span>
              <span className="designer-name">Designs</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <a href="https://wa.me/your-number" className="whatsapp-button">
          <MessageSquare size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
