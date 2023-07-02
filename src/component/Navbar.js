import React, {useContext } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
function Navbar() {
    let{ theme,setTheme }= useContext(ThemeContext)
//   const [theme, setTheme] = useState("light")
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
  return (
    <nav className={`navbar navbar-expand-lg  sticky-top bg-`+theme} data-bs-theme={theme}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ShopNow
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todaysDeal">
                Today's Deal
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/furnitures">
                    Furnitures
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/clothings">
                    Clothings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/electronics">
                    Electronics
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newRelease">
                New Release
              </Link>
            </li>
          </ul>


          <div className="d-flex flex-wrap">
            <Link to="/login" className="btn btn-sm btn-outline-primary mx-1">
              Login
            </Link>
            <Link
              to="/signUp"
              className="btn btn-sm btn-outline-secondary mx-1"
            >
              Create Account
            </Link>
          </div>
          <div className="mx-2 my-1" onClick={themeChange}>
            {theme === "light" ? (
              <i className="bi bi-moon text-dark" id="lightMode"></i>
            ) : (
                <i className="bi bi-sun-fill text-light" id="darkMode"></i>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
