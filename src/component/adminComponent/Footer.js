import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from "../../context/ThemeContext"
function Footer() {
    let{ adminTheme }= useContext(ThemeContext)
  return (
    <>
    {/* Footer */}
    <footer className={`text-center text-lg-start border-top`}>
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