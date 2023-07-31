import { Navigate, Outlet } from "react-router-dom";
import {React} from 'react'
import { useSelector } from "react-redux";
import { useUserSelector } from "../reducers/userReducer";

export const AuthLayout = () => {  
  const user  = useSelector(useUserSelector)  
  return (
    <>
   {user? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}
