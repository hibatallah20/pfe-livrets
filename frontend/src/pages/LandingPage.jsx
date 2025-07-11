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
                        <div className="tagline">
                            Profrssional Resume Builder
                        </div>

                        <h1 className="heading">
                            <span className="headingText">Craft</span>
                            <span className="headingGradient">Professional</span>
                            <span className="headingText">Resumes</span>
                        </h1>

                        <p className="description">
                            Create job-winning resumes with expertly designed templates. ATS-friendly, recruiter-approved, and tailored to your career goals.
                        </p>

                        <div >
                            <button  className="primaryButton" onClick={()=>navigate('/dashboard')}>
                                <div className="primaryButtonOverlay"></div>
                                <span className="primaryButtonContent">
                                    Start Building
                                    <FaArrowRight className="primaryButtonIcon" size={18}/>
                                </span>
                            </button>

                            <button className="secondaryButton" onClick={()=>navigate('/dashboard')}>
                                View Templates
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
        <h3 className="featureTitle">Lightning Fast</h3>
        <p className="featureDescription">
          Create professional resumes in under 5 minutes with our streamlined process
        </p>
      
      </div>

      <div className="featureCard ">
        <h3 className="featureTitle">Pro Templates</h3>
        <p className="featureDescription">
          Choose from dozens of recruiter-approved, industry-specific templates
        </p>
     
      </div>

      <div className="featureCard ">
        <h3 className="featureTitle">Instant Export</h3>
        <p className="featureDescription">
          Download high-quality PDFs instantly with perfect formatting
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