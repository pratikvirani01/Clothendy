import React from "react";
import "./ContactUs.css";
import Footer from "../../../components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="Container">
      <div className="aboutTitle">
        <h3 className="aboutText">CONTACT US</h3>
        <section className="about-container">
          <div className="about-content">
            <h2>Shoot an email!</h2>
            <h2>support@clothendy.com</h2>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
