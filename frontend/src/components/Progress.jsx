import React from 'react'
import '../styles/progress.css'

const Progress = ({progress = 0, total = 5, color, bgColor}) => {
  return (
    <div className="progress-container">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`progress-dot ${index < progress ? "progress-filled" : "progress-empty"}`}
          style={{
            backgroundColor: index < progress
              ? color || "#c4dadeff"
              : bgColor || "#cffafe"
          }}
        ></div>
      ))}
    </div>
  )
}

export default Progress
