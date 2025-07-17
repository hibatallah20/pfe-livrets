import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import '../styles/livretcard.css'


const CardMUI = ({ text, title, number, subTitle, image }) => {
  return (
    <Card className="livret-card-container">
      <div className="livret-card-image">
        {image && <img src={image} alt="card" />}
      </div>
      <CardContent className="livret-card-content">
        {number && <Typography variant="h5" className="livret-card-number">{number}</Typography>}
        <Typography variant="h6" className="livret-card-title">{title}</Typography>
        {subTitle && <Typography variant="subtitle1" className="livret-card-subtitle">{subTitle}</Typography>}
        <Typography className="livret-card-text">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardMUI;
