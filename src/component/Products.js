import React from "react"
import { useProduct } from "../context/ProductContext"
import Product from "./Product"
function Products() {
  const { isLoading, products } = useProduct()
  console.log("products", products)
  return (
    <>
      {isLoading && <div>Loading...</div>}
    <div className="container-fluid">
    <div >
    {/* filter */}
    </div>
      <div className="product row g-2">
        {products &&
          products.map((product) => { return <Product key={product.id} {...product} /> })}
      </div>

    </div>
    </>
  )
}

export default Products
