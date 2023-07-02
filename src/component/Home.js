import React from "react"
import Swiper from "./Swiper"
import Cards from "./Cards"
import image1 from "../assets/home/image1.jpg"
import image2 from "../assets/home/image2.jpg"
import image3 from "../assets/home/image3.jpg"
function Home() {
  let swiperImages = [
    {
      src:image1,
      alt:""
    },
    {
      src:image2,
      alt:""
    },
    {
      src:image3,
      alt:""
    }
  ]
  let cardsImages= [
    {
      src:require('../assets/home/card1.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },   {
      src:require('../assets/home/card2.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card3.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card4.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card5.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card6.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card1.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card2.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    },
    {
      src:require('../assets/home/card4.jpg'),
      alt:'',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe fugit alias? Consequatur esse architecto minima, aperiam aut voluptate",
      title:'Deal of the day'
    }
  ]
  
  return (
    <>
      <Swiper slidePerView={1} navigation={true} pagination={true} loop={true} speed={500} swiperImages={swiperImages} slideHeight="400px" slideWidth="100%" />
      <Cards cardsImages={cardsImages} />
    </>
  )
}

export default Home
