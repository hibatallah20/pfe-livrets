import React from 'react'
import '../styles/tabs.css'

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`tab-button ${activeTab === tab.label ? "tab-active" : "tab-inactive"}`}
            onClick={() => setActiveTab(tab.label)}
          >
            <span className="tab-label">
              {tab.label}
              {activeTab === tab.label && (
                <div className="tab-gradient"></div>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
