import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom/dist"
import Alert from "./Alert"
import AlertContext from "../context/AlertContext"

const Layout = () => {
    const {alert} = useContext(AlertContext)

  return (
    <>
      <Navbar /> 
      {alert.show &&  <Alert message={alert.message}/>} 
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
