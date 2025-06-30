import React from 'react';
import { assets } from '../assets/assets';
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {

  const navigate = useNavigate()
  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)

   

  const sendVerificationOtp = async() =>{

    console.log("sendVerificationOtp called");
  console.log("userData:", userData);
  console.log("userData._id:", userData?._id);
  console.log("backendUrl:", backendUrl);

    try{
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp', { userId: userData._id })

      if(data.success){
        navigate('/email-verify')
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error){
      toast.error(error.message)
    }
  }

  const logout = async () => {
    try {
        axios.defaults.withCredentials = true
        const { data } = await axios.post(backendUrl + '/api/auth/logout')
        data.success && setIsLoggedin(false)
        data.success && setUserData(false)
        navigate('/')
    } catch (error) {
      toast.error(error.message)

    }
  }


 return (
  <div className="navbar">
    <img src={assets.logo} alt="Logo" className="navbar-logo" />
    {userData && (
      <div className="avatar-circle">
        {userData.name[0].toUpperCase()}
        <div className="group">
              <ul className="menu-list">
                 <h1 className="main-title">
                       Hey {userData ? userData.name : 'Developer'} ! {' '}
                       <img src={assets.hand_wave} alt="hand wave" className="hand-wave-icon" />
                     </h1>
                {!userData.isAccountVerified && <li  onClick={sendVerificationOtp} >Verify email</li>}
                
                <li onClick={logout}>Logout</li>
              </ul>
        </div>
      </div>
    )}
  </div>

  );
};

export default Navbar;
