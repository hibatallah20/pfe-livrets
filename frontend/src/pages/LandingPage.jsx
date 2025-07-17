import React from 'react'
import '../styles/Landingpage.css'
import Navbar from '../components/Navbar.jsx'
import { FaArrowRight } from "react-icons/fa";
import cvGen from '../assets/cvGen.png'
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="landingcontainer">
        {/* Content */}
        <main className="landingmain">
            <section className="heroSection">
                <div className="heroGrid">
                    {/* Left content */}
                    <div className="heroLeft">
                       
                        <h1 className="heading">
                            <span className="headingText">CVGen par Advanced Solutions</span>
                            <span className="headingGradient">La solution Marocaine pour <br />créer votre CV</span>
                            <span className="headingText">En Toute Simplicité</span>
                        </h1>

                        <p className="description">
                            Notre outil a été pensé pour vous accompagner pas à pas dans la création de votre CV,tout en garantissant une prise en main rapide et intuitive.Faites le choix de la simplicité et donnez un nouvel élan à votre carrière dès aujourd'hui!
                        </p>

                        <div >
                            <button  className="primaryButton" onClick={()=>navigate('/dashboard')}>
                                <div className="primaryButtonOverlay"></div>
                                <span className="primaryButtonContent">
                                    Commencer la création
                                    <FaArrowRight className="primaryButtonIcon" size={18}/>
                                </span>
                            </button>

                          
                        </div>

                    </div>
                    {/* Right side */}
                    <div className="heroIllustration">
                    <div className="heroIllustrationBg"></div>
                    <div className="heroIllustrationContainer">
                    <img src={cvGen} alt="Professional Resume Illustration"  />
                    </div>
                    </div>

                </div>

            </section>
            {/* features section */}
           <section >
          <div className="featuresContainer">
          <div className="featuresHeader">
         <h2 className="featureTitle">POINTS FORTS DE LA PLATEFORME</h2>
        </div>
        <div className="featuresGrid">
      <div className="featureCard ">
        <h3 className="featureTitle">Rapide</h3>
        <p className="featureDescription">
          Créez des CV professionnels en moins de 5 minutes grâce à notre processus simplifié.
        </p>
      
      </div>

      <div className="featureCard ">
        <h3 className="featureTitle">Modèles professionnels</h3>
        <p className="featureDescription">
          Choisissez parmi des dizaines de modèles approuvés par les recruteurs et adaptés à chaque secteur.
        </p>
     
      </div>

      <div className="featureCard ">
        <h3 className="featureTitle">Exportation instantanée</h3>
        <p className="featureDescription">
          Téléchargez des fichiers PDF de haute qualité avec un formatage parfait en un clic.


        </p>
        
      </div>
    </div>
  </div>
</section>
        </main>
        
    </div>
    </>
  )
}

export default LandingPage