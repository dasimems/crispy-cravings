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
import { Player } from "@lottiefiles/react-lottie-player";
import Loader from "../asset/images/loader.json"
import SomethingWentWrong from "../asset/images/something_went_wrong.json"
import { useGlobalContext } from "../utils/context";

function Navbar(props) {

  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const {productLoaded} = useGlobalContext();

  useEffect(()=>{

    setOpened(false)

    window.scrollTo({
      top:0,
      left: 0
    })

  }, [navigate])

  useEffect(()=>{

    setTimeout(()=>{

      if(productLoaded.loaded && productLoaded.message === "success"){
        setLoading(false)
      }
    }, 1000)


  }, [productLoaded])

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

      <Modal opened={loading}>

        <div className="loader" style={{background: "white"}}>

          
          {productLoaded.message === "failed"? (
            
          <Player
            autoplay
            loop
            src={SomethingWentWrong}
            className="error-animation"


          />
          ): (
            <Player
            autoplay
            loop
            src={Loader}
            className="loading-animation"

          />
          )}

        </div>

      </Modal>
    
    
    </>
  );
}

export default Navbar;
