import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [],
    isLoading:false,
    isError:false,
    singleProduct:{},
    isSingleLoading:false,
    isSingleError: false
}

export const productSlice = createSlice({
    name: 'productRedux',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload
        state.isLoading=false
        state.isError=false
      },
      setProductLoading:(state)=>{
        state.isLoading=true
      },
      setProductError:(state)=>{
        state.isError=true
      },
      setSingleProducts: (state, action) => {
        state.singleProduct = action.payload
        state.isSingleLoading=false
        state.isSingleError=false
      },
      setSingleLoading:(state)=>{
        state.isSingleLoading=true
      },
      setSingleError:(state)=>{
        state.isSingleError=true
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setProducts,setProductError,setProductLoading,setSingleError,setSingleLoading,setSingleProducts } = productSlice.actions
  
  export default productSlice.reducer
  
  
  