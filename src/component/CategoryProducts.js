import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Product from "./Product"
import { selectAllProducts } from "../reducers/productsSlice"
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
import { useSelector } from "react-redux"
const CategoryProducts = ()=>{
	let {categoryId} = useParams()
	  const products = useSelector(selectAllProducts)
	  const [isLoading, setIsLoading] = useState(true);
	  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
	    const handleResetFilter = (e)=>{
	    e.preventDefault()
	    setSelectedPriceRange('all');
	  }
	  const [content, setContent] = useState([]);
	    useEffect(() => {
	    let filteredProducts = products.filter(product=> product.categoryId === categoryId)
	    
	    if (selectedPriceRange !== 'all') {
	      const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
	      filteredProducts = filteredProducts.filter(product => {
	        if (maxPrice) {
	          return product.price > minPrice && product.price <= maxPrice;
	        } else {
	          return product.price > minPrice;
	        }
	      });
	    }
	    setIsLoading(false)
	    setContent(
	      filteredProducts.map(product => (
	      		<Product key={product._id} productId={product._id} />
	      ))
	    );
	  }, [selectedPriceRange, products,categoryId]);
	  
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
                    <div className="d-flex gap-1 justify-content-center align-items-center">
                    <label htmlFor="categorySelect">Filter By Price</label>
                    <select 
                      className="form-select" 
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      style={{ width: "max-content" }} 
                      aria-label="Default select example"
                    >
                      <option value='all' >All</option>
                      <option value="0-500">Under  &#x20b9;500</option>
                      <option value="500-1000"> &#x20b9;500 -  &#x20b9; 1000</option>
                      <option value="1000-2000"> &#x20b9;1000 -  &#x20b9;2000</option>
                      <option value="2000">Above  &#x20b9;2000</option>
                    </select>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    {/* <button className="btn btn-outline-primary" onClick={handleApplyFilter}>Apply</button> */}
                    <button className="btn btn-outline-secondary" onClick={handleResetFilter}>Reset</button>
                  </div>
                </div>
              </div>
      <div className="product row g-3 ">
        {content.length>0?content:<ErrorElement message="Products not found" />}
      </div>

    </div>
     </>
    )
    }
    </>
  )
}

export default CategoryProducts