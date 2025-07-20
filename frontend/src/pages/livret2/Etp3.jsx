import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideLeftRightButtons from '../../components/RightLeft.jsx';
import { Grid } from '@mui/material'
import  CardMUI  from '../../components/LivretCard.jsx'
import '../../styles/livret1.step2.css';


const data = [
  {
    number: "01",
    title: "Compétences douces",
    text: "Les compétences douces (soft skills) sont des capacités personnelles que possède un individu et qui lui permettent de s’adapter à son environnement. Elles font partie intégrante de la personnalité et sont souvent liées à la manière de communiquer.Par exemple, si tu arrives à bien communiquer avec tes collègues de travail, tes camarades d’études, tes amis ou même ta famille, cela signifie que tu possèdes de bonnes compétences en communication. Si tu as confiance en toi au travail ou lorsque tu présentes quelque chose à d'autres, tu as probablement la compétence de négociation.Il existe d’autres types de compétences douces.Ces compétences font partie de ta personnalité, mais tu peux aussi les acquérir ou les renforcer en participant à des ateliers de formation près de chez toi.",
  },
  {
    number: "02",
    title: "Compétences dures",
    text: "Ce sont des compétences acquises auprès d’un spécialiste. Elles représentent souvent le critère décisif sur lequel se base le responsable des ressources humaines pour sélectionner un candidat à un poste vacant. On les appelle aussi compétences techniques. Tu peux les acquérir à travers l’école, l’université, des formations complémentaires, des cours ou même sur le terrain de travail. En fin de compte, les compétences techniques s’obtiennent grâce aux expériences de vie, que ce soit dans ton emploi ou par le biais de formations ou de stages assurés par un professionnel. Les compétences dures sont généralement acquises par l’enseignement ou une formation spécialisée. Elles incluent des aptitudes comme l’utilisation d’un outil particulier, d’un logiciel, ou d’un équipement spécifique dans ta vie professionnelle. En d’autres termes, les compétences dures représentent l’expertise technique, tandis que les compétences douces reflètent les habitudes générales dans l’environnement de travail.",
  }
];


const Etp3 = () => {
    return (
        <>
        <Navbar/>
            <div className="step2-container">
                <div className="step2-header">
                    <h1 className="step2-title">Types de compétences</h1>
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
            
                
                <SideLeftRightButtons nextPage="/livret2/etp4" />
                <SideLeftRightButtons prevPage="/livret2/etp2" />
            </div>
        </>
    )
}

export default Etp3;
