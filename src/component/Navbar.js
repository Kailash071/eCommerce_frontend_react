import React, {useContext } from "react"
import { NavLink } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import useToken from "../services/authServices"
import { useDispatch } from "react-redux"
import { clearUserAndToken} from "../reducers/userReducer"
function Navbar() {
    let{ theme,setTheme }= useContext(ThemeContext)
    const dispatch = useDispatch()
    console.log('navbar useToken().user',useToken().user)
  const themeChange = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem('theme','dark')
      console.log('theme change to',theme)  
    } else {
      setTheme("light")
      console.log('theme change to',theme)
      localStorage.setItem('theme','light')
    }
  }
  const handleLogout = ()=>{
    localStorage.removeItem('user')
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
            {/* <li className="nav-item dropdown">
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
                <li>
                  <NavLink className="dropdown-item" to="/furnitures">
                    Furnitures
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/clothings">
                    Clothings
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/electronics">
                    Electronics
                  </NavLink>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/newRelease">
                New Release
              </NavLink>
            </li>
          </ul>

         
          {!useToken().userToken && 
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
           {useToken().userToken && <div>
          <NavLink onClick={handleLogout} className="btn btn-sm btn-outline-primary mx-1">
              Logout
            </NavLink>
          </div>} 
          <div className="mx-2 my-1" onClick={themeChange}>
            {theme === "light" ? (
              <i className="bi bi-moon text-dark" id="lightMode"></i>
            ) : (
                <i className="bi bi-sun-fill text-light" id="darkMode"></i>
            )}
          </div>
          {useToken().userToken && <div className="mx-2 my-1 dropdown-center">
            <NavLink
              className="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
              <i className="bi bi-person-circle"></i>
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
                0
                <span className="visually-hidden"></span>
              </span>
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
