import React from 'react'
import { Link } from 'react-router-dom'
function Forgetpassword() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center my-5">
    <div className="shadow-lg rounded p-3">
      <div className="text-center mt-1 fs-4">
      Password assistance
      </div>
      <div className='text-center fs-6 mb-3'>
      Enter the email address or mobile phone number <br /> associated with your ShopNow account.
      </div>
      <form>
        <div className="mb-3">
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
            Provide valid email address
          </div>
        </div>
        <hr />
        <div className="mb-3">
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
            Continue
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

export default Forgetpassword