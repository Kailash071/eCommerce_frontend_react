import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Alert from './Alert';
import { Outlet } from 'react-router-dom';
import {BallTriangle} from 'react-loader-spinner'
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const AdminBodyLayout = () => {
    const {adminTheme} = useContext(ThemeContext)
    return (
            <>
              <div className={"container-fluid adminTheme-" + adminTheme}>
              <Navbar />
              {alert.show && <Alert message={alert.message} />}
              <Outlet />
              </div>
            </>
      );
}

export default AdminBodyLayout