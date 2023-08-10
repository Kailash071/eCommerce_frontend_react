import React, { useContext} from "react"
import CartItem from "./CartItem"
import CartContext from "../context/CartContext"
import { useGetProductsQuery } from "../reducers/productsSlice"
function Cart() {
  const {cart} = useContext(CartContext)
  const {data:products,isLoading,isSuccess,isError,error} = useGetProductsQuery('getProducts')
  console.log('products',products)
  let cartProducts = []
  let totalAmount = 0
  if(isSuccess){
    cartProducts =  cart.map((productId)=>{
      return products.entities[productId]
    })
    totalAmount = cartProducts.reduce((sum,obj)=>{
      return sum + parseFloat(obj.price)
    },0)
  }
  
  console.log('cart data in cart',cart)
  console.log('products in cart',cartProducts)
  return (
    <>
      <div className="container">
        <div className="row p-1">
          <div className="col col-md-9 ">
            <h2 className="heading">Shopping Cart</h2>
            <div className="products">
             {cartProducts &&
             cartProducts.map((product)=>{
              return(
                <CartItem key={product.id} productId={product.id} />
              )
             })
             }
            </div>
            <div className="subTotal float-end border-top">
              Subtotal (  {cartProducts.length} Items ) : {totalAmount}
            </div>
          </div>
          <div className="col col-md-3 mt-5 mb-2">
            <div className="card">
              <div className="card-header">
                Your order is eligible for FREE Delivery.
              </div>
              <div className="card-body">
                <div className="card-title"> Subtotal ( {cartProducts.length} Items ) : {totalAmount}</div>
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
