import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/AlertContext'
import { UpdateAdminData, useAdminSelector} from '../../reducers/adminReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdatePasswordMutation } from "../../reducers/adminSlice"
 import ErrorElement from "../ErrorElement"
const AdminChangePassword = () => {
    const user = useSelector(useAdminSelector)
    const formInitial = {
        currentPassword: '',
        newPassword:'',
        confirmNewPassword:'',
        _id:user?._id
    }
    const [inputs, setInputs]  = useState(formInitial)
   const {setAlert} = useContext(AlertContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [updatePassword,isLoading,isError] = useUpdatePasswordMutation()
  if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
   const canUpdate = Object.values(inputs).every(Boolean)
    const handleInputChange = (e)=>{
        e.preventDefault();
    setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const handleCancelClick = (e)=>{
        e.preventDefault()
        navigate('/admin/dashboard')
      }
    const handleUpdateClick = async (e)=>{
        e.preventDefault();
        console.log('form submit',inputs)
        if(canUpdate){
            if(inputs.newPassword !== inputs.confirmNewPassword){
                setAlert({show:true,message:'New password and confirm password password must match!'})
            }
            else{
                let updateResult = await updatePassword(inputs)
                if(updateResult.data.success){
                    dispatch(UpdateAdminData(updateResult.data.data))
                    setAlert({show:true,message:updateResult.data.message})
                }else{
                 setAlert({show:true,message:updateResult.data.message})
                }
               setInputs(formInitial)
            }
        }else{
            setAlert({show:true,message:'Please fill all fields!'})
        }
    }
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
           onChange={handleInputChange}
           value={inputs.currentPassword}
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
            onChange={handleInputChange}
           value={inputs.newPassword}
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
            onChange={handleInputChange}
           value={inputs.confirmNewPassword}
          />
        </div>
        <div className="row px-2 gy-2">
          <button  className="btn btn-primary " disabled={!isLoading} onClick={handleUpdateClick}>
            Update Password
          </button>
          <button  className="btn btn-secondary" onClick={handleCancelClick}>
              Cancel
            </button>
        </div>
      </form>
      </div>
    </div>
  </>
  )
}

export default AdminChangePassword