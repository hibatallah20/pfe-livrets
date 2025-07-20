import React from 'react';
import '../../styles/livret1.step4.css'
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx'
import image4 from '../../assets/img4.jpeg';
import CardMUI from '../../components/LivretCard.jsx'
import { Grid } from '@mui/material'


const data = [
  {
    number: "01",
    title: "Objectif de l’étape",
    text: "Permettre au chercheur d'emploi de définir une vision professionnelle claire et précise en accord avec ses ambitions et ses capacités",
    image: image4
  },
  {
    number: "02",
    title: "Analyse des aspirations professionnelles",
    subTitle: "Pose-toi les questions suivantes",
    text: "- Quels sont les métiers qui me passionnent ?\n- Quels secteurs m'intéressent ?\n- Comment je me vois dans 5 ans ?"
  },
  {
    number: "03",
    title: "Analyse des forces et faiblesses",
    text: "- Faire la liste de ses qualifications et les comparer aux exigences du marché\n- Analyser les expériences passées pour identifier réussites et défis\n- Demander l’avis d’amis ou de conseillers professionnels pour cibler les axes d’amélioration"
  },
  {
    number: "04",
    title: "Définition des objectifs professionnels",
    text: "- Fixer des objectifs à court, moyen et long terme\n- Utiliser la méthode SMART (Spécifique, Mesurable, Atteignable, Réaliste, Temporel)\n- Diviser les objectifs en tâches petites et réalisables"
  },
  {
    number: "05",
    title: "Identification des emplois adaptés",
    text: "- Rechercher les emplois correspondant à tes compétences et diplômes\n- Identifier les secteurs offrant les meilleures opportunités de croissance\n- Mener des entretiens exploratoires avec des professionnels du secteur ciblé"
  }
];


const Step4 = () => {
    return (
        <>
        <Navbar/>
            <div className="step4-container">
                <div className="step4-header">
                   <h1 className="step4-title">Étape 1 : Comment définir une trajectoire professionnelle claire</h1>
                </div>

                <Grid
                    container
                    spacing={3}
                    direction="row-reverse"
                    justifyContent="center"
                    className="step4-grid"
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
                                               className='step4-grid-item'
                                           >
                            <CardMUI
                            maxWidth={480}
                                height={200}
                                number={item?.number}
                                title={item?.title}
                                text={item?.text}
                                image={item?.image}
                            />
                        </Grid>
                    ))}
                </Grid>
                <SideLeftRightButtons nextPage="/livret1/step5" />
             <SideLeftRightButtons prevPage="/livret1/step3" />
            </div>
        </>
    );
};

export default Step4;
