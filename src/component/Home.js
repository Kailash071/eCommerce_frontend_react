import React from "react"
import Swiper from "./Swiper"
import image1 from "../assets/home/image1.jpg"
import image2 from "../assets/home/image2.jpg"
import image3 from "../assets/home/image3.jpg"
import { useGetProductsQuery } from "../reducers/productsSlice"
import Product from "./Product"
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
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
  const {data:products,isLoading,isSuccess,isError} = useGetProductsQuery('getProducts')
  console.log('products',products)
  let content;
  if(isSuccess){
        content = []
          for (const product in products.entities) {
            if (products?.entities.hasOwnProperty.call(products?.entities, product)) {
              if(products?.entities[product].featured){
                content.push(<Product key={product} productId={product}/>)
              }
            }
          }
  }
  else if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
  return (
    <>
      {isLoading ? (
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        visible={true}
      />
    ) : (
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
    </>
  )
}

export default Home
