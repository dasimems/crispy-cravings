import { Col, Row, Breadcrumb } from "antd"
import React, { useState} from "react"
import { Link } from "react-router-dom";
import { Dishes } from "../components";
import { productCategories, products } from "../utils/constant";
// import { products } from "../utils/constant"

import "../asset/styles/menu.css"
import { BsFillCartCheckFill } from "react-icons/bs";

const Menu = () => {

  
    const [presentCat, setPresentCat] = useState("all");

  

  return (
    <>

      <Row justify="center" className="bread-crumb-container">
        <Col span={22}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Menu</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>


      <Row justify="center" className="menu-pack">
      
        <Col span={22}>
        
            <h2 className="pack-title">Our Regular Menu Pack</h2>

            <Row justify="space-between" className="pack-menus">

                  {[{label: "All", icon: <BsFillCartCheckFill />}, ...productCategories].map((cat, index)=>{

                    var {label} = cat,
                      catClassName = "menu-btn";

                      if(label.toLowerCase() === "see more"){
                        catClassName += " link-btn";
                      }

                      if(presentCat.toLowerCase() === label.toLowerCase()){
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

                {products.map((product, index)=>{

                  return(
                    <Col key={index} span={5} lg={{span: 5}} md={{span: 11}} sm={{span: 11}} xs={{span: 24}} className="dishes-content">
                    
                      <Dishes data={product} />

                    </Col>
                  )

                })}
                  
            </Row>
        
        </Col>
      
      </Row>
    </>
  )
}




export default Menu
