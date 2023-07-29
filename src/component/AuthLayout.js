import { Navigate, Outlet } from "react-router-dom";
import useToken from "../services/authServices"
import {React} from 'react'

export const AuthLayout = () => {    
  return (
    <>
   {useToken().userToken? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}
