import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FormatPrice from './FormatPrice';
import {setSingleError,setSingleLoading,setSingleProducts} from '../redux/productRedux';
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux';
const API = "https://fakestoreapi.com/products";
function SingleProduct() {
     const {productId} = useParams()
     console.log('params id',productId)
  const dispatch = useDispatch()
  async function  getProductData(url){
    dispatch(setSingleLoading)
    try {
        let products = await axios.get(url)
        dispatch(setSingleProducts(products.data))
    } catch (error) {
        dispatch(setSingleError)
    }
  }
  useEffect(()=>{
    getProductData(`${API}/${productId}`)
  },[])
  const product = useSelector((state)=>state.indexRedux.productRedux.singleProduct)
  const isSingleLoading = useSelector((state)=>state.indexRedux.productRedux.singleLoading)
  console.log('single product',product)
  return (
    <>
    {isSingleLoading &&  <div>Loading...</div>}
    <div className="card" style={{ width: "200px" }}>
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
        </div>
    </>
  )
}

export default SingleProduct