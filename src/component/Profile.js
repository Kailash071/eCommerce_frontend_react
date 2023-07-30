import React, { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { UpdateUserData, useUserSelector } from "../reducers/userReducer"
import AlertContext from "../context/AlertContext"
import { useUpdateProfileMutation } from "../reducers/userSlice"

const Profile = () => {
  const user = useSelector(useUserSelector)
  const [inputs, setInputs] = useState(user)
  const { setAlert } = useContext(AlertContext)
  const navigate = useNavigate()
  const [update, isLoading] = useUpdateProfileMutation()
  const dispatch = useDispatch()
  useEffect(() => {
    setInputs(user)
  }, [user])

  const handleInputChange = (e) => {
    e.preventDefault()
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleCancelClick = (e) => {
    e.preventDefault()
    navigate("/")
  }
  const handleUpdateClick = async (e) => {
    e.preventDefault()
    const updateResult = await update(inputs)
    if (updateResult.data.success) {
      dispatch(UpdateUserData(updateResult.data.data))

      // setInputs(updateResult.data.data) how to set new data in form should i reload ?
      setAlert({ show: true, message: updateResult.data.message })
    } else {
      setAlert({ show: true, message: updateResult.data.message })
    }
    setInputs(user)
  }
  const handleAccountDelete = async (e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center my-5">
        <div className="shadow-lg rounded p-3">
          <h5 className="text-center">Account Detail</h5>
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
                value={inputs.name}
                onChange={handleInputChange}
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
                value={inputs.email}
                onChange={handleInputChange}
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
                value={inputs.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="photo" className="form-label">
                Profile Image
              </label>
              <div>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  onChange={handleInputChange}
                />
                <img
                  src={`http://localhost:5000/public/profiles/${inputs.photo}`}
                  alt="profile"
                />
              </div>
            </div>
            <div className="row px-2 gy-2">
              <button
                className="btn btn-primary"
                disabled={!isLoading}
                onClick={handleUpdateClick}
              >
                Update
              </button>
              <button className="btn btn-secondary" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </form>
          <div className="text-center float-start my-1">
            <Link className="text-decoration-none" to="/ChangePassword">
              Change Password?
            </Link>
          </div>
          <div className="text-center float-end my-1">
            <button
              className="btn btn-sm btn-outline-danger" type="button"
              data-bs-toggle="modal" data-bs-target="accountDeleteModal"
            >
              Delete Account!
            </button>
          </div>
        </div>
      </div>
      <div className="modal  fade" id="accountDeleteModal"  aria-hidden="true" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Account Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p>Are you sure want to delete your account?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAccountDelete}>
                  Yes, Delete it.
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile
