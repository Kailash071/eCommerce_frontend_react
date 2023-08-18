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
import Cart from "./component/Cart"
import Products from "./component/Products"
import SingleProduct from "./component/SingleProduct"
import ErrorElement from "./component/ErrorElement"
import BodyLayout from "./component/BodyLayout"
import { AuthLayout } from "./component/AuthLayout"
import Profile from "./component/Profile"
import ChangePassword from "./component/ChangePassword"
import LoginWithNumber from "./component/LoginWithNumber"
import CartContext from "./context/CartContext"
// register Swiper custom elements
register()

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") == null
      ? "light"
      : localStorage.getItem("theme")
  )
  const [alert, setAlert] = useState({ show: false, message: "" })
  const [cart,setCart] = useState(JSON.parse( localStorage.getItem("shopNowCart")) == null
  ? []
  : JSON.parse(localStorage.getItem("shopNowCart")))
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" errorElement={<ErrorElement />}>
        <Route element={<BodyLayout />} errorElement={<ErrorElement />}>
          <Route
            index
            element={<Home />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/loginWithPhoneNumber" element={<LoginWithNumber />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
          <Route path="/todaysDeal" element={<TodaysDeal />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" >
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />} errorElement={<ErrorElement />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/changePassword" element={<ChangePassword />} />
          <Route path="buy" />
        </Route>
        <Route path="*" element={<ErrorElement/>} errorElement={<ErrorElement />} />
      </Route>,
    ])
  )
  return (
    <div className={"container-fluid theme-" + theme}>
      {/* <AuthContext.Provider value={{ userAuth, setUserAuth }}> */}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <AlertContext.Provider value={{ alert, setAlert }}>
            <CartContext.Provider value={{ cart,setCart }}>
              <RouterProvider router={router}></RouterProvider>
            </CartContext.Provider>
          </AlertContext.Provider>
        </ThemeContext.Provider>
      {/* </AuthContext.Provider> */}
    </div>
  )
}

export default App
