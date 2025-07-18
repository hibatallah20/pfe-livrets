import React, { useEffect, useRef, useState } from 'react'
import { DUMMY_RESUME_DATA, resumeTemplates } from '../utils/resumedata'
import Tabs from './Tabs'
import { Check } from 'react-feather'
import { TemplateCard } from './resumeCard'
import RenderResume from './RenderResume'
import '../styles/themeselector.css'

const TAB_DATA = [{label: 'Templates'}]

const ThemeSelector = ({selectedTheme, setSelectedTheme, resumeData, onClose}) => {
    const resumeRef = useRef(null)
    const [baseWidth, setBaseWidth] = useState(800);

    const initialIndex = resumeTemplates.findIndex(t => t.id === selectedTheme)
    const [selectedTemplate, setSelectedTemplate] = useState({
        theme: selectedTheme || resumeTemplates[0]?.id || "",
        index: initialIndex >= 0 ? initialIndex : 0
    })

    const [tabValue, setTabValue] = useState('Templates')

    const handleThemeSelection = () => {
        setSelectedTheme(selectedTemplate.theme)
        onClose()
    }

    const updateBaseWidth = () => {
        if(resumeRef.current) {
            setBaseWidth(resumeRef.current.offsetWidth)
        }
    }

    useEffect(() => {
        updateBaseWidth()
        window.addEventListener("resize", updateBaseWidth)
        return () => {
            window.removeEventListener("resize", updateBaseWidth)
        }
    }, [])

    return (
    <div className="theme-container">
        <div className="theme-header">
            <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

            <button
                className="theme-apply-btn"
                onClick={handleThemeSelection}
            >
                <Check size={18} /> Appliquer les modifications
            </button>
        </div>

        <div className="theme-grid">
            <div className="theme-templates">
                <div className="template-grid">
                    {resumeTemplates.map((template, index) => (
                        <TemplateCard
                            key={`templates_${index}`}
                            thumbnailImg={template.thumbnailImg}
                            isSelected={selectedTemplate.index === index}
                            onSelect={() => setSelectedTemplate({
                                theme: template.id,
                                index
                            })}
                        />
                    ))}
                </div>
            </div>

            <div className="theme-preview" ref={resumeRef}>
                <RenderResume
                    templateId={selectedTemplate?.theme || ""}
                    resumeData={resumeData || DUMMY_RESUME_DATA}
                    containerWidth={baseWidth}
                />
            </div>
        </div>
    </div>
    )
}

export default ThemeSelector
