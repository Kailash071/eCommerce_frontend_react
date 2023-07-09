import React from 'react'

function CartItem() {
  return (
    <div className="product d-flex justify-content-center card mb-3">
    <div className="row g-0">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <img
          src={require("../assets/home/card5.jpg")}
          className="img-fluid rounded-start"
          alt="iphone"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title name">iphone</h5>
          <p className="card-text description">
            This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a
            little bit longer.
          </p>
          <p className="card-text availability">In stock</p>
          <p className="card-text delivery text-body-secondary">
            Free Delivery
          </p>
          <p className="card-text rating">Rating: 5</p>
          <div className="d-flex gap-3 justify-content-start align-items-center">
            <p className="card-text price">Price : 6000</p>
            <p className="card-textquantity">Quantity : 1</p>
            <p className="card-text delete">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem