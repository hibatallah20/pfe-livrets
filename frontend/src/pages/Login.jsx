import React, { useState } from 'react';
import { useContext } from "react";
import { assets } from '../assets/assets';
import '../styles/login.css';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { AppContent } from "../context/AppContext";
import axios from 'axios' 
import { toast } from 'react-toastify';

const Login = () => {

  const { backendUrl, setIsLoggedin, setUserData, getUserData } = useContext(AppContent);
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [cin, setCin] = useState('')
  const [password, setPassword] = useState('')

  const onLoginHandler = async (e)=>{
        try{
            e.preventDefault();
            
            axios.defaults.withCredentials = true

            const {data} = await axios.post(backendUrl + '/api/auth/login', {
            cin,
            password,
            });

          if (data.success) {
             setIsLoggedin(true);
             await getUserData()
              navigate("/");
          } else {
             toast.error(data.message);
          }
       } catch (error) {
            toast.error(error.message);
    }
  
  }

  return (
    <div className="login-page">
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" className="logo" />
      <div className="login-container">
        <h2>Connexion</h2>
        <p>Connectez-vous à votre compte</p>

        <form onSubmit={onLoginHandler}>
            {/*CIN*/}
          <div className="form-group">
            <img src={assets.mail_icon} alt="" />
            <input
            onChange={e => setCin(e.target.value)}
            value={cin} 
            type="text" placeholder="cin" required />
          </div>


          {/* Password */}
           <div className="form-group password-group">
            <img src={assets.lock_icon} alt="" />
           <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
            required
           />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </span>
          </div>
          <p onClick={()=>navigate('/reset-password')} className="forgot-password">Mot de passe oublié ?</p>
          <button className="login-up-button"> Se connecter</button>

           <p className="signup-text">
            Vous n’avez pas de compte ?{' '}
          <Link to="/signup" className="signup-link">
            Inscription
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
