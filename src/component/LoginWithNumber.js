import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AlertContext from '../context/AlertContext'
import { useSendLoginOtpMutation,useVerifyLoginOtpMutation } from '../reducers/userSlice'
import { setUserData } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
const LoginWithNumber = () => {
  const { setAlert } = useContext(AlertContext)
  const dispatch = useDispatch()
  //send otp
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [sendLoginOtp,isLoading] = useSendLoginOtpMutation()
  const [verifyLoginOtp,isVerifyLoading] = useVerifyLoginOtpMutation()
  const navigate = useNavigate()
  const sendData = {
    name: name,
    phoneNumber: phoneNumber
  }
  const canSend = Object.values(sendData).every(Boolean)
  const handleSendOtp = async (e) => {
    e.preventDefault()
    if (canSend) {
      let otpResult = await sendLoginOtp(sendData)
      if(otpResult.data.success){
        setAlert({show:true,message:otpResult.data.message})
        setOtpSent(true)
      }else{
       setAlert({show:true,message:otpResult.data.message})
      }
    } else {
      setAlert({ show: true, message: "Please enter name and phone number" })
    }
  }
  //verify otp
  const otpInitial = ['', '', '', '', '', '']
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };
  const canVerify = Object.values(otp).every(Boolean)
  const handleVerifyOtp = async (e)=>{
    e.preventDefault()
    const body = {
      ...sendData,
      otp:otp
    }
    if(canVerify){
      const  verifyResult =await  verifyLoginOtp(body)
      if(verifyResult.data.success){
        let user = {
          _id:verifyResult.data.data.user._id,
          email:verifyResult.data.data.user.email,
          password:verifyResult.data.data.user.password,
          name:verifyResult.data.data.user.name,
          phoneNumber:verifyResult.data.data.user.phoneNumber,
          photo:verifyResult.data.data.user.photo,
          role:verifyResult.data.data.user.role,
          isDeleted:verifyResult.data.data.user.isDeleted,
          theme:verifyResult.data.data.user.theme,
          userToken:verifyResult.data.data.userToken
        }
        dispatch(setUserData(user))
        setAlert({show:true,message:verifyResult.data.message})
        setOtp(otpInitial)
        navigate('/')
      }else{
       setAlert({show:true,message:verifyResult.data.message})
      }
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
            <button onClick={handleSendOtp} disabled={!isLoading || !canSend} className="btn btn-primary ">
              Send Otp
            </button>
          </div>
          <div className='mt-4'>
            <div className="mb-2">
              <label htmlFor="otp" className="form-label">
                Enter otp sent on above phone number
              </label>
              <div className='d-flex justify-content-center align-items-center gap-1'>
              {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        className='p-1 text-center shadow-none rounded form-control'
                        style={{"width": "60px"}}
                        disabled={!otpSent}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
              </div>
            </div>
            <div className='row px-2 mt-2 mb-2'>
              <button type='button' onClick={handleVerifyOtp} disabled={!otpSent || !canVerify || !isVerifyLoading} className="btn btn-success">
                Verify otp
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