import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {

    title: "Réseau personnel, familial et social",
    text: " Les personnes de ce type de réseau peuvent te donner des conseils professionnels, te recommander pour des postes ou te connecter à des opportunités d’emploi.",
  },
  {

    title: "Réseaux professionnels",
    text: "• Contacte-les de manière professionnelle et demande leurs conseils ou opportunités dans leurs entreprises\n• Connecte-toi sur LinkedIn avec des responsables d’entreprises et demande-leur des informations sur les offres d’emploi\n• Crée un profil professionnel, connecte-toi avec des personnes de ton domaine et interagis avec leur contenu\n• Ils t’aident à atteindre des entreprises et des personnes éloignées géographiquement ou que tu ne connais pas personnellement\n• Lors d’un salon de l’emploi, tu peux parler directement à un responsable recrutement et lui présenter ton CV"
  },
  {

    title: "Réseaux et événements professionnels",
    text: " Ils te donnent l’occasion de rencontrer de nouvelles personnes dans ton domaine et d’élargir ton réseau."
  },

];


const Pg4 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Le réseau professionnel et personnel</h1>
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
            
                

                <SideLeftRightButtons prevPage="/livret3/pg3" />
            </div>
        </>
    )
}

export default Pg4;
