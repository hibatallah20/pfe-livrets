import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Objectif de l’étape",
    text: "Aider le chercheur d’emploi à identifier ses compétences et aptitudes et à les relier aux emplois disponibles"
  },
  {
    number: "02",
    title: "Identification des compétences clés",
    text: "• Compétences techniques (comme l’utilisation de logiciels, les langues étrangères, les spécialisations)\n• Compétences comportementales (travail en équipe, leadership, communication)\n• Compétences transférables d’un emploi à un autre"
  },
  {
    number: "03",
    title: "Utilisation des tests d’orientation professionnelle",
    text: "• Passer le test RIASEC pour connaître ton type de personnalité professionnelle (Réaliste, Investigateur, Artistique, Social, Entreprenant, Conventionnel)\n• Analyser les résultats du test et les associer aux emplois adaptés"
  },
  {
    number: "04",
    title: "Création d’un profil de compétences",
    text: "• Rédiger une liste des compétences clés correspondant aux exigences du marché\n• Identifier les compétences à développer et mettre à jour\n• Élaborer un plan de formation pour améliorer les compétences manquantes"
  },
  {
    number: "05",
    title: "Analyse des expériences professionnelles passées",
    text: "• Identifier les rôles et responsabilités antérieurs et leur adéquation avec les nouvelles opportunités d’emploi\n• Tirer parti des expériences de succès passées pour améliorer ta progression vers des emplois futurs"
  }
];


const Step5 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Étape 2 : Analyse des compétences</h1>
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
                <SideLeftRightButtons nextPage="/livret1/step6" />
                <SideLeftRightButtons prevPage="/livret1/step4" />
            </div>
        </>
    )
}

export default Step5;
