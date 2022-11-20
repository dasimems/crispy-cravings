import { Col, Row, Breadcrumb} from "antd"
import React, { useState} from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Dishes } from "../components";

import "../asset/styles/menu.css"
import { BsFillCartCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import { useGlobalContext } from "../utils/context";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Menu = () => {

  
    const [presentCat, setPresentCat] = useState("all");
    const [presentProduct, setProductList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageDetails, setPageDetails] = useState({
      pageNum: "1",
      totalButtonCount: 0,

    });
    const navigate = useNavigate()

    const {products, productCategories} = useGlobalContext()

    var buttonElements = [];

    for(var i = 0; i < pageDetails.totalButtonCount; i++){

      var buttonClassName="button product-nav-btn",
          num = i + 1;

        if(num === parseInt(pageDetails.pageNum)){
          buttonClassName += " active-btn";
        }

      if(parseInt(pageDetails.totalButtonCount) > 5){

        if(num === 1 || num === pageDetails.totalButtonCount || (num > (parseInt(pageDetails.pageNum) - 2) && num <pageDetails.pageNum) || ((num > pageDetails.pageNum) && num < (parseInt(pageDetails.pageNum) + 2)) || num === parseInt(pageDetails.pageNum)){

          buttonElements.push(
            <Link className={buttonClassName} key={num} to={`/menu?cat=${presentCat}&page=${num}`}>{num}</Link>
          )

        }

      }else{

        buttonElements.push(
          <Link className={buttonClassName} key={num} to={`/menu?cat=${presentCat}&page=${num}`}>{num}</Link>
        )

      }


    }

    useEffect(()=>{
      window.scrollTo({
        top: 0,
        left: 0
      })
    }, [navigate, searchParams])

    useEffect(()=>{

      var pageNum = "1",
          startNum = 0,
          endNum = 12,
          neededProdNum = 12,
          totalButtonCount = 0,
          newProd = products;

      if(searchParams.has("cat") && searchParams.get("cat").toLowerCase() !== "all"  && searchParams.get("cat").toLowerCase() !== ""){
        newProd = products.filter(prod => prod.category.name.toString().toLowerCase() === searchParams.get("cat").toLowerCase());
        
        setPresentCat(searchParams.get("cat"));

      }else{
        
        setPresentCat("all");

      }

      
      totalButtonCount = Math.floor(newProd.length / neededProdNum)

      if(searchParams.has("page") && searchParams.get("page") !== ""){
        pageNum = searchParams.get("page");
      }
      
      if(parseInt(pageNum) > parseInt(totalButtonCount)){
        if(totalButtonCount > 0){

          pageNum = totalButtonCount

        }else{
          pageNum = 1;
        }

      }

      if(parseInt(pageNum) > 1){

        startNum = (((parseInt(pageNum) - 1) * neededProdNum))
        
      }

      endNum = (neededProdNum * (pageNum))

      setProductList(newProd.slice(startNum, endNum))

      setPageDetails(prevState => {
        return({
          ...prevState,
          totalButtonCount,
          pageNum
        })
      })

    }, [searchParams, products])


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
                          setSearchParams({
                            cat: label.toString().toLowerCase(),
                            page: 1
                          });
                        }
                      }}>

                        {label.toLowerCase() !=="see more"? <p>{label}</p>: <Link to="/menu">{label}</Link>}

                      </Col>
                      
                    )

                  })}
                  
            </Row>

            <Row className="dishes-container">

                {presentProduct.map((product, index)=>{

                  return(
                    <Col key={index} span={5} lg={{span: 5}} md={{span: 11}} sm={{span: 11}} xs={{span: 24}} className="dishes-content">
                    
                      <Dishes data={product} />

                    </Col>
                  )

                })}
                  
            </Row>

            <Row justify="center" className="menu-nav-buttons">

                {parseInt(pageDetails.pageNum) > 1 && <Link className="button product-nav-btn next-prev-btn" to={`/menu?cat=${presentCat}&page=${parseInt(pageDetails.pageNum) > 1 ?(pageDetails.pageNum - 1): "1"}`}><FaAngleDoubleLeft /></Link>}

                {buttonElements}

                {parseInt(pageDetails.pageNum) < parseInt(pageDetails.totalButtonCount) && <Link className="button product-nav-btn next-prev-btn" to={`/menu?cat=${presentCat}&page=${parseInt(pageDetails.pageNum) < parseInt(pageDetails.totalButtonCount) ?(parseInt(pageDetails.pageNum) + 1): pageDetails.totalButtonCount}`}><FaAngleDoubleRight /></Link>}

            </Row>
        
        </Col>
      
      </Row>


    </>
  )
}




export default Menu
