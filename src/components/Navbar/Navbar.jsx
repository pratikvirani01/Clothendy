import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true); // hide/show navbar
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scroll down
        setShowNav(false);
      } else {
        // scroll up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${showNav ? 'visible' : 'hidden'}`}>
      <div className="navbar-top">
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu />
        </button>
        <div className="logo">Thennzhi <span>Designs 🥰🥵</span></div>
        <div className="icons">
          <PiUserLight />
          <IoSearchOutline />
          <IoBagOutline />
        </div>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/About">About Us</a>
        <a href="/NewArrivals">New Arrivals</a>
        <a href="/best">Best Sellers</a>
        <a href="/sarees">Sarees</a>
        <a href="/salwars">Salwars</a>
        <a href="/blouses">Blouses</a>
        <a href="/deals">Deals</a>
        <a href="/instagram">Instagram Feed of the Day</a>
      </nav>
    </header>
  );
};

export default Navbar;
