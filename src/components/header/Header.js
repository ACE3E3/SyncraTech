import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ scrollToId }) => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (id) => {
    scrollToId(id);
    setToggle(false); // Close the overlay when a menu item is clicked
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <h1 className="logo">SyncraTech</h1>
        <ul className="menu">
          <li>
            <a className="navButton" onClick={() => handleMenuClick('products')}>Products</a>
          </li>
          <li>
            <a className="navButton" onClick={() => handleMenuClick('services')}>Services</a>
          </li>
          <li>
            <a className="navButton" onClick={() => handleMenuClick('about')}>About Us</a>
          </li>
          <li>
            <a className="navButton" onClick={() => handleMenuClick('testimonial')}>Testimonials</a>
          </li>
          <li>
            <button className="button-59" role="button" onClick={() => handleMenuClick('contact')}>
              Contact Us
            </button>
          </li>
        </ul>
        <button className="nav-icon" onClick={() => setToggle(!toggle)}>
          <span className={`line ${toggle ? "open" : ""}`} />
          <span className={`line ${toggle ? "open" : ""}`} />
          <span className={`line ${toggle ? "open" : ""}`} />
        </button>
      </nav>

      {/* Conditional rendering for faded background and overlay */}
      {toggle && (
        <>
          <div className="faded-background" onClick={() => setToggle(false)} />
          <div className="overlay open">
            <ul className="overlay-menu open">
              <li>
                <a className="navButton" onClick={() => handleMenuClick('products')}>Products</a>
              </li>
              <li>
                <a className="navButton" onClick={() => handleMenuClick('services')}>Services</a>
              </li>
              <li>
                <a className="navButton" onClick={() => handleMenuClick('about')}>About Us</a>
              </li>
              <li>
                <a className="navButton" onClick={() => handleMenuClick('testimonial')}>Testimonials</a>
              </li>
              <li>
                <button className="button-59" role="button" onClick={() => handleMenuClick('contact')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
