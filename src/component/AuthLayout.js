import { Outlet, useNavigate} from "react-router-dom";
import {React, useContext, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUserData, useUserTokenSelector } from "../reducers/userReducer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "./Alert";
import { useGetUserByTokenQuery } from "../reducers/userSlice";
import AlertContext from "../context/AlertContext";
import {BallTriangle} from 'react-loader-spinner'
import ErrorElement from "./ErrorElement"
export const AuthLayout = () => {  
  const { alert } = useContext(AlertContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userToken = localStorage.getItem('userToken');
  if(!userToken || userToken === ''){
    navigate('/login')
  }
  const { data: userResult, isSuccess,isLoading ,isError} = useGetUserByTokenQuery(userToken)
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
        <Navbar />
        {alert.show && <Alert message={alert.message} />}
        <Outlet />
        <Footer />
      </>
    )}
  </>
);

}
