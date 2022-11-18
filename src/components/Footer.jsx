import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../asset/images/logo.png";
import {FaArrowRight} from "react-icons/fa"
import { socials, links, service, footerContact } from "../utils/constant";

function Footer(props) {

    const [newsletterContent, setNewsletterContent] = useState("");

  return (
    <>
    
      <footer>

        <Row justify="center" className="footer-container">

          <Col span={22}>

            <Row justify="space-between" className="footer-logo-content">

              <div className="footer-logo">

                <img src={logo} alt="crispy logo" />

              </div>

            </Row>  

            <Row justify="space-between" className="footer-content">

              <Col span={6} lg={{span: 6}} md={{span: 10}} xs={{span: 24}} className="footer-contact footer-details">

                <h1>Subscribe to Our Newsletter</h1>

                <div className="form-content">

                  <input value={newsletterContent} onChange={(e)=>{
                    setNewsletterContent(e.target.value);
                  }} className="newsletter-input" id="newsletter-input" placeholder="Please enter your email" />
                  <Button className="subscribe-button"><FaArrowRight /></Button>
                </div>

                <ul className="social-links">

                  {socials.map((social, index)=>{

                    var {icon, url} = social;
                    return(

                        <li key={index}><a href={url} target="_blank" rel="noreferrer" >{icon}</a></li>
                        
                    )
                  })}

                </ul>


              </Col>

              <Col span={4} lg={{span: 4}} md={{span: 10}} xs={{span: 24}} className="footer-service footer-details">

                  <h2 className="footer-title">Our Services</h2>

                  <ul className="link">

                    {service.map((service, index)=>{
                      var { title} = service

                      return(
                        
                        <li key={index}>

                          {title}

                        </li>

                      )

                    })}

                  </ul>

              </Col>

              <Col span={4} lg={{span: 4}} md={{span: 10}} xs={{span: 24}} className="footer-links footer-details">

                  <h2 className="footer-title">Quick Links</h2>

                  <ul className="link">

                    {links.map((contacts, index)=>{
                      var { url, text} = contacts
                      return(
                        
                          <li key={index}>

                            <Link to={url}>

                              {/* <span className="icon">{icon}</span> */}
                              <span className="text">{text}</span>
                              
                            </Link>

                          </li>
                      )
                    })}

                  </ul>

              </Col>

              <Col span={6} lg={{span: 6}} md={{span: 10}} xs={{span: 24}} className="footer-about footer-details">

                  <h2 className="footer-title">About Us</h2>

                  <ul className="link">

                    {footerContact.map((contacts, index)=>{
                      var {icon, url, text} = contacts
                      return(
                        
                          <li key={index}>

                            <a href={url} target="_blank" rel="noreferrer">

                              <span className="icon">{icon}</span>
                              <span className="text">{text}</span>
                              
                            </a>

                          </li>
                      )
                    })}

                  </ul>

              </Col>

            </Row>



          </Col>

        </Row>

      </footer>

    </>
  );
}

export default Footer;
