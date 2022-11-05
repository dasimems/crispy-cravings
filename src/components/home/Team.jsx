import React from "react";
import { team } from "../../utils/constant";

function Team(props) {
  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Team Members
          </h5>
          <h1 className="mb-5">Masterminds behind our brand</h1>
        </div>
        <div className="row g-4">
          {team.map((item) => {
            const { id, name, profession, image } = item;
            return (
              <div className="col-lg-4 col-md-6 wow fadeInUp" key={id}>
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="square overflow-hidden m-4">
                    <img className="img-fluid" src={image} alt="" />
                  </div>
                  <div className="content">
                    <h5 className="mb-0">{name}</h5>
                    <small>{profession}</small>
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

export default Team;
