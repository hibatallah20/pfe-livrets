import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    title: "Dépendre uniquement de la recherche traditionnelle",
    text: "Ne te limite pas aux annonces visibles. Le marché caché demande un effort supplémentaire et la construction d’un réseau efficace."
  },
  {
   title: "Manque de préparation",
    text: "Avant de contacter une entreprise ou un professionnel, sois prêt avec des informations claires sur tes compétences et tes objectifs."
  },
  {
    title: "Négliger le suivi",
    text: "Le suivi après tout échange est essentiel, mais il doit se faire de manière professionnelle et sans insistance."
  },
  {
  title: "Agir avec désespoir",
  text: "Présente-toi avec confiance et évite de montrer un besoin urgent de travail, cela pourrait donner une mauvaise impression."
  },
  {
    title: "Communication aléatoire",
    text: "N’envoie pas de messages génériques ou préécrits. Rends ta communication personnelle et authentique."
  }

];


const Pg5 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Bonnes pratiques et erreurs à éviter</h1>
                </div>
                <div className="step2-header">
                    <h2 className="step2-title2">Erreurs à éviter lors de la recherche d’opportunités d’emploi sur le marché caché</h2>
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
            
                

                <SideLeftRightButtons prevPage="/livret3/pg4" />
            </div>
        </>
    )
}

export default Pg5;
