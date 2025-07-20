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
    text: "Fournir au chercheur d’emploi les meilleurs outils et méthodes pour accéder aux opportunités d’emploi disponibles"
  },
  {
    number: "02",
    title: "Utilisation des sites web",
    text: "• Créer un compte professionnel sur les sites d’emploi ANAPEC, Bayt\n• Télécharger et mettre régulièrement à jour le CV\n• Activer les alertes pour recevoir les nouvelles offres d’emploi"
  },
  {
    number: "03",
    title: "Visiter les entreprises ciblées",
    text: "• Établir une liste des entreprises appropriées et déposer des candidatures directes\n• Participer aux salons de l’emploi pour rencontrer les responsables RH\n• Rechercher les programmes de formation proposés par les grandes entreprises"
  },
  {
    number: "04",
    title: "Utiliser les réseaux professionnels",
    text: "• Rejoindre des groupes professionnels liés au secteur visé\n• Interagir avec les publications relatives aux emplois et participer aux discussions\n• Rechercher les responsables du recrutement et les contacter directement"
  },
  {
    number: "05",
    title: "Communiquer avec ton réseau personnel",
    text: "• Demander des recommandations auprès d’amis et de la famille\n• Profiter de tes connaissances personnelles pour obtenir des informations sur les offres d’emploi non publiées\n• Participer à des événements professionnels pour élargir tes opportunités d’emploi"
  }
];


const Step6 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Étape 3 : Méthodes efficaces pour rechercher des opportunités d’emploi</h1>
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
                <SideLeftRightButtons nextPage="/livret1/step7" />
                <SideLeftRightButtons prevPage="/livret1/step5" />
            </div>
        </>
    )
}

export default Step6;
