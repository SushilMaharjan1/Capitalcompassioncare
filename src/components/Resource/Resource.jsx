import React from "react";
import { FaExternalLinkAlt, FaInfoCircle, FaHandsHelping } from "react-icons/fa";
import "./Resource.css";

const Resource = () => {
  return (
    <div className="resource-page container py-5">
      <h1 className="text-center text-primary mt-5 mb-5">Helpful Resources</h1>

      <div className="row g-4">
        {/* My Aged Care - Help at Home */}
        <div className="col-md-6">
          <div className="resource-card p-4 rounded shadow-sm h-100">
            <div className="d-flex align-items-center mb-3">
              <FaHandsHelping size={30} className="text-primary me-2" />
              <h5 className="mb-0">Help at Home – My Aged Care</h5>
            </div>
            <p>
              Learn how the Australian Government supports older people to live
              independently at home through in-home services.
            </p>
            <a
              href="https://www.myagedcare.gov.au/help-at-home"
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Resource <FaExternalLinkAlt className="ms-2" />
            </a>
          </div>
        </div>

        {/* Home Care Packages */}
        <div className="col-md-6">
          <div className="resource-card p-4 rounded shadow-sm h-100">
            <div className="d-flex align-items-center mb-3">
              <FaInfoCircle size={30} className="text-primary me-2" />
              <h5 className="mb-0">Home Care Packages</h5>
            </div>
            <p>
              Information on the current Home Care Packages program which runs
              until November 2025, supporting a range of care needs at home.
            </p>
            <a
              href="https://www.health.gov.au/our-work/hcp"
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <FaExternalLinkAlt className="ms-2" />
            </a>
          </div>
        </div>

        {/* Support at Home – From Nov 2025 */}
        <div className="col-md-12">
          <div className="resource-card p-4 rounded shadow-sm h-100">
            <div className="d-flex align-items-center mb-3">
              <FaHandsHelping size={30} className="text-primary me-2" />
              <h5 className="mb-0">Support at Home Program – November 2025 Onward</h5>
            </div>
            <p>
              Discover the upcoming changes to aged care services in Australia
              under the new Support at Home program launching from November 2025.
            </p>
            <a
              href="https://www.health.gov.au/our-work/support-at-home/about"
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Program <FaExternalLinkAlt className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
