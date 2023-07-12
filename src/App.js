import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./component/Signup"
import Forgetpassword from "./component/Forgetpassword"
import ThemeContext from "./context/ThemeContext"
import { useEffect, useState } from "react"
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Alert from "./component/Alert"
import TodaysDeal from "./component/TodaysDeal"
import Footer from "./component/Footer"
import AlertContext from "./context/AlertContext"
import AuthContext from "./context/AuthContext"
import Cart from "./component/Cart"
import Products from "./component/Products"
import SingleProduct from "./component/SingleProduct"
import { useDispatch } from "react-redux"
import {setProducts,setProductLoading,setProductError} from "./redux/productRedux"
import axios from "axios"
const API = "https://fakestoreapi.com/products";

// import * as authServices from './services/authServices'
// console.log('home authenticateUserToken',authServices.GetUserToken)
// register Swiper custom elements
register();
function App() {
  const dispatch = useDispatch()
  async function  getProductData(url){
    dispatch(setProductLoading)
    try {
        let products = await axios.get(url)
        dispatch(setProducts(products.data))
    } catch (error) {
        dispatch(setProductError)
    }
  }
  useEffect(()=>{
    getProductData(API)
  },[])
  const [theme, setTheme] = useState(localStorage.getItem('theme') == null ? 'light':localStorage.getItem('theme') )
  const [alert,setAlert] = useState({show:false,message:''})
  const [userAuth, setUserAuth] = useState(null)
  return (
    <div className={'theme-'+theme}>
      <AuthContext.Provider value={{userAuth,setUserAuth}}>
        <ThemeContext.Provider value={{theme,setTheme}}>
        <AlertContext.Provider value={{alert,setAlert}}>
        <Router>
          <Navbar />
            {alert.show &&  <Alert message={alert.message}/>} 
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signUp" element={<Signup />}></Route>
            <Route
              exact
              path="/forgetPassword"
              element={<Forgetpassword />}
            ></Route>
            <Route exact path="/todaysDeal" element={<TodaysDeal/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/products" element={<Products/>}></Route>
            <Route exact path="/singleproduct/:productId" element={<SingleProduct/>}></Route>
          </Routes>
          <Footer/>
        </Router>
        </AlertContext.Provider>
      </ThemeContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default App
