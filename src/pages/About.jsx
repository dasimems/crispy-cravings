import { Button, Col, Row } from 'antd';
import React from 'react'
// import { Link } from 'react-router-dom';
import { service, team } from '../utils/constant';
import ServiceImage from "../asset/images/service_image.png"
import VegetableOne from "../asset/images/vegetables_1.png"
import VegetableTwo from "../asset/images/vegetables_2.png"

import "../asset/styles/about.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TeamCard } from '../components';
import Slider from 'react-slick';

const About = () => {
    var chefRef;

    var teamSettings = {
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
          breakpoint: 943,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>

        <Row justify="center" className="services">
      
            <Col span={22}>
            
                  <Row justify="center">
                  
                    <Col span={12} lg={{span: 12, order: 1}} md={{span: 18, order: 2}} xs={{span: 24, order: 2}} className="service-image">
                    
                        <img src={VegetableOne} className="side-image top" alt="vegetable" />
                        <img src={ServiceImage} alt="chef with food" />
                        <img src={VegetableTwo} className="side-image bottom" alt="vegetable" />

                    </Col>
                    <Col span={12} lg={{span: 12, order: 2}} md={{span: 24, order: 1}} xs={{span: 24, order: 1}} className="service-content">
                    
                      <h1>We are more than multiple service</h1>

                      <p className="service-description">This is a type of restuarant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks</p>

                      <div className="service-card-container">
                      
                        <Row justify="space-between">

                          {service.map((serviceContent, index)=>{

                            var {icon, title} = serviceContent;

                            return(
                              <Col key={index} span={11} lg={{span: 11}} md={{span: 11}} sm={{span: 11}} xs={{span: 24}} className="service-card">
                              
                                <div className="service-card-image">
                                
                                  {icon}

                                </div>

                                <p className="service-card-title">{title}</p>

                              </Col>
                            )

                          })}
                        
                        </Row>
                      
                      </div>

                    </Col>
                    
                  </Row>

            </Col>

      </Row>

      <Row justify="center" className="review teams">

        <Col span={22}>

          <Row justify="space-between" className="review-header-content">
          
            <h1 className="review-header">Meet Our Chefs</h1>

            <div className="review-nav">
            
                
              <Button className="prev-button" onClick={()=>{
                chefRef.slickPrev();
              }}>
              
                <FaArrowLeft />

              </Button>

              <Button className="next-button" onClick={()=>{
                chefRef.slickNext();
              }}>
              
                <FaArrowRight />

              </Button>
            
            </div>
          
          </Row>

          <Slider ref={c => chefRef = c} {...teamSettings} className="slider-element">

              {team.map((teamData, index)=>{
                return(
                  
                  <div key={index}>
                    <div className="slider-content">

                      <TeamCard data={teamData} />

                    </div>
                  </div>
                )
              })}
  


          </Slider>
        
        </Col>




      
      </Row>
    
    </>
  )
}

export default About
