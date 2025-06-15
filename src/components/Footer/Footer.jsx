import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../../styles/colors.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="footer-links mb-3">
          <Link to="/privacypolicy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/contacts" className="footer-link">
            Contact
          </Link>
        </div>

        <div className="footer-contact mb-3">
          <div>
            <FaEnvelope className="me-2" />
            <a
              href="mailto:info@capitalcompassion.com.au"
              className="footer-contact-link"
            >
              info@capitalcompassion.com.au
            </a>
          </div>
          <div>
            <FaPhoneAlt className="me-2" />
            <a href="tel:+61449744627" className="footer-contact-link">
              +61 449 744 627
            </a>
          </div>
          <div title="Open in Google Maps">
            <FaMapMarkerAlt className="me-2" />
            <a
                href="https://www.google.com/maps/place/67+Carbeen+St,+Rivett+ACT+2611,+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
            >
                67 Carbeen Street, Rivett, ACT 2611, Australia
            </a>
            </div>

        </div>

        <div className="social-icons mb-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>

        <div>
          &copy; {new Date().getFullYear()} Capital Compassion Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
