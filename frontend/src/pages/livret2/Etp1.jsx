import React from 'react'
import '../../styles/livret1.step1.css'
import Navbar from '../../components/Navbar.jsx';
import { LivretCover } from '../../components/LivretCover.jsx'
import SideLeftRightButtons from '../../components/RightLeft.jsx'


const data = {
    header: 'Livrets de recherche emploi',
    title: 'Atelier : Découvrir les opportunités de formation',
    subTitle: 'Ateliers de recherche emploi',
    text: 'Tu souhaites acquérir de nouvelles compétences mais tu ne sais pas par où commencer ?',
    content: `Participe à notre atelier de formation. Nous t’expliquerons l’importance de la formation pour développer tes compétences et te préparer au marché du travail.
Tu apprendras comment choisir la formation qui te convient, qu’elle soit en présentiel ou à distance,
et comment élaborer un plan pour renforcer tes capacités et augmenter tes chances d’emploi.`
}

const Etp1 = () => {
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
             <SideLeftRightButtons nextPage="/livret2/etp2" />
        </div>
        </>
    )
}

export default Etp1;
