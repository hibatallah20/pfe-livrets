import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import '../styles/header.css'; 
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import OIP from '../assets/OIP.webp'


const Header = () => {

  const {userData} = useContext(AppContent)
  const navigate = useNavigate()


  return (
    <>
      {!userData ? (
        <>
        <div className="headers-container">
          <div className="header-text">
          <h1>Boostez votre avenir</h1>
          <p className="firstsubtitle">Trouvez des offres d'emploi et créez votre CV facilement.<br />
            Explorez nos livrets pour avancer dans votre carrière.</p>
          <button onClick={() => navigate('/signup')} className="get-started-btn">
            Commencer
          </button>
          </div>
        <img src={OIP} alt="Header" className="header-img" />
        </div>
        </>
      ) : (
        <div className="header-container">
        <div className="accueil">
            <div className="content-wrapper">
                <div className="header-section">
                    <h1 className="main-title">Mon Portfolio Digital</h1>
                    <p className="subs">Gestion complète de votre développement professionnel</p>
                </div>

               <div className="modules-grid">
                    {/* Bilan de compétences */}
                    <div className="module-box">
                        <div className="module-content">
                            <div className="module-header">
                                <div className="icon-box blue-bg">
                                    <svg className="icon blue-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h2 className="module-title">Offres d’emploi</h2>
                            </div>
                            <p className="module-desc">
                            Trouvez des opportunités adaptées à votre profil parmi des centaines d’offres actualisées chaque jour. Postulez facilement et suivez l’état de vos candidatures.
                            </p>
                        </div>
                        <div className="module-footer">
                            <button onClick={() => navigate("/joblist")} className="module-link blue-link">Rechercher des offres → </button>
                        </div>
                    </div>

                    {/* CV */}
                    <div className="module-box">
                        <div className="module-content">
                            <div className="module-header">
                                <div className="icon-box green-bg">
                                    <svg className="icon green-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h2 className="module-title">Curriculum Vitae</h2>
                            </div>
                            <p className="module-desc">
                                Création et optimisation de CV avec modèles ATS-friendly. Analyse de mots-clés,
                                suggestions de mise en forme et export multi-formats (PDF, DOCX, JSON).
                            </p>
                        </div>
                        <div className="module-footer">
                            <button className="module-link green-link" onClick={() => navigate("/resume")} >Créer mon CV →</button>
                        </div>
                    </div>

                    {/* Livrets */}
                    <div className="module-box">
                        <div className="module-content">
                            <div className="module-header">
                                <div className="icon-box purple-bg">
                                    <svg className="icon purple-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h2 className="module-title">Livrets des participants</h2>
                            </div>
                            <p className="module-desc">
                                Bibliothèque professionnelle avec guides sectoriels, fiches métiers et modèles de
                                documents. Mises à jour régulières selon les tendances du marché.
                            </p>
                        </div>
                        <div className="module-footer">
                            <button className="module-link purple-link" onClick={() => navigate("/livrets")} > Explorer les ressources → </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Header;