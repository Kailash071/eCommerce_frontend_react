import React, { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem"
import CartContext from "../context/CartContext"
import { useGetProductsQuery } from "../reducers/productsSlice"
import { useUserTokenSelector } from "../reducers/userReducer"
import { useSelector } from "react-redux"
import AlertContext from "../context/AlertContext"
import { useNavigate } from "react-router-dom"
function Cart() {
  const userToken = useSelector(useUserTokenSelector)
  const { setAlert } = useContext(AlertContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate();
  console.log('cart', cart)
  const { data: products, isSuccess } = useGetProductsQuery('getProducts');
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (isSuccess && cart.length > 0) {
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
  useEffect(() => {
    let newTotalAmount = 0;
    cartProducts.forEach(product => {
      const quantity = parseInt(product.quantity) || 1;
      newTotalAmount += parseFloat(product.price) * quantity;
    });
    setTotalAmount(newTotalAmount);
  }, [cartProducts]);
  const handleCartBuyButton = (e) => {
    e.preventDefault()
    if (!userToken) {
      setAlert({ show: true, message: 'Before proceed to buy, login please' })
      navigate('/login')
    } else {
      let bodyData = {
        userToken: userToken,
        totalPrice: totalAmount,
        items: cartProducts,
      }
      console.log('data to submit on buy', bodyData)
    }
  }
  return (
    <div className="container">
      <div className="row p-1 mb-3">
        {cart.length > 0 ? (
          <>
            <div className="col col-md-9 ">
              <h2 className="heading">Shopping Cart</h2>
              <div className="products">
                {cartProducts.map(product => (
                  <CartItem key={product.id} productId={product.id} handleItemUpdate={handleItemUpdate} />
                ))}
              </div>
              <div className="subTotal float-end">
                {cartProducts.map((product, index) => {
                  const quantity = parseInt(product.quantity) || 1;
                  return (
                    <p key={product.id}>
                      Item ({index + 1}) : {quantity} (Quantity) x {parseFloat(product.price).toFixed(2)}
                    </p>
                  );
                })}
                <div className="card-title text-end border rounded p-2"> Subtotal ( {cartProducts.length} Items ) : {totalAmount.toFixed(2)}</div>
              </div>
            </div>
            <div className="col col-md-3 mt-5 mb-2">
              <div className="card">
                <div className="card-header">
                  Your order is eligible for FREE Delivery.
                </div>
                <div className="card-body">
                  <div className="card-title"> Total ( {cartProducts.length} Items ) : {totalAmount.toFixed(2)}</div>
                  <p className="card-text"></p>
                  <div className="text-center">
                    <button onClick={handleCartBuyButton} className="btn btn-primary">
                      Proceed to Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">No items added in cart</p>
        )}
      </div>
    </div>
  );
}

export default Cart