import { Button, Col, Row, Breadcrumb } from 'antd';
import React from 'react'
// import { Link } from 'react-router-dom';
import { review, service/* , team */ } from '../utils/constant';
import ServiceImage from "../asset/images/service_image.png"
import VegetableOne from "../asset/images/vegetables_1.png"
import VegetableTwo from "../asset/images/vegetables_2.png"

import "../asset/styles/about.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CustomerReview/* , TeamCard  */} from '../components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const About = () => {
    var reviewRef;


    
    var reviewSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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

        <Row justify="center" className="bread-crumb-container">
        <Col span={22}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

        <Row justify="center" className="services about-service">
      
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

      {/* <Row justify="center" className="review teams about-review">

        <Col span={22}>

          <Row justify="space-between" className="review-header-content">
          
            <h1 className="team-header">Meet Our Chefs</h1>
          
          </Row>

          <Row className="team-container">
            {team.map((teamDetails, index)=>{
              return(
                <Col span={7} lg={{span: 7}} md={{span: 13}} sm={{span: 17}} xs={{span: 24}} key={index} className="team-card-content">
                  <TeamCard data={teamDetails} />
                </Col>
              )
            })}
          </Row>
        
        </Col>




      
      </Row> */}

      <Row justify="center" className="review about-review">

        <Col span={22}>

          <Row justify="space-between" className="review-header-content">
          
            <h1 className="review-header">What our customer says</h1>

            <div className="review-nav">
            
                
              <Button className="prev-button" onClick={()=>{
                reviewRef.slickPrev();
              }}>
              
                <FaArrowLeft />

              </Button>

              <Button className="next-button" onClick={()=>{
                reviewRef.slickNext();
              }}>
              
                <FaArrowRight />

              </Button>
            
            </div>
          
          </Row>

          <Slider ref={c => reviewRef = c} {...reviewSettings} className="slider-element">

              {review.map((reviewData, index)=>{
                return(
                  
                  <div key={index}>
                    <div className="slider-content">

                      <CustomerReview data={reviewData} />

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
