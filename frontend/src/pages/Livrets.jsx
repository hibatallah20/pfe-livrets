import React from 'react';
import '../styles/Livrets.css';
import OIP from '../assets/OIP.webp'
import image1 from '../assets/img1.jpeg';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.jpeg';
import Navbar from '../components/Navbar';
import { FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Livrets = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar />
    <h1 className="livrets-main-title">Livrets</h1>
    
    <div className="livrets-wrapper">
      <div className="livrets-container" onClick={() => navigate("/livret1/step1")} >
        <FaFileAlt className="livrets-icon" />
        <h2 className="livrets-title">Livret 1 :</h2>
        <p className="livrets-subtitle">Déterminer quel type d'emploi je peux rechercher</p>
      </div>
      <div className="livrets-container"  onClick={() => navigate("/livret2/step1")} >
         <FaFileAlt className="livrets-icon" />
        <h2 className="livrets-title">Livret 2 :</h2>
        <p className="livrets-subtitle">Découvrir les opportunités de formation</p>
      </div>
      <div className="livrets-container" onClick={() => navigate("/livret3/pg1")} >
         <FaFileAlt className="livrets-icon" />
        <h2 className="livrets-title">Livret 3 :</h2>
        <p className="livrets-subtitle">Construis et développe ton réseau et tes relations.</p>
      </div>
      </div>
    </>
  );
};

export default Livrets;
