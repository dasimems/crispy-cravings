import { Button, Col, Row } from "antd";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dishes, review, service, team } from "../utils/constant"

import "../asset/styles/home.css"
import { CustomerReview, Dishes, ImageAnimation, TeamCard } from "../components";
import ServiceImage from "../asset/images/service_image.png"
import VegetableOne from "../asset/images/vegetables_1.png"
import VegetableTwo from "../asset/images/vegetables_2.png"
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../utils/context";

function Home(props) {

    var sliderRef;
    var chefRef;
    var reviewRef;
    const [productCats, setProductCats] = useState([]);
    const [presentCat, setPresentCat] = useState("");
    const [fetchedProduct, setFetchedProduct] = useState([])

    
    const {products, productCategories} = useGlobalContext()

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
          breakpoint: 943,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

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

    useEffect(()=>{

      if(productCategories.length < 8){
        setProductCats(productCategories)
        setPresentCat(productCategories[0]?.label)
      }else{

        var newProdCat = []
        productCategories.forEach((prod, index) => {

          if(index < 6){
            newProdCat.push(prod);
          }

        })

        newProdCat.push({
          id: (newProdCat.length + 1),
          label: "See More",
          icon: <FaPlus />
        })

        
        setPresentCat(newProdCat[0].label)

        setProductCats(newProdCat)

      }

    }, [productCategories])

    useEffect(()=>{

      var productList = products.filter(prod => prod.category.name === presentCat);

      setFetchedProduct(productList)

    }, [products, presentCat])

  return (
    <>
    
      <Row justify="center" className="hero">
      
        <Col span={22} className="hero-section">

          <Row justify="center" className="hero-section-container align-center">

            <Col span={12} lg={{span: 12}} md={{span: 14}} xs={{span: 24}}className="hero-content">

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

            <Col span={12} lg={{span: 12}} md={{span: 16}} xs={{span: 24}}className="hero-image">

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

                    {products.slice(products.length - 12, ).map((product, index)=>{
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

                      <Link className="button" to="/about">About Us</Link>

                    </Col>
                    
                  </Row>

            </Col>

      </Row>

      <Row justify="center" className="menu-pack">
      
        <Col span={22}>
        
            <h2 className="pack-title">Our Regular Menu Pack</h2>

            <Row justify="space-between" className="pack-menus">

                  {productCats.map((cat, index)=>{

                    var {label} = cat,
                      catClassName = "menu-btn";

                      if(label.toLowerCase() === "see more"){
                        catClassName += " link-btn";
                      }

                      if(presentCat === label){
                        catClassName += " active-btn"

                      }


                    return(

                      <Col span={3} key={index} className={catClassName} onClick={()=>{
                        if(label.toLowerCase() !== "see more"){
                          setPresentCat(label);
                        }
                      }}>

                        {label.toLowerCase() !=="see more"? <p>{label}</p>: <Link to="/menu">{label}</Link>}

                      </Col>
                      
                    )

                  })}
                  
            </Row>

            <Row className="dishes-container">

                {fetchedProduct.slice(0, 8).map((product, index)=>{

                  return(
                    <Col key={index} span={5} lg={{span: 5}} md={{span: 11}} sm={{span: 11}} xs={{span: 24}} className="dishes-content">
                    
                      <Dishes data={product} />

                    </Col>
                  )

                })}
                  
            </Row>

            {products.length > 8 && <Row justify="end" className="menu-action">
                <Link className="button" to="/menu">See More</Link>
            </Row>}
        
        </Col>
      
      </Row>

      <Row justify="center" className="review">

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
  );
}

export default Home;
