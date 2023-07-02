import React from "react"
import { Link } from "react-router-dom"
function Login() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center my-5">
      <div className="shadow-lg rounded p-3">
        <div className="text-center mb-2 mt-1 fs-4">
            login to start session
        </div>
        <form>
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1" placeholder="Password"
            />
          </div>
        <div className="d-flex justify-content-between" >
        <div className="mb-2 form-check ">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember
            </label>
          </div>
          <div>
            <Link to="/forgetPassword" className="text-decoration-none">Forget Password?</Link>
          </div>
        </div>
          <div className="row px-2">
            <button type="submit" className="btn btn-primary ">
              Login
            </button>
          </div>
        </form>
        <div className="d-flex flex-column my-2 px-2">
          <hr />
          <div className="row my-1">
            <Link
              className="btn btn-success"
              to="/loginWithGoogle"
              role="button"
            >
              <i className="bi bi-google mx-2"></i>
              Continue with Google
            </Link>
          </div>
          <div className="row my-1">
            <Link
              className="btn btn-secondary"
              to="/loginWithPhoneNumber"
              role="button"
            >
              <i className="bi bi-phone mx-2"></i>
              Continue with Phone Number
            </Link>
          </div>
        </div>
        <div className="text-center">
           <span> New to ShopNow?  </span>
            <Link className="text-decoration-none" to="/signUp">
                Register Here
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
