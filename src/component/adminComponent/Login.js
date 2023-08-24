import {React,useState,useContext} from "react"
import { Link ,useNavigate} from "react-router-dom"
import ErrorElement from "../ErrorElement"
import AlertContext from "../../context/AlertContext"
import { useAdminLoginMutation } from "../../reducers/adminSlice"
import { setAdminData } from "../../reducers/adminReducer"
import { useDispatch } from "react-redux"
const Login = ()=>{
  const formInitialValue = {email:'',password:''}
  const [loginFormInputs, setLoginFormInputs] = useState(formInitialValue)
  const {setAlert} = useContext(AlertContext)
  const [login,isLoading,isError] = useAdminLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const canLogin = Object.values(loginFormInputs).every(Boolean)
  const handleInputChange = (e)=>{
    e.preventDefault()
    setLoginFormInputs({...loginFormInputs,[e.target.name]:e.target.value})
  }
  const handleLoginSubmit =async (e)=>{
    e.preventDefault()
    console.log("Form submitted successfully",loginFormInputs)
    if(canLogin){
      const loginResult = await login(loginFormInputs)
      console.log('loginResult',loginResult.data)
      if(loginResult.data.success){
        setAlert({show:true,message:loginResult.data.message})
        let result = loginResult.data.data
        let user = {
          _id: result.user._id,
          email:result.user.email,
          password: result.user.password,
          name: result.user.name,
          phoneNumber: result.user.phoneNumber,
          photo: result.user.photo,
          role: result.user.role,
          isDeleted: result.user.isDeleted,
          theme: result.user.theme,
          adminToken:result.adminToken
        }
        dispatch(setAdminData(user))
        navigate('/admin/dashboard')
      }else{
        //this alert is not showing that need to be checked all other are displaying properly
       setAlert({show:true,message:loginResult.data.message})
      }
    }else{
      setAlert({show:true,message:"Please fill all fields"})
    }
        console.log('--------else-3')
    setLoginFormInputs(formInitialValue)
  }
  if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
return (
<div className="d-flex flex-column justify-content-center align-items-center py-5 vh-100">
  <div className="shadow-lg rounded p-3">
    <div className="text-center mb-2 mt-1 fs-4">
      login to start session
    </div>
    <form>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"
          name="email" value={loginFormInputs.email} onChange={handleInputChange}/>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={loginFormInputs.password} onChange={handleInputChange}/>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <Link to="/admin/forgetPassword" className="text-decoration-none">Forget Password?</Link>
        </div>
      </div>
      <div className="row px-2">
        <button type="submit" onClick={handleLoginSubmit} disabled={!canLogin || !isLoading} className="btn btn-primary ">
          Login
        </button>
      </div>
    </form>
  </div>
</div>
)
}

export default Login