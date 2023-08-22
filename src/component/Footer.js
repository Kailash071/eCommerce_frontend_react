import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from "../context/ThemeContext"
function Footer() {
    let{ theme }= useContext(ThemeContext)
  return (
    <>
    {/* Footer */}
    <footer className={`text-center text-lg-start bg-${theme} border-top`}>
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                ShopNow
              </h6>
              <p>
                get know to us
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  React
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Vue
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  NodeJS
                </Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/todaysDeal" className="text-reset">
                  Today's Deal
                </Link>
              </p>
              <p>
                <Link to="/profile" className="text-reset">
                  Profile
                </Link>
              </p>
              <p>
                <Link to="/yourOrders" className="text-reset">
                 Your Orders
                </Link>
              </p>
              <p>
                <Link to="/help" className="text-reset">
                  Help
                </Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-house me-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="bi bi-envelope me-3" />
                shopnow@gmail.com
              </p>
              <p>
                <i className="bi bi-phone me-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="bi bi-printer me-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <Link to="" className="me-4 text-reset">
            <i className="bi bi-facebook" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="bi bi-twitter" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="bi bi-instagram" />
          </Link>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Copyright */}
      <div
        className="text-center p-4"
      >
       <span> © 2023 Copyright </span>
        <Link className="text-reset " to="/">
          showpnow.com
        </Link>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </>
  
  )
}

export default Footer