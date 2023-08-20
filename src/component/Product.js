import React from "react"
import { NavLink } from "react-router-dom"
import FormatPrice from "./FormatPrice"
import { useGetProductsQuery } from "../reducers/productsSlice"
import ErrorElement from "./ErrorElement"
function Product({productId}) {
  // console.log('productId',productId)
  const {product,isError} = useGetProductsQuery('getProducts',{
    selectFromResult:({data})=>({
      product:data?.entities[productId]
    })
  }) 
  if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
  return (
    <>
         <div className="col-6 col-lg-2 col-md-2 col-sm-3 " >
      <NavLink to={`/products/${product?.id}`}>
        <div className="card" >
          <div className="text-center mt-1">
            <img
              src={product?.image}
              alt={product?.title}
              height={200}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
            <p className="card-text text-truncate">{product?.title}</p>
            <p className="card-text"><FormatPrice price={product?.price} /></p>
            </div>
            <div className="d-flex flex-nowrap">
                <p className="card-text text-truncate w-75">{product?.description}</p>
                <p className="card-text ">{product?.rating}<span><i className="bi bi-star-fill"></i> </span></p>
            </div>
          </div>
        </div>
      </NavLink>
      </div>
    </>
  )
}

export default Product
