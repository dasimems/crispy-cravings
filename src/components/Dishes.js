import React from 'react'
import { Link } from 'react-router-dom'
import { makeStars } from '../utils/functions'

const Dishes = ({data}) => {

    var {price, image, title} = data;

  return (
    <>

        <div className="dish-card">
        
            <div className="dish-image">
            
                <img src={image} alt={title} />

            </div>

            <h2 className="dish-name">{title}</h2>

            <p className='rating'>
            
                {makeStars(5).map((star, index) => {

                    return(
                        <span key={index}>{star}</span>
                    );

                })}

            </p>
            <p className='description'>Pasta is a type of food typically made from an unleavened dough</p>

            <div className='dish-action align-center'>
            
                <h2>&#8358;{price.toLocaleString()}</h2>

                <Link className="button">Order now</Link>
            
            </div>

        </div>
    
    </>
  )
}

export default Dishes
