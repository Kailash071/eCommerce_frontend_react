import { Navigate, Outlet } from "react-router-dom";
import {React} from 'react'
import { useSelector } from "react-redux";
import { useUserSelector } from "../reducers/userReducer";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const AuthLayout = () => {  
  const user  = useSelector(useUserSelector)  
  return (
    <>
      <Navbar />
      {user? <Outlet/> : <Navigate to="/login" />}
      <Footer />
    </>
  )
}
