import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Modal = ({children, opened}) => {


    const [style, setStyle] = useState({
            width: "100%",
            height: "100%",
            position: "fixed",
            display: "none",
            opacity: 0,
            background: "rgba(0, 0, 0, .5)",
            zIndex: "9999",
            transition: "0.5s ease all"
        })

    useEffect(()=> {

        if(opened){
            setStyle(prevState => {
                return({
                    ...prevState,
                    display: "block"
                })
            })

            setTimeout(()=>{
    
                setStyle(prevState => {
                    return({
                        ...prevState,
                        opacity: 1
                    })
                })
    
            }, 100)

        }else{

            setTimeout(()=>{

                setStyle(prevState => {
                    return({
                        ...prevState,
                        opacity: 0
                    })
                })
            }, 300)


            setTimeout(()=>{
    
                setStyle(prevState => {
                    return({
                        ...prevState,
                        display: "none"
                    })
                })
    
            }, 1000)

        }


    }, [opened])

  return (
    <>
 
        <div className='modal-container' style={style} >
        
            {children}

        </div>
    
    </>
  )
}

export default Modal
