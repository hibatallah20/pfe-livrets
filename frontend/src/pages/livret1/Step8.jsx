import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Bien te connaître",
    text: "Identifie tes compétences, centres d’intérêt et points forts\n• Fais une auto-évaluation complète\n• Utilise des outils d’évaluation professionnelle"
  },
  {
    number: "02",
    title: "Choisir les domaines qui te conviennent",
    text: "Sélectionne les secteurs adaptés à ta personnalité\n• Établis une liste des emplois correspondant à tes compétences\n• Consulte des experts dans les domaines qui t’intéressent"
  },
  {
    number: "03",
    title: "Découvrir le marché du travail",
    text: "Recherche les dernières tendances du marché de l’emploi\n• Informe-toi sur les métiers recherchés\n• Identifie les compétences les plus demandées"
  },
  {
    number: "04",
    title: "Tester avant de choisir",
    text: "Fais des expériences professionnelles courtes\n• Fais du bénévolat dans des domaines qui t’intéressent\n• Obtiens une formation pratique avant de t’engager dans un emploi"
  },
  {
    number: "05",
    title: "Développer tes compétences",
    text: "Obtiens des certifications reconnues\n• Améliore tes langues étrangères\n• Suis les dernières évolutions techniques dans ton secteur"
  },
  {
    number: "06",
    title: "Fixer ton objectif et cibler ta recherche",
    text: "Définis des objectifs clairs et mesurables\n• Concentre-toi sur les domaines correspondant à tes compétences\n• Évite de disperser tes recherches sur des emplois inadaptés"
  },
];


const Step8 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Conseils pratiques pour choisir les emplois à rechercher</h1>
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
                <SideLeftRightButtons nextPage="/livret1/step9" />
                <SideLeftRightButtons prevPage="/livret1/step7" />
            </div>
        </>
    )
}

export default Step8;
