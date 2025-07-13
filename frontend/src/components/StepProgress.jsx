import React from 'react'
import { Check } from 'react-feather'
import '../styles/stepprogress.css'

const StepProgress = ({progress}) => {
  return (
    <>
    <div className="step-progress-container">
      <div className="step-progress-background"></div>

      <div
        className="step-progress-bar"
        style={{ width: `${progress}%` }}
      >
        <div className="step-progress-shimmer"></div>

        <div className="step-progress-bubbles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${(i + 1) * 12}%`,
                animationDelay: `${i * 0.25}s`
              }}
            ></div>
          ))}
        </div>

        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {progress > 0 && (
        <div
          className="progress-indicator"
          style={{ left: `${Math.max(0, progress - 4)}%` }}
        ></div>
      )}
    </div>

    <div className="step-progress-footer">
      <div className="step-progress-text">
        {progress < 25 
          ? "Getting Started"
          : progress < 50
            ? "Making Progress"
            : progress < 75
              ? "Almost There"
              : "Nearly Completed"}
      </div>
      <div className="flex items-center gap-2">
        {progress === 100 && (
          <div className="step-progress-check">
            <Check size={12} />
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default StepProgress
