import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Objectif",
    subTitle: "Découvrir les formations",
    text: "Tu cherches une opportunité pour développer tes compétences et augmenter tes chances de trouver un emploi ? Participe au programme de formation qualifiante proposé par Advanced Software!",
  },
  {
    number: "02",
    title: "Avantages de la formation",
    text: "Formation gratuite et certifiée par Advanced Software- Formation dans les domaines techniques, informatiques et linguistiques - Formation dans des centres agréés - Suivi et accompagnement professionnel - Attestation de participation à la fin de la formation -"
  },
  {
    number: "03",
    title: "Choix de la formation",
    subTitle: "Si tu n’es pas sûr(e) de la formation qui te convient, ton conseiller emploi peut te guider vers un service d’évaluation des compétences qui t’aidera à :",
    text: "Identifier tes points forts et tes points faibles - Déterminer les compétences acquises et celles à développer - Mieux comprendre tes objectifs professionnels et personnels - https://urls.fr/umQDf4"
  },
  {
    number: "04",
    title: "Inscription à la formation",
    subTitle: "Pour t’inscrire au programme de formation qualifiante :",
    text: "Visite le lien : https://advanced-software.ma/inscription Choisis l’organisme concerné et remplis le formulaire d’inscription"
  },
  {
    number: "05",
    text: "Formations dans plusieurs domaines - Éducation et pédagogie - Conseil à distance - Tourisme et hôtellerie - Technologie numérique"
  },
];


const Etp5 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Formation qualifiante</h1>
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
            
                
                <SideLeftRightButtons nextPage="/livret2/etp6" />
                <SideLeftRightButtons prevPage="/livret2/etp4" />
            </div>
        </>
    )
}

export default Etp5;
