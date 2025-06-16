import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";
import heroBanner from "../../assets/hero-banner.jpg";
import "./Home.css";
import "../../styles/colors.css";

const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("how-it-works");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero position-relative text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
        <div className="hero-content text-center position-relative z-1">
          <h1 className="display-4 fw-bold">Your Health, Our Mission</h1>
          <p className="lead">Compassionate in-home care for older Australians</p>
          <Link to="/contacts" className="btn btn-primary btn-lg mt-3">
            Get Started
          </Link>
        </div>
        <div className="scroll-down-arrow" onClick={scrollToNextSection}>
          ↓
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-4">How It Works</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <FaPhoneAlt size={40} className="text-primary mb-3" />
              <h5>1. Contact Us</h5>
              <p>Call, email, or fill out our online form to begin the process.</p>
            </div>
            <div className="col-md-4">
              <FaClipboardCheck size={40} className="text-primary mb-3" />
              <h5>2. Personalised Assessment</h5>
              <p>We’ll assess your care needs and build a personalised plan.</p>
            </div>
            <div className="col-md-4">
              <FaHome size={40} className="text-primary mb-3" />
              <h5>3. Receive Care</h5>
              <p>Begin receiving care from our compassionate team in your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center text-primary mb-4">About Us</h2>
          <p className="lead text-center">
            At Capital Compassion Care, we are dedicated to providing high-quality,
            person-centered in-home care for elderly Australians. Our goal is to promote
            independence, dignity, and well-being for every client we serve.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-4">Our Services</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <h5>Personal Care</h5>
              <p>Support with bathing, grooming, and daily hygiene routines.</p>
            </div>
            <div className="col-md-4">
              <h5>Meal Preparation</h5>
              <p>Healthy meal planning and cooking assistance tailored to your needs.</p>
            </div>
            <div className="col-md-4">
              <h5>Medication Reminders</h5>
              <p>Ensuring medications are taken correctly and on time.</p>
            </div>
            <div className="col-md-4">
              <h5>Companionship</h5>
              <p>Friendly social interaction and emotional support.</p>
            </div>
            <div className="col-md-4">
              <h5>Mobility Support</h5>
              <p>Help with walking, transfers, and fall prevention strategies.</p>
            </div>
            <div className="col-md-4">
              <h5>Light Housekeeping</h5>
              <p>Maintaining a clean and comfortable home environment.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
