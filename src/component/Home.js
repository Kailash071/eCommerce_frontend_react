import React from "react"
import Swiper from "./Swiper"
import image1 from "../assets/home/image1.jpg"
import image2 from "../assets/home/image2.jpg"
import image3 from "../assets/home/image3.jpg"
import { useGetProductsQuery } from "../reducers/productsSlice"
import Product from "./Product"
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
  const {data:products,isLoading,isSuccess,isError,error} = useGetProductsQuery('getProducts')
  console.log('products',products)
  let content;
  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(isSuccess){
        content = []
          for (const product in products.entities) {
            if (products.entities.hasOwnProperty.call(products.entities, product)) {
              if(products.entities[product].featured){
                content.push(<Product key={product} productId={product}/>)
              }
            }
          }
  }
  else if(isError){
    content = <p>{error}</p>
  }
  return (
    <>
      <Swiper slidePerView={1} navigation={true} pagination={true} loop={true} speed={500} swiperImages={swiperImages} slideHeight="400px" slideWidth="100%" />
     <div className="container-fluid mt-3 mb-3">
      <h5>Featured product</h5>
      <div className="product row g-3  ">
        {content}
      </div>
     </div>
    </>
  )
}

export default Home
