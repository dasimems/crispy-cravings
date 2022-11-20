import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

import { links } from "../utils/constant";

import logo from "../asset/images/logo.png";
import { Button, Col, Row } from "antd";
import { FaHamburger } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { useEffect } from "react";

function Navbar(props) {

  const location = useLocation();
  const [opened, setOpened] = useState(false);

  const navigate = useNavigate()

  useEffect(()=>{

    setOpened(false)

  }, [navigate])

  return (
    <>


      <header>

        <Row justify="space-between" className="header-content align-center">

          <Col push={1} className="logo">
            <img src={logo} alt="crispy logo" />
          </Col>

          <Col pull={1} className="header-links desktop-links ">

            <ul>

              {links.map((link, index) => {
                var {text, url, bordered, background, normalLink} = link,
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

                  <li className={linkClassName} key={index}>{normalLink? <a href={url} target="_blank" rel="noreferrer">{text}</a> :<Link to={url}>{text}</Link>}</li>


                )
              })}

            </ul>
            
          </Col>

          <Col pull={1} className="mobile-link-btn">
          
              <Button className="open-mobile-link-btn" onClick={()=>{
                setOpened(true);
              }}>
              
                <FaHamburger />

              </Button>

          </Col>

        </Row>

      </header>

      <Modal opened={opened}>
          
        <MobileNav setOpened={setOpened} opened={opened
        } />

      </Modal>
    
    
    </>
  );
}

export default Navbar;
