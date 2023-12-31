import React, { useContext, useEffect, useState } from 'react';
import { useGetProductsQuery } from '../reducers/productsSlice';
import FormatPrice from './FormatPrice';
import CartContext from '../context/CartContext';
import ErrorElement from "./ErrorElement"
import AlertContext from '../context/AlertContext';
function CartItem({ productId, handleItemUpdate }) {
  const { setAlert } = useContext(AlertContext)
  const { cart, setCart } = useContext(CartContext);
  const { product,isError } = useGetProductsQuery('getProducts', {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
    }),
  });
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if(newQuantity>product.inStock){
      setAlert({show:true,message:"can't add more than in stock available"})
    }
    if (newQuantity >= 1&& newQuantity<=product.inStock) {
      setQuantity(newQuantity);
    }
  };

  const handleCartItemDelete = () => {
    const updatedCart = cart.filter(item => item !== productId);
    localStorage.setItem('shopNowCart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  useEffect(() => {
    handleItemUpdate({
      id: product.id,
      price: product.price,
      quantity: quantity,
    });
  }, [quantity]);
   if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
  return (
    <div className="product d-flex justify-content-center card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center mt-1">
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
            <p className="availability">In stock: {product?.inStock}</p>
            <p className="delivery">Free Delivery</p>
            <p className="rating">Rating: 5</p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="">
                <span>Price : </span> <FormatPrice price={product.price} />
              </div>
              <div className="">
                <span>Quantity : </span>
                <span
                  className="p-2 rounded"
                  role="button"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  <i className="bi bi-dash-circle"></i>
                </span>
                <label>{quantity}</label>
                <span
                  className="p-2 rounded"
                  role="button"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <i className="bi bi-plus-circle"></i>
                </span>
              </div>
            </div>
            <button
              className="delete col btn btn-sm btn-outline-danger"
              onClick={handleCartItemDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;