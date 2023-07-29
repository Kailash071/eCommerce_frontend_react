import React from 'react'

const ChangePassword = () => {
  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center my-5">
      <div className="shadow-lg rounded p-3">
      <form>
        <div className="mb-2">
          <label htmlFor="currentPassword" className="form-label">
           Current Password
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            name="currentPassword"
            placeholder="Current Password"
           
          />
        </div>
        <div className="mb-2">
          <label htmlFor="newPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
           
          />
        </div>
        <div className="mb-2">
          <label htmlFor="confirmNewPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmNewPassword"
            name="confirmNewPassword"
            placeholder="confirm New Password"
           
          />
        </div>
        <div className="row px-2">
          <button  className="btn btn-primary ">
            Update Password
          </button>
        </div>
      </form>
      </div>
    </div>
  </>
  )
}

export default ChangePassword