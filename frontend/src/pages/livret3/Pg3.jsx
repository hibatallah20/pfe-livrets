import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    title:"Types de réseaux",
    text: "• Réseau personnel, familial et social : comprend les membres de la famille, amis, voisins et connaissances proches\n• Réseau des plateformes professionnelles : comprend LinkedIn, Instagram ou Facebook pour se connecter avec des professionnels et entreprises\n• Réseau professionnel : anciens collègues, professeurs, superviseurs ou toute personne expérimentée dans ton domaine\n• Réseau professionnel, bénévole et communautaire : activités bénévoles ou associations auxquelles tu participes\n• Réseaux et communication sociale : conférences, ateliers, salons professionnels ou formations"
   },
];


const Pg3 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Comment développer mon réseau personnel et professionnel</h1>
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
                <div className="step2-header">
                    <h2 className="step2-title2">La formation est indispensable pour développer tes compétences et suivre les exigences du marché du travail. Plus tu développes tes compétences, plus tu augmentes tes chances d’obtenir un bon emploi, de renforcer ta confiance en toi, <br />d’affronter les défis et de réaliser tes ambitions.</h2>
                </div>
                
                <SideLeftRightButtons nextPage="/livret3/pg4" />
                <SideLeftRightButtons prevPage="/livret3/pg2" />
            </div>
        </>
    )
}

export default Pg3;
