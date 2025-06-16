import React, { useState } from "react";
import {
  FaHandsHelping,
  FaUserNurse,
  FaRegSmile,
  FaHeartbeat,
  FaShoppingCart,
  FaCar,
  FaStethoscope,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const services = [
    {
      icon: <FaHandsHelping size={40} className="text-primary mb-3" />,
      title: "Care Management",
      description: "Tailored planning and support to meet individual health and wellbeing goals.",
      moreInfo:
        "Care Management includes professional guidance, regular reviews, and coordinated services to ensure all health, social, and personal needs are met efficiently.",
    },
    {
      icon: <FaUserNurse size={40} className="text-primary mb-3" />,
      title: "Personal Care",
      description: "Assistance with bathing, grooming, and mobility to support independence.",
      moreInfo:
        "Personal Care ensures clients maintain dignity and hygiene through professional support with daily self-care routines and mobility assistance.",
    },
    {
      icon: <FaHome size={40} className="text-primary mb-3" />,
      title: "Domestic Assistance",
      description: "Household chores like cleaning, laundry, and tidying.",
      moreInfo:
        "We help create a clean and safe environment, so you can focus on health and happiness while we handle the housework.",
    },
    {
      icon: <FaHeartbeat size={40} className="text-primary mb-3" />,
      title: "Clinical Nursing Care",
      description: "Skilled nursing including medications and wound care.",
      moreInfo:
        "Registered nurses provide medical support at home including wound dressing, medication administration, and palliative care.",
    },
    {
      icon: <FaRegSmile size={40} className="text-primary mb-3" />,
      title: "Social & Emotional Support",
      description: "Prevent loneliness with friendly visits and chats.",
      moreInfo:
        "Emotional wellbeing is vital. We provide companionship, conversation, and engagement to keep spirits high.",
    },
    {
      icon: <FaCar size={40} className="text-primary mb-3" />,
      title: "Transport & Appointments",
      description: "Safe travel to and from medical and community appointments.",
      moreInfo:
        "Our transport services ensure clients never miss important appointments and arrive safely and on time.",
    },
    {
      icon: <FaShoppingCart size={40} className="text-primary mb-3" />,
      title: "Shopping & Errands",
      description: "Help with groceries, prescriptions, and errands.",
      moreInfo:
        "We assist in planning, accompanying, or handling essential errands so clients stay stress-free and stocked up.",
    },
    {
      icon: <FaStethoscope size={40} className="text-primary mb-3" />,
      title: "Allied Health Referrals",
      description: "Linking clients with physiotherapy, podiatry, and more.",
      moreInfo:
        "We coordinate with trusted allied health professionals to deliver services that enhance mobility, comfort, and recovery.",
    },
  ];

  return (
    <div className="about-page container py-5">
      <h1 className="text-center text-primary mt-5 mb-5">About Capital Compassion Care</h1>

      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <img
            src="/about-team.jpg"
            alt="Care team"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="text-secondary">Who We Are</h3>
          <p>
            <strong>CAPITAL COMPASSION CARE</strong> is an Aged Home Care support service provider
            based in Canberra, ACT. We offer personalised, compassionate, and high-quality home care
            services that empower older Australians to live independently and with dignity in their
            own homes.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="services-section mb-5">
        <h2 className="text-center text-primary mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-card p-3 shadow-sm rounded text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  {service.icon}
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
                <div>
                  <Button
                    variant="link"
                    className="text-primary text-decoration-none p-0"
                    onClick={() => handleShow(service)}
                  >
                    Learn More <FaArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Learn More */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedService?.moreInfo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default About;
