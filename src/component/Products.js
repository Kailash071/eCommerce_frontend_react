import {React}from "react"
// import { useProduct } from "../context/ProductContext"
import Product from "./Product"
import { useGetProductsQuery } from "../reducers/productsSlice"
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
import { selectAllCategorys} from "../reducers/categorySlice"
import { useSelector } from "react-redux"
import { useState } from "react"
// const API = "https://fakestoreapi.com/products";
function Products() {
  const {data:products,isLoading,isSuccess,isError,error} = useGetProductsQuery('getProducts')
  // console.log('products',products)
  const categorys = useSelector(selectAllCategorys)
  const [selectedCategory, setSelectedCategory] = useState('Filter By Category');
    const [selectedPriceRange, setSelectedPriceRange] = useState('Filter By Price Range');
  let content;
 if(isSuccess){
          content = products?.ids.map(productId=><Product key={productId} productId={productId}/>)
  }
  if(isError){
    return <ErrorElement message={error} />
  }
  const handleResetFilter = (e)=>{
    e.preventDefault()
    setSelectedCategory('Filter By Category');
    setSelectedPriceRange('Filter By Price Range');
  }
  const handleApplyFilter = (e)=>{
    e.preventDefault()
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Price Range:', selectedPriceRange);
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
    <div className="container-fluid mt-3 mb-3">
    <div >
    {/* filter */}
                <div className="filter d-flex  justify-content-end align-items-center mb-3  flex-wrap gap-4">
                  <div className="d-flex gap-2 flex-wrap  justify-content-end align-items-center">
                    <select 
                      className="form-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{ width: "max-content" }}
                      aria-label="Default select example">
                      <option >Filter By Category</option>
                      {categorys && (<>
                        {
                          categorys.map(category => {
                            return <option key={category._id} value={category._id}>{category.name}</option>
                          })
                        }
                      </>)}
                    </select>
                    <select 
                      className="form-select" 
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      style={{ width: "max-content" }} 
                      aria-label="Default select example"
                    >
                      <option >Filter By Price Range</option>
                      <option value="500">Under  &#x20b9;500</option>
                      <option value="500-1000"> &#x20b9;500 -  &#x20b9; 1000</option>
                      <option value="1000-2000"> &#x20b9;1000 -  &#x20b9;2000</option>
                      <option value="2000">Above  &#x20b9;2000</option>
                    </select>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary" onClick={handleApplyFilter}>Apply</button>
                    <button className="btn btn-outline-secondary" onClick={handleResetFilter}>Reset</button>
                  </div>
                </div>
              </div>
      <div className="product row g-3 ">
        {content}
      </div>

    </div>
     </>
    )
    }
    </>
  )
}

export default Products
