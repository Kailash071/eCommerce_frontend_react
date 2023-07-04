import {React,useState,useContext} from "react"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import AlertContext from "../context/AlertContext"
function Signup(props) {
  const formInitialValue = {name: "",email:"",phoneNumber:"",password:""}
   const [inputs, setInputs] = useState(formInitialValue)
   const {setAlert} = useContext(AlertContext)
   const navigate = useNavigate();
  const handleInputChange = (e)=>{
    e.preventDefault()
    setInputs({...inputs,[e.target.name]:e.target.value})
  }
  const handleRegisterSubmit = async (e)=>{
    e.preventDefault();
    console.log("Form submitted successfully",inputs)
    await axios.post(`${process.env.REACT_APP_NODE_BASE_URL}/register`,inputs).then((response)=>{
      if(response.data.success){
        console.log('response.data',response.data)
       setAlert({show:true,message:response.data.message})
       setTimeout(()=>{return navigate('/login')},4000)
      }else  {
        setAlert({show:true,message:response.data.message}) 
      }
    }).catch((error)=>{
      console.log(`Error occured while registering ${error}`)
      setAlert({show:true,message:error})
    })
    setInputs(formInitialValue)
  }
  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center my-5">
      <div className="shadow-lg rounded p-3">
        <div className="text-center mb-2 mt-1 fs-4">
          Register to start session
        </div>
        <form>
          <div className="mb-2">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
              onChange={handleInputChange}
              name="name"
              value={inputs.name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={inputs.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={inputs.password}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              name="phoneNumber"
              id="phoneNumber"
              minLength={10}
              maxLength={10}
              placeholder="Phone Number"
              onChange={handleInputChange}
              value={inputs.phoneNumber}
            />
          </div>
          <div className="row px-2">
            <button onClick={handleRegisterSubmit} className="btn btn-primary ">
              Register
            </button>
          </div>
        </form>
        <div className="text-center my-1">
          <span> Already have an account? </span>
          <Link className="text-decoration-none" to="/login">
            Login Here
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
