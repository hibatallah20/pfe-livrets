import React, { useState } from 'react';
import { useContext } from "react";
import { assets } from '../assets/assets';
import '../styles/signup.css';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

import { AppContent } from "../context/AppContext.jsx";


const Signup = () => {
  
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);
  const navigate = useNavigate()
  

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('')
  const [cin, setCin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignupHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl + '/api/auth/register', {
        cin,
        name,
        email,
        password,
      });

      if (data.success) {
        setIsLoggedin(true);
        getUserData()
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
       toast.error(data.message);
    }
  };
 

  return (
    <div className="login-page">
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" className="logo" />
      <div className="login-container">
        <h2>Create Account</h2>
        <p>Create your account</p>

        <form onSubmit={onSignupHandler}>
          {/* Full Name */}
          <div className="form-group">
            <img src={assets.person_icon} alt="" />
            <input 
            onChange={e => setName(e.target.value)}
            value={name}
            type="text" placeholder="Full Name" required />
          </div>

            {/*CIN*/}
          <div className="form-group">
            <img src={assets.mail_icon} alt="" />
            <input 
            onChange={e => setCin(e.target.value)}
            value={cin}
            type="text" placeholder="cin" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <img src={assets.mail_icon} alt="" />
            <input
            onChange={e => setEmail(e.target.value)}
            value={email} 
            type="email" placeholder="Email ID" required />
          </div>

          {/* Password */}
           <div className="form-group password-group">
            <img src={assets.lock_icon} alt="" />
           <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
           />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </span>
          </div>
          <button className="sign-up-button">Sign up</button>

           <p className="signup-text">
           Already have an account?{' '}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
