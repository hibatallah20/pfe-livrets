import React from 'react'
import CardMUI  from './LivretCard'
import '../styles/livretcover.css'
import image1 from '../assets/img1.jpeg';

export const LivretCover = ({ header, title, subTitle, text, content }) => {
    return (
        <div className="cardmiu-cover-container">
            <div className="cardmiu-cover-background">
                <img
                    src={image1}
                    alt="Background"
                    className="cardmiu-cover-background-img"
                />
            </div>

            <div className="cardmiu-cover-content">
                <div className="cardmiu-cover-header">
                    <h2 className="cardmiu-cover-header-text">{header}</h2>
                    <h2 className="cardmiu-cover-title">{title}</h2>
                    <h2 className="cardmiu-cover-subtitle">{subTitle}</h2>
                </div>

                <div className="cardmiu-cover-card">
                    <CardMUI
                        maxWidth={600}
                        title={text}
                        text={content}
                    />
                </div>
            </div>
        </div>
    )
}
export default LivretCover;


