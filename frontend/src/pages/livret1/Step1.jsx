import React from 'react'
import '../../styles/livret1.step1.css'
import Navbar from '../../components/Navbar';
import { LivretCover } from '../../components/LivretCover.jsx'
import SideLeftRightButtons from '../../components/RightLeft.jsx'


const data = {
    header: 'Livrets de recherche emploi',
    title: 'Atelier : Déterminer quel type d`emploi je peux rechercher',
    subTitle: 'Ateliers de recherche emploi',
    text: 'Tu veux savoir quel travail te correspond ?',
    content: `Tu cherches un emploi et tu ne sais pas par où commencer ? ✖ Participe à
              nos ateliers de formation qui vont t’apprendre comment exploiter
              le marché caché, construire ton réseau professionnel, et trouver des opportunités
              que tout le monde ne connaît pas. Fais le premier pas aujourd'hui
              et laisse le succès commencer ici !`
}

const Step1 = () => {
    return (
      <>
      <Navbar /> 
        <div className='step1-container'>
            <LivretCover 
                header={data.header} 
                title={data.title} 
                subTitle={data.subTitle} 
                text={data.text} 
                content={data.content}
            />
             <SideLeftRightButtons nextPage="/livret1/step2" />
        </div>
        </>
    )
}

export default Step1;
