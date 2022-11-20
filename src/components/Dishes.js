import React from 'react'
// import { Link } from 'react-router-dom'
import { siteDetails } from '../utils/constant';
import { makeStars } from '../utils/functions'
// import { useGlobalContext } from '../utils/context'

const Dishes = ({data}) => {
    // const {products, setProducts} = useGlobalContext();
    var {price, image, name} = data;
  return (
    <>

        <div className="dish-card">
        
            <div className="dish-image">
            
                <img src={image} alt={name} />

            </div>

            <h2 className="dish-name">{name}</h2>

            <p className='rating'>
            
                {makeStars(5).map((star, index) => {

                    return(
                        <span key={index}>{star}</span>
                    );

                })}

            </p>

            <div className='dish-action align-center'>
            
                <h2>{price.display}</h2>

                <a target="_blank" rel='noreferrer' href={`https://api.whatsapp.com/send?phone=${siteDetails.whatsappNumber}&text=Hello,%20crispy%20cravings.%20I%20want%20to%20order%20for%20${name}`} className="button">Order now</a>
            
            </div>

        </div>
    
    </>
  )
}

export default Dishes
