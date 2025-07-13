import React, { useEffect, useRef, useState } from "react";
import { LuMail, LuPhone, LuGithub, LuGlobe } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import {
  EducationInfo,
  WorkExperience,
  ProjectInfo,
  CertificationInfo,
} from "./ResumeSection";
import { formatYearMonth } from "../utils/helper";
import '../styles/templateone.css'

const DEFAULT_THEME = ["#ffffff", "#0d47a1", "#1e88e5", "#64b5f6", "#bbdefb"];

const Title = ({ text, color }) => (
  <div className="titleContainer" style={{ color }}>
    <h2 className="titleText">{text}</h2>
    <div className="titleLine" style={{ backgroundColor: color }} />
  </div>
);

const TemplateOne = ({ resumeData = {}, colorPalette, containerWidth }) => {
  const {
    profileInfo = {},
    contactInfo = {},
    education = [],
    languages = [],
    workExperience = [],
    projects = [],
    skills = [],
    certifications = [],
    interests = [],
  } = resumeData;

  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (resumeRef.current && containerWidth > 0) {
      const actualWidth = resumeRef.current.offsetWidth;
      setBaseWidth(actualWidth);
      setScale(containerWidth / actualWidth);
    }
  }, [containerWidth]);

  return (
    <div
      ref={resumeRef}
      className="resumeContainer"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : undefined,
        width: containerWidth > 0 ? `${baseWidth}px` : undefined,
      }}
    >
      {/* Header */}
      <div className="resumeHeader">
        <div>
          <h1 className="headerName">{profileInfo.fullName}</h1>
          <p className="headerDesignation">{profileInfo.designation}</p>
          <div className="contactRowGroup">
            {contactInfo.email && (
              <div className="contactRow">
                <LuMail className="contactIcon" />
                <a href={`mailto:${contactInfo.email}`} className="contactLink">
                  {contactInfo.email}
                </a>
              </div>
            )}
            {contactInfo.phone && (
              <div className="contactRow">
                <LuPhone className="contactIcon" />
                <a href={`tel:${contactInfo.phone}`} className="contactLink">
                  {contactInfo.phone}
                </a>
              </div>
            )}
            {contactInfo.location && (
              <div className="contactRow">
                <span>{contactInfo.location}</span>
              </div>
            )}
          </div>
        </div>
        <div className="contactColumn">
          {contactInfo.linkedin && (
            <div className="contactRow">
              <RiLinkedinLine className="contactIcon" />
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contactLink">
                LinkedIn
              </a>
            </div>
          )}
          {contactInfo.github && (
            <div className="contactRow">
              <LuGithub className="contactIcon" />
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contactLink">
                GitHub
              </a>
            </div>
          )}
          {contactInfo.website && (
            <div className="contactRow">
              <LuGlobe className="contactIcon" />
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="contactLink">
                Portfolio
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {profileInfo.summary && (
        <div className="resumeSection">
          <Title text="Professional Summary" />
          <p className="sectionParagraph">{profileInfo.summary}</p>
        </div>
      )}

      <div className="mainGrid">
        {/* Left */}
        <div className="leftColumn">
          {workExperience.length > 0 && (
            <div className="resumeSection">
              <Title text="Work Experience" />
              <div className="sectionList">
                {workExperience.map((exp, i) => (
                  <WorkExperience
                    key={i}
                    company={exp.company}
                    role={exp.role}
                    duration={`${formatYearMonth(exp.startDate)} - ${formatYearMonth(exp.endDate)}`}
                    description={exp.description}
                    durationColor={[2]}
                  />
                ))}
              </div>
            </div>
          )}

          {projects.length > 0 && (
            <div className="resumeSection">
              <Title text="Projects" />
              <div className="sectionList">
                {projects.map((proj, i) => (
                  <ProjectInfo
                    key={i}
                    title={proj.title}
                    description={proj.description}
                    githubLink={proj.github}
                    liveDemoUrl={proj.liveDemo}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="rightColumn">
          {skills.length > 0 && (
            <div className="resumeSection">
              <Title text="Skills" />
              <div className="tagGroup">
                {skills.map((skill, i) => (
                  <span key={i} className="tagItem">{skill.name}</span>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div className="resumeSection">
              <Title text="Education" />
              <div className="sectionList">
                {education.map((edu, i) => (
                  <EducationInfo
                    key={i}
                    degree={edu.degree}
                    institution={edu.institution}
                    duration={`${formatYearMonth(edu.startDate)} - ${formatYearMonth(edu.endDate)}`}
                  />
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="resumeSection">
              <Title text="Certifications" />
              <div className="sectionList">
                {certifications.map((cert, i) => (
                  <CertificationInfo
                    key={i}
                    title={cert.title}
                    issuer={cert.issuer}
                    year={cert.year}
                  />
                ))}
              </div>
            </div>
          )}

          {languages.length > 0 && (
            <div className="resumeSection">
              <Title text="Languages" />
              <div className="tagGroup">
                {languages.map((lang, i) => (
                  <span key={i} className="tagItem">{lang.name}</span>
                ))}
              </div>
            </div>
          )}

          {interests.length > 0 && interests.some(i => i) && (
            <div className="resumeSection">
              <Title text="Interests" />
              <div className="tagGroup">
                {interests.map((int, i) => int && (
                  <span key={i} className="tagItem">{int}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
