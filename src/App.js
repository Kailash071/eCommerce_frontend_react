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
import CategoryProducts from "./component/CategoryProducts"
import AdminLogin from "./component/adminComponent/Login"
import Dashboard from "./component/adminComponent/Dashboard"
import AdminBodyLayout from "./component/adminComponent/AdminBodyLayout"
import AdminAuthLayout from "./component/adminComponent/AdminAuthLayout"
// register Swiper custom elements
register()

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") == null
      ? "light"
      : localStorage.getItem("theme")
  )
  const [adminTheme, setAdminTheme] = useState(
    localStorage.getItem("adminTheme") == null
      ? "light"
      : localStorage.getItem("adminTheme")
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" >
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="category/:categoryId" element={<CategoryProducts/>}/>
        </Route>
        <Route element={<AuthLayout />} errorElement={<ErrorElement />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/changePassword" element={<ChangePassword />} />
          <Route path="buy" />
        </Route>
        <Route path="/admin" errorElement={<ErrorElement />}>
          <Route element={<AdminBodyLayout/>} errorElement={<ErrorElement/>}>
            <Route index element={<AdminLogin/>} />
          </Route>
          <Route element={<AdminAuthLayout />} errorElement={<ErrorElement />}>
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorElement/>} errorElement={<ErrorElement />} />
      </Route>,
    ])
  )
  return (
        <ThemeContext.Provider value={{ theme, setTheme,adminTheme, setAdminTheme }}>
          <AlertContext.Provider value={{ alert, setAlert }}>
            <CartContext.Provider value={{ cart,setCart }}>
              <RouterProvider router={router}></RouterProvider>
            </CartContext.Provider>
          </AlertContext.Provider>
        </ThemeContext.Provider>
  )
}

export default App
