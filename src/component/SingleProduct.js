import { React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import FormatPrice from './FormatPrice';
import { useGetProductsQuery } from '../reducers/productsSlice';
import ChartContext from '../context/chartContext';
import AlertContext from '../context/AlertContext';

function SingleProduct() {
  const { productId } = useParams()
  const {setChart} = useContext(ChartContext)
  const {setAlert} = useContext(AlertContext)
  //  console.log('params id',productId)
  const { product } = useGetProductsQuery('getProducts', {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
      // isLoading
    })
  })
  console.log('single product', product)
  // if(isLoading){
  //   return(<p>Loading...</p>)
  // }
  if (!product) {
    return (<p>{`No Product with ID ${productId}`}</p>);
  }

  const handleAddToChart = (e)=>{
    e.preventDefault()
    if(JSON.parse(localStorage.getItem('shopNowChart'))!== null){
      let chartData=JSON.parse(localStorage.getItem("shopNowChart"))
      console.log('chartData',chartData)
      if(!chartData.includes(product.id)){
        chartData.push(product.id)
        setChart(chartData) 
        localStorage.setItem('shopNowChart',JSON.stringify(chartData))
      }else{
        setAlert({show:true,message:'Already in your chart'})
      }
     
    }else{
      let chart = [product.id]
      setChart(chart)  
      localStorage.setItem('shopNowChart',JSON.stringify(chart))
    }
  }
  return (
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
              <button className='btn btn-secondary' onClick={handleAddToChart}>Add To Chart</button>
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
  )
}

export default SingleProduct