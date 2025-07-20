import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    title: "Formation qualifiante",
   
  },
  {
    title: "Formations organisées par les partenaires",
  },
  {
    title: "Formations à distance",
  },
  {
    title: "Formations en compétences douces",
  },
  {
    title: "Ouverture de nouvelles perspectives",
  },
];


const Etp4 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Les formations disponibles</h1>
                </div>
                <div className="step2-header">
                    <h2 className="step2-title2">Valorise tes compétences et ouvre de nouvelles perspectives pour ton avenir professionnel ! Advanced Software t’offre des opportunités de formation de qualité dans divers domaines. Saisis ta chance, développe tes capacités et augmente tes chances d’intégration sur le marché du travail.</h2>
                    <h2 className="step2-title2">Formations disponibles</h2>
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
              
                <SideLeftRightButtons nextPage="/livret2/etp5" />
                <SideLeftRightButtons prevPage="/livret2/etp3" />
            </div>
        </>
    )
}

export default Etp4;
