import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: '01',
    title: "Objectif de l’étape",
    text: "Permettre au chercheur d’emploi de créer un dossier professionnel attractif qui augmente ses chances d’embauche"
  },
  {
    number: '02',
    title: "Amélioration du CV",
    text: "Utiliser un design professionnel et attrayant,Se concentrer sur les mots-clés recherchés par les employeurs,Mettre en avant clairement les réalisations avec des chiffres et des résultats",
    
  },
  {
    number: '03',
    title: "Rédaction d’une lettre de motivation distinctive",
    text: "Personnaliser la lettre pour chaque offre d’emploi,Expliquer comment le candidat peut apporter de la valeur à l’entreprise,Utiliser un langage professionnel et direct"
  },
  {
    number: '04',
    title: "Préparation du profil LinkedIn",
    text: "Choisir une photo de profil appropriée,Rédiger un résumé personnel mettant en avant les expériences et compétences,Interagir avec du contenu professionnel et construire un large réseau de contacts",
   
  },
  {
    number: '05',
    title: "Préparation des documents complémentaires",
    text: "Diplômes académiques et certificats d’expérience,Lettres de recommandation,Exemples de travaux précédents (si demandés)"
  }
];


const Step7 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Étape 4 : Préparer un profil personnel solide</h1>
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
                <SideLeftRightButtons nextPage="/livret1/step8" />
                <SideLeftRightButtons prevPage="/livret1/step6" />
            </div>
        </>
    )
}

export default Step7;
