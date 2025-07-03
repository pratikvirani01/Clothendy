import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { IoBagOutline, IoChevronForward } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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
    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <header className={`navbar ${showNav ? "visible" : "hidden"}`}>
      <div className="navbar-top">
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu />
        </button>
        <div className="logo">
          Thennzhi <span>Designs 🥰🥵</span>
        </div>
        <div className="icons">
          <PiUserLight />
          <IoSearchOutline />
          <IoBagOutline />
        </div>
      </div>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/About">About Us</a>
        <a href="/NewArrivals">New Arrivals</a>

        {/* Regular Dropdown */}
        <div className="dropdown">
          <a href="/best" className="dropdown-trigger">
            Best Sellers
          </a>
          <div className="dropdown-content">
            <a href="/sarees">Sarees</a>
            <a href="/salwars">Salwars</a>
          </div>
        </div>

        {/* Mega Dropdown */}
        <div className="dropdown mega-dropdown fullwidth-dropdown">
          <a href="/sarees" className="dropdown-trigger">
            Sarees
          </a>
          <div className="mega-dropdown-content">
            <div className="mega-column">
              <h4>All Sarees</h4>
              <a href="/sarees">All Sarees</a>
            </div>
            <div className="mega-column">
              <h4>Look Book</h4>
              <a href="/sarees/influencer">Influencer Looks</a>
              <a href="/sarees/celebrity">Celebrity Looks</a>
            </div>
            <div className="mega-column">
              <h4>Shop by Fabric</h4>
              <a href="#">Kanchipuram Silk Sarees</a>
              <a href="#">Chanderi</a>
              <a href="#">Narayanpet</a>
              <a href="#">Mangalagiri</a>
            </div>
            <div className="mega-column">
              <h4>Shop by Occasion</h4>
              <a href="#">Casual Wear</a>
              <a href="#">Festive Wear</a>
              <a href="#">Office Wear</a>
            </div>
          </div>
        </div>

        {/* Nested Dropdown */}
        <div className="nav-dropdown">
          <a href="/lenghaCholi" className="nav-link-trigger">
            Lengha Choli
          </a>
          <div className="nav-dropdown-menu">
            <div className="nav-submenu-item">
              <div className="nav-submenu-trigger">
                <a href="/lengha/Traditional">Traditional</a>
                <IoChevronForward className="nav-submenu-icon" />
              </div>
              <div className="nav-submenu-content">
                <a href="/lengha/traditional/banarasi">Banarasi</a>
                <a href="/lengha/traditional/bandhani">Bandhani</a>
                <a href="/lengha/traditional/kanjivaram">Kanjivaram</a>
              </div>
            </div>
          </div>
        </div>

        <a href="/codeSet">Code Set</a>
        <a href="/deals">Deals</a>
        <a href="/instagram">Instagram Feed</a>
      </nav>
    </header>
  );
};

export default Navbar;
