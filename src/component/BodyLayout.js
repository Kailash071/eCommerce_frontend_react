import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom/dist"
import Alert from "./Alert"
import AlertContext from "../context/AlertContext"
import { useDispatch, useSelector } from "react-redux"
import { useGetUserByIdQuery } from "../reducers/userSlice"
import { setUserData, useUserSelector, useUserTokenSelector } from "../reducers/userReducer"

const BodyLayout = () => {
  const { alert } = useContext(AlertContext)
  const dispatch = useDispatch()
  const getUser = JSON.parse(localStorage.getItem('user'));
  let userId = '';
  console.log('getUser',getUser)
  if(getUser){
    userId = getUser._id
  }
  console.log('userId',userId)
  const {data:userResult,isSuccess} = useGetUserByIdQuery(userId)
  const userSelector = useSelector(useUserSelector)
  console.log('userResult',userResult)
  if(isSuccess){
    if(userResult.success){
      let user = {
        _id: userResult.data.user._id,
        email:userResult.data.user.email,
        password: userResult.data.user.password,
        name: userResult.data.user.name,
        phoneNumber: userResult.data.user.phoneNumber,
        photo: userResult.data.user.photo,
        role: userResult.data.user.role,
        isDeleted: userResult.data.user.isDeleted,
        theme: userResult.data.user.theme,
        userToken:userResult.data.userToken
      }
      if(!userSelector){
        dispatch(setUserData(user))
      }
    }
  }
   
  return (
    <>
      <Navbar />
      {alert.show && <Alert message={alert.message} />}
      <Outlet />
      <Footer />
    </>
  )
}

export default BodyLayout
