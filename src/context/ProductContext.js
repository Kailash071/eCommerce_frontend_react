import { createContext,useContext,useReducer,useEffect } from "react";
import ProductReducer from "../reducer/ProductReducer";
import axios from "axios";
const productContext = createContext()

const API = "https://fakestoreapi.com/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct:{},
    isSingleLoading:false,
    isSingleError:false
  };

const ProductProvider = ({children})=>{
    const [state,dispatch] = useReducer(ProductReducer,initialState)

    const getProducts = async (url)=>{
        dispatch({type:"set_loading"})
        try {
            let products = await axios.get(url)
            dispatch({type:"set_productData",payload:products.data})
        } catch (error) {
            dispatch({type:"set_error"})
        }
    }
    
    const getSingleProduct = async (url)=>{
        dispatch({type:"set_single_product_loading"})
        try {
            let products = await axios.get(url)
            console.log('single products.data',products.data)
            dispatch({type:"set_single_product",payload:products.data})
        } catch (error) {
            dispatch({type:"set_single_product_error"})
        }
    }
    useEffect(()=>{
        getProducts(API);
    },[])
    return (
        <productContext.Provider value={{...state,getSingleProduct,getProducts}}>
            { children }
        </productContext.Provider>
    )
}

//custom hook
const useProduct = () =>{
     return useContext(productContext)
}
export {productContext,useProduct,ProductProvider}
