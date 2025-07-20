import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Tu cherches une opportunité pour développer tes compétences et doubler tes chances d’emploi ?",
    text: "Les formations organisées par les partenaires sont une occasion de développer tes compétences et de t’intégrer sur le marché du travail !",

  },
  {
    number: "02",
    title: "Avantages de la formation",
    text: "Formations pratiques pour t’aider à acquérir de nouvelles compétences - Programmes professionnels adaptés aux exigences des entreprises dans divers secteurs - Opportunités de stages pré-embauche en entreprise pour acquérir de l’expérience pratique - Possibilité d’obtenir un certificat reconnu qui valorise ton dossier professionnel - Suivi et accompagnement par des conseillers emploi pour faciliter ton insertion professionnelle"
  },
  {
    number: "03",
    title: "Plusieurs partenaires",
    text: "Office de la formation professionnelle - Ministère de l’artisanat - Ministère du tourisme - Ministère de l’agriculture - Secteur de la formation professionnelle - Ministère de la santé - Office de la coopération nationale - Ministère de la pêche maritime"
  },
  {
    number: "04",
    title: "Pour consulter",
    text: "Pour consulter une formation, rends-toi sur : http://advanced-software/formation/ Tu peux effectuer une recherche selon plusieurs critères (région, ville, organisme de formation...)"
  },
];



const Etp6 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Formations organisées par les partenaires</h1>
                </div>
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    direction="row-reverse"
                    justifyContent="center"
                    className="step2-grid"
                >
                    {data.map((item, index) => (
                        <Grid
                            key={index}
                            sx={{
                                gridColumn: {
                                    xs: 'span 12',
                                    sm: 'span 6',
                                    md: 'span 4',
                                },
                            }}
                            className="step2-grid-item"
                        >
                            <CardMUI
                                maxWidth={480}
                                height={200}
                                number={item?.number || ""}
                                title={item?.title || ""}
                                subTitle={item?.subTitle || ""}
                                text={item?.text || ""}
                            />
                        </Grid>
                    ))}
                </Grid>
            
                
                <SideLeftRightButtons nextPage="/livret2/etp7" />
                <SideLeftRightButtons prevPage="/livret2/etp5" />
            </div>
        </>
    )
}

export default Etp6;
