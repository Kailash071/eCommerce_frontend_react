import React from 'react'
import { Link } from 'react-router-dom'

const LoginWithNumber = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center my-5">
    <div className="shadow-lg rounded p-3">
      <div className="text-center mb-2 mt-1 fs-4">
          login to start session
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
              name="name"
            />
          </div>
        <div className="mb-2">
          <label htmlFor="phoneNumber" className="form-label">
           Phone number
          </label>
            <div className='d-flex  justify-content-between align-items-center gap-2'>
            <select name="country" id="country" className='form-select  w-50'>
                <option value="+91">India (+91)</option>
                <option value="+92">India2 (+92)</option>
                <option value="+93">India3 (+93)</option>
            </select>
            <input
            type="number"
            className="form-control"
            id="phoneNumber"
            min={10}
            max={10}
           placeholder="Enter valid number" name="phoneNumber"
          />
            </div>
        </div>
        <div className='mb-2'>

        </div>
        <div className="row px-2">
          <button   className="btn btn-primary ">
            Send Otp
          </button>
        </div>
        <div className='mt-3'>
        <div className="mb-2">
          <label htmlFor="phoneNumber" className="form-label">
           Enter otp sent on phone number
          </label>
         <div className='d-flex justify-content-around align-items-center gap-3'>
         <input
            type="number"
            className="p-1 text-center shadow-none rounded form-control"
            id="phoneNumber"
            min={1}
            max={1}
            name="otpDigit1"
          />
           <input
            type="number"
            className="p-1 text-center shadow-none rounded form-control"
            id="phoneNumber"
            min={1}
            max={1}
            name="otpDigit2"
          />
           <input
            type="number"
            className="p-1 text-center shadow-none rounded form-control"
            id="phoneNumber"
            min={1}
            max={1}
            name="otpDigit3"
          />
           <input
            type="number"
            className="p-1 text-center shadow-none rounded form-control"
            id="phoneNumber"
            min={1}
            max={1}
            name="otpDigit4"
          />
         </div>
        </div>
        <div className='row px-2 mt-2 mb-2'>
        <button type='button' className="btn btn-success">
            Verify otp
          </button>
        </div>
        </div>
      </form>
      <form>

      </form>
      <div className="text-center float-end mt-1">
            <Link className="text-decoration-none text-secondary" to="/login">
                Other ways to start
            </Link>
        </div>
    </div>
  </div>
  )
}

export default LoginWithNumber