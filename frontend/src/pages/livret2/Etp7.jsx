import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Objectif de l'étape",
    text: "Tu cherches une opportunité de formation à distance pour développer tes compétences et augmenter tes chances professionnelles ? La formation à distance est une occasion d’acquérir de nouvelles compétences recherchées sur le marché du travail !",
  },
  {
    number: "02",
    title: "Avantages de la formation",
    text: "Un moyen efficace d’apprendre sans avoir besoin de te déplacer - Formations gratuites (techniques, informatiques, linguistiques...) - Programmes nationaux et internationaux avec des connaissances constamment mises à jour - Flexibilité dans l’apprentissage"
  },
  {
    number: "03",
    title: "Académie numérique",
    text: "Alphabétisation numérique : - Outils numériques de base - Sécurité sur Internet - Création d’un site web - E-commerce - Principales tendances technologiques - Métiers du numérique - Fondamentaux de la programmation numérique - Télétravail"
  },
  {
    number: "04",
    title: "Plateforme Coursera",
    text: "Résolution de problèmes et prise de décisions efficaces - Introduction à l’analyse de données avec IBM - Introduction au développement de l’interface utilisateur - Programmation en Python"
  },
  {
    number: "05",
    title: "Inscription",
    text: "https://advanced-software.ma/ceps/inscription_coursera - https://academiaragmya.gov.ma/sign-up/"
  },
];



const Etp7 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Formations à distance</h1>
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
            
                

                <SideLeftRightButtons prevPage="/livret2/etp6" />
            </div>
        </>
    )
}

export default Etp7;
