import React from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="Container">
      <div className="aboutTitle">
        <h3 className="aboutText">About Us</h3>
        <section className="about-container">
          <div className="about-content">
            <h2>Welcome to Clothendy!</h2>
            <p>
              Clothendy is a homegrown brand launched with a passion for
              celebrating tradition through timeless fashion. Founded by Bhargav
              Rangani, our goal is to bring together the perfect blend of
              elegance, heritage, and modern design — all woven into our
              carefully curated Sarees, Kurtis, Chaniya Cholis, and Gowns. Each
              piece is designed to make you feel confident, graceful, and
              completely yourself.
            </p>

            <p>
              What began as a simple idea — to share the beauty of ethnic wear —
              quickly turned into a vibrant brand loved by many. Clothendy
              started its journey on Instagram, winning hearts with unique
              collections and personalized attention. Inspired by a deep love
              for Indian textiles, Bhargav poured his dedication into building a
              brand that reflects warmth, quality, and authenticity.
            </p>

            <p>
              As we grew, so did our collection. Today, Clothendy is proud to
              offer a wide range of ethnic wear for every occasion — from daily
              elegance to festive sparkle. Our designs are handpicked with care,
              ensuring each item carries its own story, crafted with rich
              fabrics, thoughtful detailing, and a lot of heart.
            </p>

            <p>
              With every product, we aim to deliver more than just clothing — we
              deliver an experience. An experience of tradition, beauty, and
              individuality.
            </p>

            <p>
              Thank you for being a part of the Clothendy family. Let’s continue
              this journey — of celebrating culture, colour, and confidence —
              together.
            </p>

            <p>With Love</p>
            <p>Bhargav Rangani</p>
            <p>Thenmozhi Designs</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
