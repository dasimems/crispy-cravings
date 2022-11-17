import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const ImageAnimation = ({children}) => {
    const imageFadeCont = useRef("");
    const [tags, setTags] = useState([]);
    const [activeTag, setactiveTag] = useState("");

    useEffect(() => {
        
        var elements = [...imageFadeCont.current.children],
            tags = [],
            activeNum = 1;

        elements.forEach((ele, index) => {

            ele.classList.add("anim-content")

            if(index === 0){

                ele.classList.add("active");
            }

            var data={
                    icon: ele.hasAttribute("data-image")? ele.getAttribute("data-image"): "",
                    label: ele.hasAttribute("data-label")? ele.getAttribute("data-label"): ""
                }

            tags.push(data);
        })

        setTags(tags)


        setInterval(()=>{
            
            elements.forEach((ele) => {

                if(ele.classList.contains("active")){
                    
                    ele.classList.remove("active");
                }
            })

            elements[activeNum].classList.add("active");
            setactiveTag(activeNum);

            if(activeNum < (elements.length - 1)){
                activeNum++

            }else{
                activeNum = 0;
            }

        }, 5000)
    
    }, [])

    // console.log(tags)

  return (

    <div className="animation-content">
    
        <div ref={imageFadeCont} className='image-fader'>

            {children}
        
        </div>

        <div className="animation-tags">

            {tags.map((data, index)=>{

                var {icon, label} = data,
                    tagClassName = "tag";

                    if(index === activeTag){
                        tagClassName += " active";
                    }

                return(
                    <div className={tagClassName} key={index}>

                    {(icon !== "" || label !== "") && (
                        
                        <>

                            <div className="tag-image">

                                {icon !== "" && <img src={icon} alt={label}/>}

                            </div>

                            {label !== "" && <div className="tag-text">{label}</div>}


                        </>
                    )}
                        
                            
                    </div>
                )
            })}

        </div>
    
    </div>
  )
}

export default ImageAnimation
