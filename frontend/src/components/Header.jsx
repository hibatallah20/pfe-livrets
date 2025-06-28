import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import '../styles/header.css'; 
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';


const Header = () => {

  const {userData} = useContext(AppContent)

  

  const navigate = useNavigate()

  return (
    <div className="header-container">
      <img src={assets.header_img} alt="Header" className="header-img" />
      <h1 className="main-title">
        Hey {userData ? userData.name : 'Developer'} ! {' '}
        <img src={assets.hand_wave} alt="hand wave" className="hand-wave-icon" />
      </h1>
      <h1>Welcome to our app</h1>
      <p className="subtitle">Let's start with a quick product tour</p>
      <button onClick={()=> navigate('/signup')}
      className="get-started-btn">Get Started</button>
    </div>
  );
};

export default Header;
