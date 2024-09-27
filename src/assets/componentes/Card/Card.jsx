import React from 'react'
import "./Card.css"

const Card = ({lang,img,scolor,fcolor}) => {
  return (

    <div className='container' style={{
        background:"linear-gradient(to left ${fcolor},${scolor})"
    }}>
      <h1>Este es mi segundo proyecto</h1> 
      <img src={img} alt="Zoro" />
      <h2>{lang}</h2>
    </div>

  )
}

export default Card
