import React, { useRef, useEffect } from "react"
//  import SwiperItem from './SwiperItem'

//  function Swiper() {
//    return (
//       <div className="swiper" >
//   <div className="swiper-wrapper" loop="true" css-mode="true" navigation="true" pagination="true">
//      <SwiperItem src={image1} height={400}/>
//      <SwiperItem src={image2} height={400}/>
//      <SwiperItem src={image3} height={400}/>
//   </div>
//   <div className="swiper-pagination"></div>
//   <div className="swiper-button-prev"></div>
//   <div className="swiper-button-next"></div>
//   </div>
// //  <swiper-container slides-per-view="1" loop="true" css-mode="true" navigation="true" pagination="true">
// //    <swiper-slide><img src={image1} alt="" height="400px"/></swiper-slide>
// //    <swiper-slide><img src={image2} alt="" height="400px"/></swiper-slide>
// //    <swiper-slide><img src={image3} alt="" height="400px"/></swiper-slide>
// //  </swiper-container>

//    )
//  }

//  export default Swiper

const Swiper = (props) => {
  const swiperElRef = useRef(null)

  // useEffect(() => {
  //   //listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);

  const swiperImages = props.swiperImages;
  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={props.slidePerView}
      navigation={props.navigation}
      pagination={props.pagination}
      speed={props.speed}
      loop={props.speed}
    >
     {swiperImages&& swiperImages.map((slide)=>{
        return(  <swiper-slide>
           <img src={slide.src} alt={slide.alt} height={props.slideHeight} width={props.slideWidth} />
         </swiper-slide>
        )
      })}
      {/* <swiper-slide>
        <img src={props.swiperImages[0].src} alt="" height="400px" width="100%" />
      </swiper-slide>
      <swiper-slide>
        <img src={props.swiperImages[1].src} alt="" height="400px" width="100%" />
      </swiper-slide>
      <swiper-slide>
        <img src={props.swiperImages[2].src} alt="" height="400px" width="100%" />
      </swiper-slide> */}
    </swiper-container>
  )
}
export default Swiper
