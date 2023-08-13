import React, { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem"
import CartContext from "../context/CartContext"
import { useGetProductsQuery } from "../reducers/productsSlice"
function Cart() {
  const { cart } = useContext(CartContext)
  console.log('cart',cart)
  const { data: products, isSuccess } = useGetProductsQuery('getProducts');
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (isSuccess ) {
      const fetchedProducts = cart.map((productId) => products.entities[productId]);
      setCartProducts(fetchedProducts);
    }
  }, [isSuccess, cart, products, cartProducts.length]);
  const handleItemUpdate = (data) => {
    console.log('cart update')
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === data.id) {
        return { ...product, quantity: parseInt(data.quantity) };
      }
      return product;
    });
    // this created infinte re-rendering issue on cart but now fixed may be code updated in both cart and cartItem with useEffect
    setCartProducts(updatedCartProducts);
  };
  console.log('cartProducts', cartProducts)
  let totalAmount = 0
  return (
    <>
      <div className="container">
        <div className="row p-1 mb-3">
          {cart.length > 0 &&
          <><div className="col col-md-9 ">
              <h2 className="heading">Shopping Cart</h2>
              <div className="products">
                {cartProducts &&
                  cartProducts.map((product) => {
                    return (
                      <CartItem key={product.id} productId={product.id} handleItemUpdate={handleItemUpdate} />
                    )
                  })}
              </div>
              <div className="subTotal float-end">
                {cartProducts &&
                  cartProducts.map((product,index) => {
                    let quantity = 1
                    if (product.quantity) {
                      quantity = parseInt(product.quantity)
                    }
                    totalAmount = parseFloat(parseFloat(totalAmount) + (parseFloat(product.price) * quantity)).toFixed(2)
                    return (
                      <p key={product.id}>
                        Item ({index+1}) : {quantity} (Quantity) x {parseFloat(product.price).toFixed(2)}
                      </p>
                    )
                  })}
                <div className="card-title text-end border rounded"> Subtotal ( {cartProducts.length} Items ) : {totalAmount}</div>
              </div>
            </div><div className="col col-md-3 mt-5 mb-2">
                <div className="card">
                  <div className="card-header">
                    Your order is eligible for FREE Delivery.
                  </div>
                  <div className="card-body">
                    <div className="card-title"> Total ( {cartProducts.length} Items ) : {totalAmount}</div>
                    <p className="card-text"></p>
                    <div className="text-center">
                      <a href="/buy" className="btn btn-primary">
                        Proceed to Buy
                      </a>
                    </div>
                  </div>
                </div>
              </div></>}
              {cart.length<1&&
                <p className="text-center">No items added in cart</p>
              }
        </div>
      </div>
    </>
  )
}

export default Cart
