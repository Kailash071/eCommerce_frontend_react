import React from "react"
import { NavLink } from "react-router-dom"
import FormatPrice from "./FormatPrice"
function Product(props) {
  // console.log('product',props)
  const { id, title, rating, price,description, category, image } = props
  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card" style={{ width: "200px" }}>
          <div className="text-center mt-1">
            <img
              src={image}
              alt={title}
              height={200}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
            <p className="card-text">iphone</p>
            <p className="card-text"><FormatPrice price={price} /></p>
            </div>
            <div className="d-flex flex-nowrap">
                <p className="card-text text-truncate w-75">{description}</p>
                <p className="card-text ">{rating.rate}<span><i className="bi bi-star-fill"></i> </span></p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  )
}

export default Product
