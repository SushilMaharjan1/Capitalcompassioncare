import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contacts.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://my-portfolio-backend-750q.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          setErrorMsg(errorData.error || "Failed to send message");
        } else {
          setErrorMsg("Server error, please try again later.");
        }
        return;
      }

      if (contentType && contentType.includes("application/json")) {
        const resData = await response.json();
        setErrorMsg("");
        setFormSubmitted(true);
        e.target.reset();
      } else {
        setErrorMsg("");
        setFormSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="contacts-page container py-5">
      <h1 className="text-center text-primary mt-5 mb-4">Contact Us</h1>
      <p className="text-center lead mb-4">
        We'd love to hear from you! Reach out with any questions, feedback, or care inquiries.
      </p>

      {formSubmitted ? (
        <div className="alert alert-success text-center">
          ✅ Thank you! Your message has been submitted.
          <div className="mt-3">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5">
            <h4>Head Office</h4>
            <p>
              <FaMapMarkerAlt className="me-2 text-primary" />
              <a
                href="https://www.google.com/maps/place/Canberra+ACT/@-35.2809363,149.1296844,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                67 Carbeen Street, Rivett ACT 2611, Australia
              </a>
            </p>

            <p>
              <FaPhoneAlt className="me-2 text-primary" />
              <a href="tel:+61449744627" className="text-decoration-none text-dark">
                +61 449 744 627
              </a>
            </p>

            <p>
              <FaEnvelope className="me-2 text-primary" />
              <a
                href="mailto:info@capitalcompassioncare.com.au"
                className="text-decoration-none text-dark"
              >
                info@capitalcompassioncare.com.au
              </a>
            </p>

            <h5 className="mt-4">Operating Hours</h5>
            <p>Mon–Fri: 8:30 AM – 5:00 PM</p>
            <p>24/7 support available for clients</p>

            <div className="mt-4">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=67+Carbeen+Street,+Rivett+ACT+2611,+Australia&output=embed"
                width="100%"
                height="220"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" rows="5" className="form-control" required></textarea>
              </div>

              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" required id="consent" />
                <label className="form-check-label" htmlFor="consent">
                  By submitting this form, I agree to be contacted about Capital Compassion Care
                  services that may be of interest to me and I have read the{" "}
                  <Link to="/privacypolicy" className="text-primary" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
