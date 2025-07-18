import React from 'react';
import '../styles/Livrets.css';
import OIP from '../assets/OIP.webp'
import image1 from '../assets/img1.jpeg';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.jpeg';
import Navbar from '../components/Navbar';
import { FaFileAlt } from 'react-icons/fa';

const Livrets = () => {
  return (
    <>
    <Navbar />
    <h1 className="livrets-main-title">Livrets</h1>
    
    <div className="livrets-wrapper">
      <div className="livrets-container">
        <FaFileAlt className="livrets-icon" />
        <h2 className="livrets-title">Livret 1 :</h2>
        <p className="livrets-subtitle">Construis et élargis ton réseau et tes relations</p>
      </div>
      <div className="livrets-container">
         <FaFileAlt className="livrets-icon" />
        <h2 className="livrets-title">Livret 2 :</h2>
        <p className="livrets-subtitle">Découvrir les opportunités de formation</p>
      </div>
      <div className="livrets-container">
         <FaFileAlt className="livrets-icon" />
        <h2 className="livrets-title">Livret 3 :</h2>
        <p className="livrets-subtitle">Découvrir les opportunités d’emploi</p>
      </div>
      </div>
    </>
  );
};

export default Livrets;
