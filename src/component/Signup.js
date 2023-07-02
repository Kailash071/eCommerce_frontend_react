import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
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
            id="fullName"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email" name='email'
             placeholder="Email"
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
            id="password" name='password' placeholder="Password"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
           Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            name='phoneNumber'
            id="phoneNumber" minLength={10} maxLength={10}
             placeholder="Phone Number"
          />
        </div>
        <div className="row px-2">
          <button type="submit" className="btn btn-primary ">
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
  )
}

export default Signup