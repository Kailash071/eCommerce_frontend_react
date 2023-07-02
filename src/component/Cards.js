import React from 'react'
import CardItem from './CardItem'

function Cards(props) {
  return (
    // <div className='p-2 mx-4  d-flex  flex-wrap justify-content-start align-items-start'>
    <div className='row row-cols-1 row-cols-md-4 g-4 p-2 mx-4'>
     {props.cardsImages&& props.cardsImages.map((card)=>{
      return(
         <div className='col'>
         <CardItem src={card.src} alt={card.alt} title={card.title}  description={card.description} width="200px" height="200px" />
      </div>)
     })}
    </div>
  )
}

export default Cards