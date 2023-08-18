import React, { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { UpdateUserData, clearUserAndToken, useUserSelector } from "../reducers/userReducer"
import AlertContext from "../context/AlertContext"
import { useDeleteAccountMutation, useUpdateProfileMutation } from "../reducers/userSlice"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import ErrorElement from "./ErrorElement"
const Profile = () => {
  const user = useSelector(useUserSelector)
  const [inputs, setInputs] = useState(user||{})
  const [phoneNumber,setPhoneNumber] = useState(user?.phoneNumber || '')
  const { setAlert } = useContext(AlertContext)
  const navigate = useNavigate()
  const [update, isLoading,isError] = useUpdateProfileMutation()
  const [deleteAccount,isDeleteLoading,isDeleteError] = useDeleteAccountMutation()
  const dispatch = useDispatch()
  useEffect(() => {
    setInputs(user)
  }, [user])
// let formData = new FormData()
  const handleInputChange = (e) => {
    e.preventDefault()
    if(e.target.name === 'photo'){
      console.log('e.target.files[0]',e.target.files[0])
      setInputs({ ...inputs, [e.target.name]: e.target.files[0],[phoneNumber]:phoneNumber})
      // formData.append( e.target.name, e.target.files[0]);
    }else{
      setInputs({ ...inputs, [e.target.name]: e.target.value,[phoneNumber]:phoneNumber })
      // formData.append( e.target.name, e.target.files[0]);
    }
  }
  const handleCancelClick = (e) => {
    e.preventDefault()
    navigate("/")
  }
  const handleUpdateClick = async (e) => {
    e.preventDefault()
    // console.log('inputs',inputs)
    // const updateResult = await update(inputs)
    // let formData = new FormData()
    // const entries = Object.entries(inputs);
    // console.log('entries',entries)
    // for (const [key, value] of entries) {
      //   formData.append(`${key}`, value);
      //   console.log('key value',key ,':',value)
      // }
     let formData = new FormData(document.getElementById('uploadProfileForm'))
    for (const input in inputs) {
        formData.set(input, inputs[input]);
        formData.set("phoneNumber", phoneNumber);
      }
    // console.log('formData file',formData.get('photo'))
    //  console.log('formData file',formData.get('phoneNumber'))
    const updateResult = await update(formData)
    if (updateResult.data.success) {
      dispatch(UpdateUserData(updateResult.data.data))

      // setInputs(updateResult.data.data) how to set new data in form should i reload ?
      setAlert({ show: true, message: updateResult.data.message })
    } else {
      setAlert({ show: true, message: updateResult.data.message })
    }
  }
  const handleAccountDelete = async (e)=>{
    e.preventDefault()
    const result = await deleteAccount({_id:user._id})
    console.log('delete account result',result)
    if (result.data.success) {
      dispatch(clearUserAndToken())
      navigate('/') // error - navigate to /login after clearUserAndToken() due to auth services instead of given naviagte('/)
      setAlert({ show: true, message: result.data.message })
    } else {
      setAlert({ show: true, message: result.data.message })
    }
  }
  if(isError|| isDeleteError){
    return <ErrorElement message={`Something Went Wrong`} />
  }
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center my-5">
        <div className="shadow-lg rounded p-3">
          <h5 className="text-center">Account Detail</h5>
          <form onSubmit={handleUpdateClick} id="uploadProfileForm" encType="multipart/form-data">
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
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              {/* <input
                type="number"
                className="form-control"
                name="phoneNumber"
                id="phoneNumber"
                minLength={10}
                maxLength={10}
                placeholder="Phone Number"
                value={inputs.phoneNumber}
                onChange={handleInputChange}
              /> */}
                <PhoneInput
              country={'in'}
              value={phoneNumber}
              onChange={(number) => setPhoneNumber(number)}
              inputProps={{
                name: 'phoneNumber',
                required: true,
                className: 'form-control',
                autoFocus: true,
              }}
              inputStyle={{
                width: "100%",
              }}
              dropdownStyle={{
                color: 'black'
              }}/>
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
              </div>
            </div>
            <div className="row px-2 gy-2">
              <button
                className="btn btn-primary"
                disabled={!isLoading}
                type="submit"
              >
                Update
              </button>
              <button className="btn btn-secondary" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </form>
          <div className="text-center float-start my-1">
            <Link className="text-decoration-none" to="/user/changePassword">
              Change Password?
            </Link>
          </div>
          <div className="text-center float-end my-1">
            <button
              className="btn btn-sm btn-outline-danger" type="button"
              data-bs-toggle="modal" data-bs-target="#accountDeleteModal"
            >
              Delete Account!
            </button>
          </div>
        </div>
      </div>
      <div className="modal fade" id="accountDeleteModal"  aria-hidden="true" tabIndex={-1}>
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
                <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" disabled={!isDeleteLoading} onClick={handleAccountDelete}>
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
