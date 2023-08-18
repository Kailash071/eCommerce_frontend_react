import {React}from "react"
// import { useProduct } from "../context/ProductContext"
import Product from "./Product"
import { useGetProductsQuery } from "../reducers/productsSlice"
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
// const API = "https://fakestoreapi.com/products";
function Products() {
  const {data:products,isLoading,isSuccess,isError,error} = useGetProductsQuery('getProducts')
  console.log('products',products)
  let content;
 if(isSuccess){
          content = products.ids.map(productId=><Product key={productId} productId={productId}/>)
  }
  if(isError){
    return <ErrorElement message={error} />
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
    <div className="container-fluid mt-3 mb-3">
    <div >
    {/* filter */}
    </div>
      <div className="product row g-3 ">
        {content}
      </div>

    </div>
     </>
    )
    }
    </>
  )
}

export default Products
