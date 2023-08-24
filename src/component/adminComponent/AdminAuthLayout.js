import {React,useContext,useEffect} from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import SideBar from './SideBar'
import Alert from '../Alert';
import { Outlet,useNavigate } from 'react-router-dom';
import {BallTriangle} from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext';
import ErrorElement from "../ErrorElement"
import { useGetAdminByTokenQuery } from "../../reducers/adminSlice";
import { setAdminData, useAdminTokenSelector } from "../../reducers/adminReducer";
import { useDispatch,useSelector } from "react-redux"
import AlertContext from "../../context/AlertContext"
const AdminAuthLayout = () => {
  const { alert } = useContext(AlertContext)
  const {adminTheme} = useContext(ThemeContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const adminToken = localStorage.getItem('adminToken');
  if(!adminToken || adminToken === ''){
    navigate('/admin')
  }
  const { data: userResult, isSuccess,isLoading ,isError} = useGetAdminByTokenQuery(adminToken)
  const userSelector = useSelector(useAdminTokenSelector)
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
          adminToken: userResult.data.adminToken
        }
        if (!userSelector) {
          dispatch(setAdminData(user))
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
              wrapperClassName={{}}
              wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              visible={true}
            />
          ) : (
            <>
              <div className={"container-fluid adminTheme-"+ adminTheme}>
                <div className="d-flex flex-column">
                  <div className=""><Navbar /></div>
                  <div className="d-flex flex-nowrap" style={{minHeight:"100vh"}}>
                  {/* <div className="d-flex flex-nowrap"> */}
                    <SideBar/>
                   <div className={"d-flex flex-column w-100 pt-3"}>
                    {alert.show && <Alert message={alert.message} />}
                   <Outlet />
                   </div>
                  </div>                  
                  </div>
                 <Footer />
                </div>
            </>
          )}
        </>
      );
}

export default AdminAuthLayout