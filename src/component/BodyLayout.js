import React, { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom/dist"
import Alert from "./Alert"
import AlertContext from "../context/AlertContext"
import { useDispatch, useSelector } from "react-redux"
import { useGetUserByTokenQuery } from "../reducers/userSlice"
import { setUserData, useUserTokenSelector } from "../reducers/userReducer"
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
import ThemeContext from "../context/ThemeContext"
const BodyLayout = () => {
  const { alert } = useContext(AlertContext)
  const {theme} = useContext(ThemeContext)
  const dispatch = useDispatch()
  const userToken = localStorage.getItem('userToken');
  const { data: userResult, isSuccess,isLoading,isError } = useGetUserByTokenQuery(userToken)
  const userSelector = useSelector(useUserTokenSelector)
  useEffect(() => {
    if (isSuccess) {
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
  }, [isSuccess]);
  if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
   return (
  <>
    {isLoading ? (
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        visible={true}
      />
    ) : (
      <>
        <div className={"container-fluid theme-" + theme}>
        <Navbar />
        {alert.show && <Alert message={alert.message} />}
        <Outlet />
        <Footer />
        </div>
      </>
    )}
  </>
);

}

export default BodyLayout
