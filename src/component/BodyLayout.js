import React, { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom/dist"
import Alert from "./Alert"
import AlertContext from "../context/AlertContext"
import { useDispatch, useSelector } from "react-redux"
import { useGetUserByTokenQuery } from "../reducers/userSlice"
import { setUserData, useUserTokenSelector } from "../reducers/userReducer"
const BodyLayout = () => {
  const { alert } = useContext(AlertContext)
  const dispatch = useDispatch()
  const userToken = localStorage.getItem('userToken');
  const { data: userResult, isSuccess } = useGetUserByTokenQuery(userToken)
  const userSelector = useSelector(useUserTokenSelector)
  useEffect(() => {
    if (isSuccess && !userSelector) {
      if (userResult && userResult.success) {
        let user = {
          _id: userResult.data.user._id,
          email: userResult.data.user.email,
          password: userResult.data.user.password,
          name: userResult.data.user.name,
          phoneNumber: userResult.data.user.phoneNumber,
          photo: userResult.data.user.photo,
          role: userResult.data.user.role,
          isDeleted: userResult.data.user.isDeleted,
          theme: userResult.data.user.theme,
          userToken: userResult.data.userToken
        }
        if (!userSelector) {
          dispatch(setUserData(user))
        }
      }
    }
  }, [dispatch, isSuccess, userResult, userSelector]);

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
