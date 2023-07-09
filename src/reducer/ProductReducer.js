const ProductReducer = (state, action) => {
  switch (action.type) {
    case "set_loading":
      return {
        ...state,
        isLoading: true,
      }
    case "set_error":
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case "set_productData":
        const featureData = action.payload.filter((curElem) => {
            return curElem.featured === true;
          });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products :action.payload,
        featureProducts : featureData
      }
    case "set_single_product_loading":
        return {
            ...state,
            isSingleLoading: true,
          } 
    case "set_single_product_error":
        return {
            ...state,
            isSingleLoading: false,
            isSingleError:true,
          }
    case "set_single_product":
        return {
            isSingleError:false,
            isSingleLoading:false,
            singleProduct:action.payload
        }
    default:
      return state
  }
}
export default ProductReducer
