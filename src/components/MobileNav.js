import { Button } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {MdOutlineClose} from "react-icons/md"
import { Link, useLocation } from 'react-router-dom'
import { links } from '../utils/constant'

const MobileNav = ({opened, setOpened}) => {
    const [style, setStyle] = useState("-350px")

    useEffect(()=>{
        if(opened){

            setTimeout(()=>{

                setStyle("0px")
            }, 100)
        }else{
            setStyle("-350px")

        }
    }, [opened])
    const location = useLocation()

  return (
    <>

        <div className='mobile-nav-links' style={{
            width: "100%",
            height: "100%",
            maxWidth: "350px",
            background: "white",
            position: "absolute",
            right: style,
            transition: "0.5s ease all"
        }}>
        
            <Button className="close-mobile-nav" onClick={()=>{
                setOpened(false);
            }}>
                <MdOutlineClose />
            </Button>

            <ul className='mobile-links'>
            
                {links.map((link, index)=>{

                    var linkClassName= 'link';
                    var {url, text} = link;

                    if(location.pathname === url){
                        linkClassName += " active-link"

                    }

                    return(
                        <li key={index} className={linkClassName}>
                        
                            <Link to={url}>{text}</Link>

                        </li>
                    )
                })}

            </ul>

        </div>
    
    </>
  )
}

export default MobileNav
