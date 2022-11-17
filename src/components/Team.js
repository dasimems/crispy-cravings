import React from 'react'

const TeamCard = ({data}) => {
    var {name, image, profession} = data;
  return (
    <>

        <div className='team-card'>

            <div className="team-card-image">

                <img src={image} alt={name} />

            </div>

            <h2>{name}</h2>

            <p>{profession}</p>
        
        </div>
    
    </>
  )
}

export default TeamCard
