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
              <div class={"container-fluid bg"+ adminTheme}>
                <div class="row">
                  <div class="col-12"><Navbar /></div>
                  <div class="col-2"><SideBar/></div>
                  <div class="col-10">
                   {alert.show && <Alert message={alert.message} />}
                   <Outlet />
                  </div>
                 <Footer />
                </div>
              </div>
            </>
          )}
        </>
      );
}

export default AdminAuthLayout