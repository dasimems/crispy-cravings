import React from 'react'

const CustomerReview = ({data}) => {

    var {name, image, review} = data;

  return (
    <>

        <div className='customer-review-card'>
        
            <p><q>

                {review}
            
            </q></p>

            <div className="review-details">
            
                <div className='review-image'>
                
                    <img src={image} alt={name} />

                </div>

                <h2 className='review-name'>{name}</h2>

            </div>
        
        </div>
    
    </>
  )
}

export default CustomerReview
