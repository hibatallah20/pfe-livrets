import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Comment définir un parcours professionnel clair",
    subTitle: "Comment définir",
    text: "Permettre au chercheur d'emploi de se fixer une vision professionnelle claire et précise, en accord avec ses ambitions et ses capacités"
  },
  {
    number: "02",
    title: "Analyse des compétences personnelles",
    text: "Aider le chercheur d'emploi à identifier ses compétences et aptitudes et à les relier aux emplois disponibles"
  },
  {
    number: "03",
    title: "Méthodes efficaces de recherche d'emploi",
    text: "Fournir au chercheur d'emploi des outils et méthodes pour accéder aux offres d'emploi disponibles"
  },
  {
    number: "04",
    title: "Préparation d'un profil professionnel solide",
    text: "Permettre au chercheur d'emploi de constituer un dossier professionnel attractif qui augmente ses chances d'embauche"
  },
  {
    number: "05",
    title: "Conseils pratiques pour définir quel travail rechercher",
    text: "Nous vous présentons les règles essentielles pour vous aider à organiser et faciliter votre recherche d'emploi"
  },
];


const Step2 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Information importante pour les chercheurs d’emploi</h1>
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
                <SideLeftRightButtons nextPage="/livret1/step3" />
                <SideLeftRightButtons prevPage="/livret1/step1" />
            </div>
        </>
    )
}

export default Step2;
