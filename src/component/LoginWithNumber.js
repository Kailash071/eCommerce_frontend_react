import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AlertContext from '../context/AlertContext'
import { useSendLoginOtpMutation } from '../reducers/userSlice'
const LoginWithNumber = () => {
  const { setAlert } = useContext(AlertContext)
  //send otp
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [sendLoginOtp,isLoading] = useSendLoginOtpMutation()
  const navigate = useNavigate()
  const handleSendOtp = async (e) => {
    e.preventDefault()
    const sendData = {
      name: name,
      phoneNumber: phoneNumber
    }
    console.log('sendData', sendData)
    const canSend = Object.values(sendData).every(Boolean)
    if (canSend) {
      let otpResult = await sendLoginOtp(sendData)
      console.log('otpResult',otpResult.data)
      if(otpResult.data.success){
        setAlert({show:true,message:otpResult.data.message})
        setOtpSent(true)
        setName('')
        setPhoneNumber('')
        navigate('/')
      }else{
       setAlert({show:true,message:otpResult.data.message})
      }
    } else {
      setAlert({ show: true, message: "Please enter name and phone number" })
    }
  }
  //verify otp
  const otpInitial = {
    otpDigit1:'',
    otpDigit2:'',
    otpDigit3:'',
    otpDigit4:'',
    otpDigit5:'',
    otpDigit6:''
  }
  const [otpInputs, setOtpInputs] = useState(otpInitial)
  const handleOtpChange = (e)=>{
    e.preventDefault()
    setOtpInputs({...otpInputs,[e.target.name]:e.target.value})
  }
  const canVerify = Object.values(otpInputs).every(Boolean)
  const handleVerifyOtp = (e)=>{
    e.preventDefault()
    console.log('otp--->',otpInputs)
    if(canVerify){
      setOtpInputs(otpInitial)
    }else{
      setAlert({ show: true, message: "Please enter valid otp" })
    }
  }
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
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number
            </label>
            {/* <div className='d-flex  justify-content-between align-items-center gap-2'>
            <select name="country" id="country" className='form-select  w-50'>
                <option value="+91">IN (+91)</option>
                <option value="+92">AU(+92)</option>
                <option value="+93">US (+93)</option>
            </select>
            <input
            type="number"
            className="form-control"
            id="phoneNumber"
            min={10}
            max={10}
           placeholder="Enter valid number" name="phoneNumber"
          />
            </div> */}
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
              }}
            />
          </div>
          <div className="row px-2">
            <button onClick={handleSendOtp} className="btn btn-primary ">
              Send Otp
            </button>
          </div>
          <div className='mt-4'>
            <div className="mb-2">
              <label htmlFor="otp" className="form-label">
                Enter otp sent on above phone number
              </label>
              <div className='d-flex justify-content-center align-items-center gap-1'>
                <input
                  type="number"
                  className="p-1 text-center shadow-none rounded form-control"
                  min={1}
                  max={1}
                  name="otpDigit1"
                  id='otpDigit1'
                  disabled={!otpSent}
                  value={otpInputs.otpDigit1}
                  onChange={handleOtpChange}
                />
                <input
                  type="number"
                  className="p-1 text-center shadow-none rounded form-control"
                  min={1}
                  max={1}
                  name="otpDigit2"
                  id='otpDigit2'
                  disabled={!otpSent}
                  value={otpInputs.otpDigit2}
                  onChange={handleOtpChange}
                />
                <input
                  type="number"
                  className="p-1 text-center shadow-none rounded form-control"
                  min={1}
                  max={1}
                  name="otpDigit3"
                  id='otpDigit3'
                  disabled={!otpSent}
                  value={otpInputs.otpDigit3}
                  onChange={handleOtpChange}
                />
                <input
                  type="number"
                  className="p-1 text-center shadow-none rounded form-control"
                  min={1}
                  max={1}
                  name="otpDigit4"
                  id='otpDigit4'
                  disabled={!otpSent}
                  value={otpInputs.otpDigit4}
                  onChange={handleOtpChange}
                />
                 <input
                  type="number"
                  className="p-1 text-center shadow-none rounded form-control"
                  min={1}
                  max={1}
                  name="otpDigit5"
                  id='otpDigit5'
                  disabled={!otpSent}
                  value={otpInputs.otpDigit5}
                  onChange={handleOtpChange}
                />
                 <input
                  type="number"
                  className="p-1 text-center shadow-none rounded form-control"
                  min={1}
                  max={1}
                  name="otpDigit6"
                  id='otpDigit6'
                  disabled={!otpSent}
                  value={otpInputs.otpDigit6}
                  onChange={handleOtpChange}
                />
              </div>
            </div>
            <div className='row px-2 mt-2 mb-2'>
              <button type='button' onClick={handleVerifyOtp} disabled={!otpSent || !canVerify} className="btn btn-success">
                Verify otp
              </button>
            </div>
            <div className="d-flex justify-content-end mt-1">
              <button disabled={!otpSent || !canVerify} className="btn btn-sm btn-outline-primary">
                send again?
              </button>
            </div>
          </div>
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