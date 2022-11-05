import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

import aboutImg1 from "../../asset/about-1.jpg";
import aboutImg2 from "../../asset/about-2.jpg";
import aboutImg3 from "../../asset/about-3.jpg";
import aboutImg4 from "../../asset/about-4.jpg";

function AboutUs(props) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 flex-column-reverse flex-lg-row align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src={aboutImg1}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={aboutImg2}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={aboutImg3}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={aboutImg4}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us
            </h5>
            <h1 className="mb-4">
              Welcome to <FaUtensils className="text-primary me-2" />
              Crispy Craving
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>

            <Link className="btn btn-primary py-3 px-5 mt-2" to="/">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
