import React, { useContext, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForgetPasswordMutation } from '../reducers/userSlice'
import AlertContext from '../context/AlertContext'
import ErrorElement from "./ErrorElement"
function Forgetpassword() {
  const { setAlert } = useContext(AlertContext)
  const [email, setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [sendNewPassword,isLoading,isError] = useForgetPasswordMutation()
  const navigate = useNavigate()
  const sendData = {
    email: email,
    phoneNumber: phoneNumber
  }
  if(isError){
    return <ErrorElement message="Something went wrong!!" />
  }
  const handleSubmitClick =  async (e)=>{
    e.preventDefault()
    console.log('form submit',sendData)
    if(email !== '' || phoneNumber !== ''){
      const sendPassword = await sendNewPassword(sendData)
      console.log('sendPassword',sendPassword.data)
      if(sendPassword.data.success){
        setAlert({show:true,message:sendPassword.data.message})
        setEmail('')
        setPhoneNumber('')
        navigate('/login')
      }else{
       setAlert({show:true,message:sendPassword.data.message})
      }
    }else {
      setAlert({ show: true, message: "Please enter email or phone number" })
    }
  }
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
        <div className="">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email" name='email'
             placeholder="Email"
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Provide valid email address
          </div>
        </div>
        <div className='text-center'>Or</div>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
           Phone Number
          </label>
          {/* <input
            type="number"
            className="form-control"
            name='phoneNumber'
            id="phoneNumber" minLength={10} maxLength={10}
             placeholder="Phone Number"
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
        <div className="row px-2">
          <button type="submit" disabled={!isLoading} onClick={handleSubmitClick} className="btn btn-primary ">
            Send new Password
          </button>
        </div>
      </form>
      <div className="float-end my-1">
           <span> new to shopNow? </span>
            <Link className="text-decoration-none" to="/signUp">
                Register Here
            </Link>
        </div>
    </div>
  </div>
  )
}

export default Forgetpassword