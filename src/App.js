import Home from "./component/Home"
import Login from "./component/Login"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom/dist"
import Signup from "./component/Signup"
import Forgetpassword from "./component/Forgetpassword"
import ThemeContext from "./context/ThemeContext"
import {useState } from "react"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
import TodaysDeal from "./component/TodaysDeal"
import AlertContext from "./context/AlertContext"
// import AuthContext from "./context/AuthContext"
import Cart from "./component/Cart"
import Products from "./component/Products"
import SingleProduct from "./component/SingleProduct"
import Layout from "./component/Layout"
import ErrorElement from "./component/ErrorElement"
// import useToken from './services/authServices'
// console.log('home authenticateUserToken',authServices.GetUserToken)
// register Swiper custom elements
register()
function App() {
  // const dispatch = useDispatch()
  // console.log('user token and info',useToken().user,useToken().userToken)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") == null
      ? "light"
      : localStorage.getItem("theme")
  )
  const [alert, setAlert] = useState({ show: false, message: "" })
  // dispatch(getUserData())
  // const [userAuth, setUserAuth] = useState(useSelector(useUserSelector))
  // console.log('user auth ',userAuth)
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route element={<Layout />}errorElement={<ErrorElement />}>
        <Route
          index
          path="/"
          element={<Home />}
          errorElement={<ErrorElement />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/forgetPassword" element={<Forgetpassword />} />
        <Route path="/todaysDeal" element={<TodaysDeal />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" errorElement={<ErrorElement />} >
          <Route  index element={<Products/>}/>
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
        <Route path="*" errorElement={<ErrorElement />} />
      </Route>,
    ])
  )
  return (
    <div className={"theme-" + theme}>
      {/* <AuthContext.Provider value={{ userAuth, setUserAuth }}> */}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <AlertContext.Provider value={{ alert, setAlert }}>
            <RouterProvider router={router}></RouterProvider>
          </AlertContext.Provider>
        </ThemeContext.Provider>
      {/* </AuthContext.Provider> */}
    </div>
  )
}

export default App
