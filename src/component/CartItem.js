import React from 'react'
import { useGetProductsQuery } from '../reducers/productsSlice'

function CartItem({productId}) {
  const { product } = useGetProductsQuery('getProducts', {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
    })
  })
  return (
    <div className="product d-flex justify-content-center card mb-3">
    <div className="row g-0">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <img
          src={product.image}
          className="img-fluid rounded-start"
          alt={product.title}
          height={100}
          width={100}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title name">{product.title}</h5>
          <p className="card-text description text-truncate">
           {product.description}
          </p>
          <p className="card-text availability">In stock</p>
          <p className="card-text delivery text-body-secondary">
            Free Delivery
          </p>
          <p className="card-text rating">Rating: 5</p>
          <div className="d-flex gap-3 justify-content-start align-items-center">
            <p className="card-text price">Price : {product.price}</p>
            <p className="card-text delete">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem