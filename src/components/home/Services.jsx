import React from "react";
import { service } from "../../utils/constant";

function Services(props) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {service.map((item) => {
            const { id, title, content, icon } = item;
            return (
              <div className="col-lg-3 col-sm-6" key={id}>
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <div className="mb-3">{icon}</div>
                    <h5>{title}</h5>
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
