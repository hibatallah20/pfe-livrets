import React, { useState } from 'react';
import '../../styles/livret1.step1.css'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Step1 = () => {
   const [sidebarOpen, setSidebarOpen] = useState(true);

  

  return (
    <>
      <Navbar /> 

      <div className="page-container">
       <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <div className="content">
          <div className="background-section">
            <h3 className="small-title">Ateliers de recherche d'emploi</h3>
            <h1 className="main-title">Atelier : Construis et élargis ton réseau et tes relations</h1>

            <div className="description-box">
              <strong>? Tu veux savoir quel travail te correspond </strong><br />
              Tu cherches un emploi et tu ne sais pas par où commencer ? ✖ Participe à
              nos ateliers de formation qui vont t’apprendre comment exploiter
              le marché caché, construire ton réseau professionnel, et trouver des opportunités
              que tout le monde ne connaît pas. Fais le premier pas aujourd'hui
              et laisse le succès commencer ici !
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
