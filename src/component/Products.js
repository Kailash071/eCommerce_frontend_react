import {React}from "react"
// import { useProduct } from "../context/ProductContext"
import Product from "./Product"
import { useGetProductsQuery } from "../reducers/productsSlice"
// const API = "https://fakestoreapi.com/products";
function Products() {
  const {data:products,isLoading,isSuccess,isError,error} = useGetProductsQuery('getProducts')
  // console.log('products',products)
  let content;
  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(isSuccess){
          content = products.ids.map(productId=><Product key={productId} productId={productId}/>)
  }
  else if(isError){
    content = <p>{error}</p>
  }
  return (
    <>
    <div className="container-fluid">
    <div >
    {/* filter */}
    </div>
      <div className="product d-flex justify-content-center align-items-center   flex-wrap gap-2 ">
        {content}
      </div>

    </div>
    </>
  )
}

export default Products
