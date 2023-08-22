import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Alert from '../Alert';
import { Outlet } from 'react-router-dom';
import {BallTriangle} from 'react-loader-spinner'
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const AdminBodyLayout = () => {
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
              <div className={"container-fluid theme-" + adminTheme}>
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

export default AdminBodyLayout