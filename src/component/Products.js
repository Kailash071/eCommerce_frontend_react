import {React,useEffect}from "react"
// import { useProduct } from "../context/ProductContext"
import Product from "./Product"
import { useSelector} from "react-redux"
import {setProducts,setProductLoading,setProductError} from "../redux/productRedux"
import axios from "axios"
const API = "https://fakestoreapi.com/products";
function Products() {
  // const dispatch = useDispatch()
  // async function  getProductData(url){
  //   dispatch(setProductLoading)
  //   try {
  //       let products = await axios.get(url)
  //       dispatch(setProducts(products.data))
  //   } catch (error) {
  //       dispatch(setProductError)
  //   }
  // }
  // useEffect(()=>{
  //   getProductData(API)
  // },[])
  const products = useSelector((state)=>state.indexRedux.productRedux.products)
  const isLoading = useSelector((state)=>state.indexRedux.productRedux.isLoading)
  console.log('product redux',products)
  return (
    <>
      {isLoading && <div>Loading...</div>}
    <div className="container-fluid">
    <div >
    {/* filter */}
    </div>
      <div className="product d-flex justify-content-center align-items-center   flex-wrap gap-2 ">
        {products &&
          products.map((product) => { return <Product key={product.id} {...product} /> })}
      </div>

    </div>
    </>
  )
}

export default Products
