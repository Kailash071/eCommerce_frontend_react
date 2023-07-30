import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../context/AlertContext'
import { UpdateUserData, useUserSelector } from '../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdatePasswordMutation } from '../reducers/userSlice'

const ChangePassword = () => {
    const user = useSelector(useUserSelector)
    const formInitial = {
        currentPassword: '',
        newPassword:'',
        confirmNewPassword:'',
        _id:user._id
    }
    const [inputs, setInputs]  = useState(formInitial)
   const {setAlert} = useContext(AlertContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [updatePassword,isLoading] = useUpdatePasswordMutation()
   const canUpdate = Object.values(inputs).every(Boolean)
    const handleInputChange = (e)=>{
        e.preventDefault();
    setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const handleCancelClick = (e)=>{
        e.preventDefault()
        navigate('/')
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
                    dispatch(UpdateUserData(updateResult.data.data))
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

export default ChangePassword