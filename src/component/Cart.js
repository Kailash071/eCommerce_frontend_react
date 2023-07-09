import React from "react"
import CartItem from "./CartItem"

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row p-1">
          <div className="col col-md-9 ">
            <h2 className="heading">Shopping Cart</h2>
            <div className="products">
              <CartItem />
              <CartItem />
            </div>
            <div className="subTotal float-end border-top">
              Subtotal ( 2 Items ) : 10000
            </div>
          </div>
          <div className="col col-md-3 mt-5 mb-2">
            <div className="card">
              <div className="card-header">
                Your order is eligible for FREE Delivery.
              </div>
              <div className="card-body">
                <div className="card-title"> Subtotal ( 2 Items ) : 10000</div>
                <p className="card-text"></p>
                <div className="text-center">
                  <a href="/buy" className="btn btn-primary">
                    Proceed to Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
