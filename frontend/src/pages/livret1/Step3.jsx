import React from 'react';
import '../../styles/livret1.step3.css'
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx'
import image1 from '../../assets/img1.jpeg';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.jpeg';
import image4 from '../../assets/img4.jpeg';
import CardMUI from '../../components/LivretCard.jsx'
import { Grid } from '@mui/material'

const data = [
  {
    number: '01',
    title: "Comment définir une trajectoire professionnelle claire",
    text: "Permettre au chercheur d'emploi de définir une vision professionnelle claire et précise en accord avec ses ambitions et ses capacités"
  },
  {
    number: '02',
    title: "Analyse des compétences personnelles",
    text: "Aider le chercheur d'emploi à identifier ses compétences et aptitudes, et les relier aux emplois disponibles",
    image: image3
  },
  {
    number: '03',
    title: "Méthodes efficaces de recherche d'emploi",
    text: "Fournir au chercheur d'emploi les meilleurs outils et méthodes pour accéder aux opportunités disponibles"
  },
  {
    number: '04',
    title: "Préparer un profil personnel solide",
    text: "Permettre au chercheur d'emploi de créer un dossier professionnel attractif qui augmente ses chances d'embauche",
    image: image4
  },
  {
    number: '05',
    title: "Conseils pratiques pour cibler les emplois à rechercher",
    text: "Nous vous présentons les principales règles pour vous aider à organiser et faciliter votre recherche d’emploi"
  },
  {
    number: '06',
    title: "Mon plan d'action pour le mois prochain",
    text: "Nous vous proposons un cadre pratique pour fixer vos objectifs et organiser vos étapes afin d’obtenir des résultats concrets",
    image: image1
  },
];

const Step3 = () => {
    return (
      <>
      <Navbar/>
        <div className='step3-container'>
            <div className='step3-header'>
                <h1 className='step3-title'>Table des matières</h1>
            </div>

            <Grid
                container
                spacing={3}
                direction="row-reverse"
                justifyContent="center"
                className='step3-grid'
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
                        className='step3-grid-item'
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
             <SideLeftRightButtons nextPage="/livret1/step4" />
             <SideLeftRightButtons prevPage="/livret1/step2" />
        </div>
        </>
    )
}


export default Step3;