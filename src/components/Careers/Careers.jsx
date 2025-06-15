import React, { useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
import { FaUserNurse, FaUsersCog } from "react-icons/fa";
import "./Careers.css";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    resume: null,
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({ fullName: "", email: "", message: "", resume: null });
    setSubmitted(false);
    setError("");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.resume) {
      setError("Please fill out all required fields and upload your resume.");
      return;
    }

    setSending(true);
    setError("");

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("https://my-portfolio-backend-750q.onrender.com/api/careers", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Submission failed. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="careers-page container py-5">
      <h1 className="text-center text-primary mt-5 mb-4">Join Our Care Team</h1>
      <p className="lead text-center mb-5">
        Make a meaningful difference every day. At Capital Compassion Care, we’re always looking for compassionate, qualified individuals to join our dedicated team.
      </p>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="/careers-team.jpg" alt="Care Team" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3>Why Work With Us?</h3>
          <ul className="fs-5">
            <li>✅ Flexible shifts and supportive work environment</li>
            <li>✅ Ongoing training and career development</li>
            <li>✅ Be part of a team that truly cares</li>
          </ul>
        </div>
      </div>

      <div className="expression-interest-section my-5">
        <h2 className="text-center text-success mb-4">Expression of Interest</h2>
        <div className="row justify-content-center">
          {/* Support Workers */}
          <div className="col-md-5 mb-3">
            <div
              className="border rounded p-4 shadow-sm h-100 hover-shadow"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <h4 className="text-primary"><FaUserNurse className="me-2" />Support Workers</h4>
              <p>Passionate about delivering care? Join us. Flexible shifts available.</p>
            </div>
            <div className="mt-2 text-center">
              <button className="btn btn-link text-primary p-0" onClick={handleShow}>
                Apply Now
              </button>
            </div>
          </div>

          {/* HR Professionals */}
          <div className="col-md-5 mb-3">
            <div
              className="border rounded p-4 shadow-sm h-100 hover-shadow"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <h4 className="text-primary"><FaUsersCog className="me-2" />HR Professionals</h4>
              <p>Join our HR team and help us grow with purpose and care.</p>
            </div>
            <div className="mt-2 text-center">
              <button className="btn btn-link text-primary p-0" onClick={handleShow}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="fs-5">
          Didn’t see the role you’re looking for?{" "}
          <span className="fw-bold text-primary" style={{ cursor: "pointer" }} onClick={handleShow}>Send us your resume</span>
        </p>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submit Your Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <Alert variant="success">Your application has been sent successfully!</Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload Resume*</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </Form.Group>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="d-flex justify-content-end">
                <Button type="submit" variant="primary" disabled={sending}>
                  {sending ? <Spinner animation="border" size="sm" /> : "Submit"}
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Careers;
