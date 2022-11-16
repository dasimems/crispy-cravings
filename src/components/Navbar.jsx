import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { links } from "../utils/constant";

import logo from "../asset/images/logo.png";
import { Col, Row } from "antd";

function Navbar(props) {

  const location = useLocation();

  return (
    <>


      <header>

        <Row justify="space-between" className="header-content align-center">

          <Col push={1} className="logo">
            <img src={logo} alt="crispy logo" />
          </Col>

          <Col pull={1} className="header-links">

            <ul>

              {links.map((link, index) => {
                var {text, url, bordered, background} = link,
                    linkClassName = "";

                    if(location.pathname === url){
                      linkClassName += " active-link"
                    }

                    if(bordered){
                      linkClassName += " bordered-link";
                    }

                    if(background){
                      linkClassName += " background-link";
                    }

                return(
                  <>

                    <li className={linkClassName} key={index}><Link to={url}>{text}</Link></li>
                  
                  </>
                )
              })}

            </ul>
            
          </Col>

        </Row>

      </header>
    
    
    </>
  );
}

export default Navbar;
