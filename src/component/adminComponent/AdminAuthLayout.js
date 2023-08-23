import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import SideBar from './SideBar'
import Alert from '../Alert';
import { Outlet } from 'react-router-dom';
import {BallTriangle} from 'react-loader-spinner'
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const AdminAuthLayout = () => {
    const {adminTheme} = useContext(ThemeContext)
    let isLoading = false
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
              <div class={"container-fluid adminTheme-"+ adminTheme}>
                <div class="d-flex flex-column">
                  <div class=""><Navbar /></div>
                  <div class="d-flex flex-nowrap" style={{minHeight:"80.4vh"}}>
                  {/* <div class="d-flex flex-nowrap"> */}
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