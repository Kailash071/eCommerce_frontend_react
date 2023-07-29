import { Navigate, Outlet } from "react-router-dom";
import useToken from "../services/authServices"
import {React} from 'react'

export const AuthLayout = () => {    
  return (
    <>
   {useToken().user? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}
