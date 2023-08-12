import React, { useContext, useEffect, useState } from 'react'
import { useGetProductsQuery } from '../reducers/productsSlice'
import FormatPrice from './FormatPrice'
import CartContext from '../context/CartContext'

function CartItem({productId,handleItemUpdate}) {
  const {cart,setCart} = useContext(CartContext)
  const { product } = useGetProductsQuery('getProducts', {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
    })
  })
  const [quantity, setQuantity] = useState(1);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusQuanity = () => {
    setQuantity(quantity + 1);
  };

  const handleCartItemDelete = () => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    handleItemUpdate({
      id: product.id,
      price: product.price,
      quantity: quantity,
    });
  }, [quantity]);
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
          <div className="row align-items-center border mb-2">
            <p className="col align-self-center"><span>Price : </span> <FormatPrice price={product.price} /></p>
            <div className='col align-self-center'>
            <span>Quantity : </span>
            <span className='btn rounded' onClick={handleMinusQuantity}><i className='bi bi-dash-circle-fill'></i></span>
              <label >{quantity}</label>
            <span className='btn rounded' onClick={handlePlusQuanity}><i className='bi bi-plus-circle-fill'></i></span>
            </div>
          </div>
          <button className="delete col btn btn-outline-danger" onClick={handleCartItemDelete}>Delete</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem