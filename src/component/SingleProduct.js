import {React} from 'react'
import { useParams } from 'react-router-dom'
import FormatPrice from './FormatPrice';
import { useGetProductsQuery } from '../reducers/productsSlice';

function SingleProduct() {
     const {productId} = useParams()
    //  console.log('params id',productId)
     const {product,isLoading} = useGetProductsQuery('getProducts',{
      selectFromResult:({data})=>({
        product:data?.entities[productId],
        // isLoading
      })
    }) 
  console.log('single product',product)
  // if(isLoading){
  //   return(<p>Loading...</p>)
  // }
  if(!product){
    return (<p>{`No Product with ID ${productId}`}</p>);
  }
  return (
    <>
    {product &&     <div className="card" style={{ width: "200px" }}>
          <div className="text-center mt-1">
            <img
              src={product.image}
              alt={product.title}
              height={200}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
            <p className="card-text">iphone</p>
            <p className="card-text"><FormatPrice price={product.price} /></p>
            </div>
            <div className="d-flex flex-nowrap">
                <p className="card-text text-truncate w-75">{product.description}</p>
                <p className="card-text ">{product.rating.rate}<span><i className="bi bi-star-fill"></i> </span></p>
            </div>
          </div>
        </div>}
    </>
  )
}

export default SingleProduct