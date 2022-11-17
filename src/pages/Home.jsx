import { Button, Col, Row } from "antd";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dishes, products } from "../utils/constant"

import "../asset/styles/home.css"
import { Dishes, ImageAnimation } from "../components";

function Home(props) {

    var sliderRef;

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
    
      <Row justify="center" className="hero">
      
        <Col span={22} className="hero-section">

          <Row justify="space-between" className="hero-section-container align-center">

            <Col span={11} className="hero-content">

              <h1>We Serve The Taste You Love</h1>

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

      <Row justify="center" className="popular-dishes">

            <Col span={22}>

                <Row justify="space-between" className="popular-dishes-header align-center">

                  <h2>Popular dishes</h2>

                  <div className="slider-nav">

                    <Button className="prev-button" onClick={()=>{
                      sliderRef.slickPrev();
                    }}>
                    
                      <FaArrowLeft />

                    </Button>

                    <Button className="next-button" onClick={()=>{
                      sliderRef.slickNext();
                    }}>
                    
                      <FaArrowRight />

                    </Button>
                  
                  </div>
                
                
                </Row>
            
              <Slider ref={c => sliderRef = c} {...settings} className="slider-element">

                    {products.map((product, index)=>{
                      return(
                        
                        <div key={index}>
                          <div className="slider-content">

                            <Dishes data={product} />

                          </div>
                        </div>
                      )
                    })}



              </Slider>
            </Col>

      
      </Row>
    
    </>
  );
}

export default Home;
