import {React} from "react"
import { Link } from "react-router-dom"
const Login = ()=>{

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
          name="email" />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
      </div>
      <div className="d-flex justify-content-between">
        <div className="mb-2 form-check ">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember
          </label>
        </div>
        <div>
          <Link to="/admin/forgetPassword" className="text-decoration-none">Forget Password?</Link>
        </div>
      </div>
      <div className="row px-2">
        <button type="submit" className="btn btn-primary ">
          Login
        </button>
      </div>
    </form>
  </div>
</div>
)
}

export default Login