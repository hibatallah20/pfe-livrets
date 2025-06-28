import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import '../styles/resetPassword.css'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';


export const ResetPassword = () => {

  const {backendUrl} = useContext(AppContent)
  axios.defaults.withCredentials = true;
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isEmailSent, setIsEmailSent] = useState('')
  const [otp, setOtp] = useState(0)
  const [isOtpSubmited, setIsOtpSubmited] = useState(false)

  const inputRefs = React.useRef([])
  
    const handleInput = (e, index) => {
       if(e.target.value.length > 0 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
       }
    }
    const handleKeyDown = (e, index) => {
      if(e.key === 'Backspace' && e.target.value === '' && index > 0){
         inputRefs.current[index - 1].focus();
      }
    }
  
    const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  }

  const onSubmitEmail =  async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post(backendUrl + '/api/auth/send-reset-otp', {email})
      data.success ? toast.success(data.message) : toast.error(data.message)
      data.success && setIsEmailSent(true)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const onSubmitOTP = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map(e => e.value)
    setOtp(otpArray.join(''))
    setIsOtpSubmited(true)

  }

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(backendUrl + '/api/auth/reset-password', {email, otp, newPassword})
      data.success ? toast.success(data.message) : toast.error(data.message)
      data.success && navigate('/login') 
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="reset">
    <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="reset-logo" />
    {/* enter email id */}

    {!isEmailSent && 
    <form onSubmit={onSubmitEmail} className="forms-container">
      <h1 className="titles">Reset Password</h1>
    <p className="subtitles">Enter your registered email address.</p>
    <div className="input-container">
      <img src={assets.mail_icon} alt="" />
      <input type="email" placeholder='Email id' 
      value={email} onChange={e => setEmail(e.target.value)} required/>
    </div>
    <button className="submit-btn">Submit</button>


    </form>

    }

    {/* otp input form */}
    {!isOtpSubmited && isEmailSent &&
    <form  onSubmit={onSubmitOTP} className="formees-container">
    <h1 className="titlees">Reset Password OTP</h1>
    <p className="subtitlees">Enter the 6-digit code sent to your email id.</p>
    <div className="otps-container" onPaste={handlePaste}>
      {Array(6).fill(0).map((_, index) => (
        <input
        type="text"
        maxLength="1"
        key={index}
        required
        className="otp-input"
        ref={e => inputRefs.current[index] = e}
        onInput={(e) => handleInput(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}

      />
      ))}
    </div>
    <button className="verifys-btn">Submit</button>
    </form>
    }

    {/* enter new password */}
    {isOtpSubmited && isEmailSent && 
    <form onSubmit={onSubmitNewPassword} className="f-container">
      <h1 className="big-text">New Password</h1>
    <p className="small-text">Enter the new password below.</p>
    <div className="i-container">
      <img src={assets.lock_icon} alt="" />
      <input type="password" placeholder='Password' 
      value={newPassword} onChange={e => setNewPassword(e.target.value)} required/>
    </div>
    <button className="submites-btn">Submit</button>
    </form>
    }
        
    </div>
    
  )
}

export default ResetPassword
