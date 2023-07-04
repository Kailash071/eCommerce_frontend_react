import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./component/Signup"
import Forgetpassword from "./component/Forgetpassword"
import ThemeContext from "./context/ThemeContext"
import { useState } from "react"
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Alert from "./component/Alert"
import TodaysDeal from "./component/TodaysDeal"
import Footer from "./component/Footer"
import AlertContext from "./context/AlertContext"
// register Swiper custom elements
register();
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') == null ? 'light':localStorage.getItem('theme') )
  const [alert,setAlert] = useState({success:false,message:''})
  return (
    <div className={'theme-'+theme}>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <AlertContext.Provider value={{alert,setAlert}}>
        <Router>
          <Navbar />
            {alert.success &&  <Alert message={alert.message}/>} 
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signUp" element={<Signup />}></Route>
            <Route
              exact
              path="/forgetPassword"
              element={<Forgetpassword />}
            ></Route>
            <Route exact path="/todaysDeal" element={<TodaysDeal/>}></Route>
          </Routes>
          <Footer/>
        </Router>
        </AlertContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
