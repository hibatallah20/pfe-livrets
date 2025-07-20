import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    title:"Le marché du travail ouvert",
    text: "Le marché caché fait référence aux opportunités d'emploi qui ne sont pas annoncées publiquement par les canaux traditionnels comme les sites web ou les journaux. Ces postes sont pourvus par le biais de **réseaux de relations personnelles, recommandations, réseaux professionnels, candidatures directes ou recrutements internes** au sein des entreprises.",
   
  },
  {
    title:"Le marché ouvert de l’emploi regroupe toutes les opportunités professionnelles annoncées publiquement et accessibles à tous, que ce soit en ligne (sites d’emploi, LinkedIn, annonces d’entreprises), dans les journaux, ou via les agences de placement. Tout le monde peut consulter et postuler à ce type d’offres.",
    text: "le marché du travail caché",
  },
];


const Pg2 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Le marché du travail ouvert et le marché du travail caché</h1>
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
                
                <SideLeftRightButtons nextPage="/livret3/pg3" />
                <SideLeftRightButtons prevPage="/livret3/pg1" />
            </div>
        </>
    )
}

export default Pg2;
