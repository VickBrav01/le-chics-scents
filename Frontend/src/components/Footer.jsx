import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Welcome to our jewelry store! We offer a wide range of exquisite
            jewelry, watches, and perfumes that are crafted with precision and
            elegance.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Phone: +254726255036
            <br />
            Email: vickbrav01@gmail.ccom
            <br />
            Address: 12434 Moi Avenue, Nairobi, Kenya
          </p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 leChics. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
