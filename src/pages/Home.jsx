import { Button, Col, Row } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dishes } from "../utils/constant"

import "../asset/styles/home.css"
import { ImageAnimation } from "../components";

function Home(props) {
  return (
    <>
    
      <Row justify="center" className="hero">
      
        <Col span={22} className="hero-section">

          <Row justify="space-between" className="hero-section-container align-center">

            <Col span={11} className="hero-content">

              <h1>We Serve The Test You Love</h1>

              <p>This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the french word meaning food</p>

              <div className="hero-actions">

                <Link to="/menu" className="button">Explore Food</Link>

                <div className="search-box">

                  <Button className="search-button">

                    <span className="icon"><FaSearch /></span>
                    <span className="text">Search</span>
                    
                  </Button>

                </div>

              </div>

            </Col>

            <Col span={11} className="hero-image">

              <ImageAnimation>
                {dishes.map((imageDetails, index) => {

                  var {image, name} = imageDetails;

                  return(

                      <img key={index} src={image} alt={name} data-label={name} data-image={image} />
                      
                  )
                })}
              </ImageAnimation>

              

            </Col>

          </Row>

        </Col>

      </Row>
    
    </>
  );
}

export default Home;
