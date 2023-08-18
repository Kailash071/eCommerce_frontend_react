import { React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import FormatPrice from './FormatPrice';
import { useGetProductsQuery } from '../reducers/productsSlice';
import CartContext from '../context/CartContext';
import AlertContext from '../context/AlertContext';
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
function SingleProduct() {
  const { productId } = useParams()
  const {setCart} = useContext(CartContext)
  const {setAlert} = useContext(AlertContext)
  //  console.log('params id',productId)
  const { product ,isLoading,isError} = useGetProductsQuery('getProducts', {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId]
    })
  })
  console.log('single product', product)
  // if(isLoading){
  //   return(<p>Loading...</p>)
  // }
  if(isError|| !product){
    return <ErrorElement message={`No Product with ID ${productId}`} />
  }

  const handleAddToCart = (e)=>{
    e.preventDefault()
    if(JSON.parse(localStorage.getItem('shopNowCart'))!== null){
      let cartData=JSON.parse(localStorage.getItem("shopNowCart"))
      console.log('cartData',cartData)
      if(!cartData.includes(product.id)){
        cartData.push(product.id)
        setCart(cartData) 
        localStorage.setItem('shopNowCart',JSON.stringify(cartData))
      }else{
        setAlert({show:true,message:'Already in your cart'})
      }
     
    }else{
      let cart = [product.id]
      setCart(cart)  
      localStorage.setItem('shopNowCart',JSON.stringify(cart))
    }
  }
  return (
    <>
     {isLoading ? (
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        visible={true}
      />
    ) : (
      <>
      <div className='container-fluid mt-5 mb-3'>
        <div className='product text-center row'>
          <div className='imagesDiv col'>
            <div className="images row ms-5 me-5">
              <div className="images col">
                <div className='row w-50 g-2'>
                  <img src={product.image} alt={product.title} height={100} className='img object-fit-fill bg-transparent' />
                  <img src={product.image} alt={product.title} height={100} className='img object-fit-fill bg-transparent' />
                  <img src={product.image} alt={product.title} height={100} className='img object-fit-fill bg-transparent' />
                  <img src={product.image} alt={product.title} height={100} className='img object-fit-fill bg-transparent' />
                </div>
              </div>
              <div className="image col text-center m-auto ">
                <img src={product.image} alt={product.title}  className='img-fluid object-fit-fill bg-transparent' />
              </div>
            </div>
          </div>
          <div className='productDetailsDiv col text-start'>
            <div className='fw-bold fs-4 mb-2'>
              {product.title}
            </div>
            <div className='fw-lighter mb-2'>
              {product.description}
            </div>
            <div className='mb-1'>
              Category: {product.categoryName}
            </div>
            <div className='mb-1'>
              Rating : {product.rating}<span><i className="bi bi-star-fill ms-1"></i> </span>
            </div>
            <div className='mb-1'>
             Available : In Stock
            </div>
            <div className='fw-bold fs-5 mb-1'>
              Price : <FormatPrice price={product.price} />
            </div>
            <div className='d-flex align-items-start gap-3'>
              <button className='btn btn-primary'>Buy Now</button>
              <button className='btn btn-secondary' onClick={handleAddToCart}>Add To Chart</button>
            </div>
            <div className='d-flex gap-2 mt-3'>
              <div className='text-center d-flex flex-column'>
                <i className="bi bi-truck"></i>
                <span className='fw-lighter'>Free Delivery</span>
              </div>
              <div className='text-center d-flex flex-column' >
                  <i className="bi bi-currency-rupee"></i>
                <span  className='fw-lighter'>Pay On Delivery</span>
              </div>
              <div className='text-center d-flex flex-column'>
                <i className="bi bi-shield-check"></i>
                <span  className='fw-lighter'>1 Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </>
  )
}

export default SingleProduct