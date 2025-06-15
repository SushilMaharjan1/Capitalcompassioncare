import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"; // Optional for styling

const PageNotFound = () => {
  return (
    <div className="page-not-found text-center py-5 container">
      <h1 className="display-4 text-danger">404 - Page Not Found</h1>
      <p className="lead mt-3">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <img
        src="/404-image.png"
        alt="404 Illustration"
        className="img-fluid my-4"
        style={{ maxWidth: "400px" }}
      />
      <br />
      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
