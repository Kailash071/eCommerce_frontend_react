import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import { useAdminSelector } from '../../reducers/adminReducer'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {adminTheme,setAdminTheme} = useContext(ThemeContext)
    const admin  = useSelector(useAdminSelector)
    console.log('admin',admin)
    const themeChange = () => {
        if (adminTheme === "light") {
          setAdminTheme("dark")
          localStorage.setItem('adminTheme','dark')
        } else {
          setAdminTheme("light")
          localStorage.setItem('adminTheme','light')
        }
      }
    return (
        <nav className={`navbar navbar-expand-lg sticky-top`} data-bs-theme={adminTheme}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/admin/dashboard">
              ShopNow-Admin
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
                  <NavLink className="nav-link active" aria-current="page" to="/admin/dashboard">
                    Home
                  </NavLink>
                </li>
              </ul>  
             
              {admin && <div className="mx-2 my-1 dropdown-center">
                <NavLink
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <span>
                  {admin.photo === ''?<i className="bi bi-person-circle"></i>:<img src={`${process.env.REACT_APP_NODE_BASE_URL}/profiles/${admin.photo}`} className="img img-fluid rounded-circle br-5" alt="profile not found" width={30} height={30}/>}
                   </span>
                </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="admin/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="admin/changePassword">
                        Change Password
                      </NavLink>
                    </li>
                  </ul>
              </div>}
              <div className="mx-2 my-1" role="button" onClick={themeChange}>
                {adminTheme === "light" ? (
                  <i className="bi bi-moon text-dark" id="lightMode"></i>
                ) : (
                    <i className="bi bi-sun-fill text-light" id="darkMode"></i>
                )}
              </div>
              {admin && <div>
              <NavLink className="btn btn-sm btn-outline-primary mx-1">
                  Logout
                </NavLink>
              </div>} 
            </div>
          </div>
        </nav>
      )
}

export default Navbar