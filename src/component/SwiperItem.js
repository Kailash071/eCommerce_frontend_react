import React from 'react'

function SwiperItem(props) {
    // console.log('props.src',props.src)
  return (
    <div className="swiper-slide"  data-swiper-autoplay="2000">
        <img src={props.src} alt="" height={props.height} width="100%"/>
    </div>
  )
}

export default SwiperItem