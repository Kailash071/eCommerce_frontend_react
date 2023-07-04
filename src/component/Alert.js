import {React,useContext,useState} from "react"
import ThemeContext from "../context/ThemeContext"
import AlertContext from "../context/AlertContext"
function Alert(props) {
  let{ theme }= useContext(ThemeContext)
  const {setAlert} = useContext(AlertContext)
  const [alertVisiblity, setalertVisiblity] = useState("show")
  setTimeout(()=>{
    setalertVisiblity("hide")
    setAlert({success:false,message:''})
  },4000)
  return (
    <div
      className={`toast align-items-end position-absolute top-5 end-0 z-3  text-bg-${theme} ${alertVisiblity}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      id="toastAlert"
    >
      <div className="d-flex">
        <div className="toast-body">{props.message}</div>
        <button
          type="button"
          className="btn-close me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  )
}

export default Alert
