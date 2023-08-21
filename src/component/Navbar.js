import React, {useContext } from "react"
import { NavLink } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import { useDispatch, useSelector } from "react-redux"
import { clearUserAndToken,useUserSelector} from "../reducers/userReducer"
import CartContext from "../context/CartContext"
import { selectAllCategorys} from "../reducers/categorySlice"
function Navbar() {
    let{ theme,setTheme }= useContext(ThemeContext)
    const dispatch = useDispatch()
    const user  = useSelector(useUserSelector)
    let {cart} = useContext(CartContext)
    const categorys = useSelector(selectAllCategorys)
  const themeChange = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem('theme','dark')
    } else {
      setTheme("light")
      localStorage.setItem('theme','light')
    }
  }
  const handleLogout = ()=>{
    localStorage.removeItem('userToken')
    dispatch(clearUserAndToken())
  }
  return (
    <nav className={`navbar navbar-expand-lg  sticky-top bg-`+theme} data-bs-theme={theme}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          ShopNow
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todaysDeal">
                Today's Deal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </NavLink>
              <ul className="dropdown-menu">
              {categorys && (<>
               {
                 categorys.map(category => {
                  return(  <li key={category._id}> 
                  <NavLink className="dropdown-item" to={`/category/${category._id}`}>
                    {category.name}
                  </NavLink>
                </li>)
                 })
               }
              </>)}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newRelease">
                New Release
              </NavLink>
            </li>
          </ul>

         
          {!user && 
          <div className="d-flex flex-wrap">
            <NavLink to="/login" className="btn btn-sm btn-outline-primary mx-1">
              Login
            </NavLink>
            <NavLink
              to="/signUp"
              className="btn btn-sm btn-outline-secondary mx-1"
            >
              Create Account
            </NavLink>

          </div>
           } 
          {user && <div className="mx-2 my-1 dropdown-center">
            <NavLink
              className="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <span>
              {user.photo === ''?<i className="bi bi-person-circle"></i>:<img src={`${process.env.REACT_APP_NODE_BASE_URL}/profiles/${user.photo}`} className="img img-fluid rounded-circle br-5" alt="profile not found" width={30} height={30}/>}
               </span>
            </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/user/profile">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/user/changePassword">
                    Change Password
                  </NavLink>
                </li>
              </ul>
          </div>}
          <div className="mx-2 my-1">
            <NavLink to="/cart">
            <button  type="button" className="btn btn-sm position-relative">
              <span>
              <i className="bi bi-cart-dash-fill"></i>
              </span>
              <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark`}>
              {cart.length}
                <span className="visually-hidden"></span>
              </span>
            </button>
            </NavLink>
          </div>
          <div className="mx-2 my-1" role="button" onClick={themeChange}>
            {theme === "light" ? (
              <i className="bi bi-moon text-dark" id="lightMode"></i>
            ) : (
                <i className="bi bi-sun-fill text-light" id="darkMode"></i>
            )}
          </div>
          {user && <div>
          <NavLink onClick={handleLogout} className="btn btn-sm btn-outline-primary mx-1">
              Logout
            </NavLink>
          </div>} 
        </div>
      </div>
    </nav>
  )
}

export default Navbar
