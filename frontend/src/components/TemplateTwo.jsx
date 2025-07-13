"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { formatYearMonth } from "../utils/helper";
import '../styles/templatetwo.css'

const TemplateTwo = ({ resumeData = {}, containerWidth }) => {
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
      className="resumeTwoContainer"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : undefined,
        width: containerWidth > 0 ? `${baseWidth}px` : undefined,
      }}
    >
      {/* Header */}
      <div className="resumeTwoHeader">
        <h1 className="headerName">{profileInfo.fullName}</h1>
        <p className="headerDesignation">{profileInfo.designation}</p>
        <div className="contactGroup">
          {contactInfo.phone && <span>{contactInfo.phone}</span>}
          {contactInfo.email && <a href={`mailto:${contactInfo.email}`} className="contactLink">{contactInfo.email}</a>}
          {contactInfo.linkedin && <a href={contactInfo.linkedin} className="contactLink">LinkedIn</a>}
          {contactInfo.github && <a href={contactInfo.github} className="contactLink">GitHub</a>}
          {contactInfo.website && <a href={contactInfo.website} className="contactLink">Portfolio</a>}
        </div>
      </div>

      <hr className="sectionDivider" />

      {/* Summary */}
      {profileInfo.summary && (
        <section className="resumeSection">
          <h2 className="sectionTitle">Summary</h2>
          <p className="sectionText">{profileInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <section className="resumeSection">
          <h2 className="sectionTitle">Experience</h2>
          <div className="sectionList">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="experienceItem">
                <div className="experienceHeader">
                  <div>
                    <h3 className="itemTitle">{exp.role}</h3>
                    <p className="itemSubtitle">{exp.company}</p>
                  </div>
                  <div className="itemDuration">
                    <p>{formatYearMonth(exp.startDate)} - {formatYearMonth(exp.endDate)}</p>
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>
                {exp.technologies && <p className="techTag">{exp.technologies}</p>}
                <ul className="itemList">
                  {exp.description?.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="resumeSection">
          <h2 className="sectionTitle">Projects</h2>
          <div className="sectionList">
            {projects.map((proj, idx) => (
              <div key={idx} className="experienceItem">
                <div className="experienceHeader">
                  <h3 className="itemTitle">{proj.title}</h3>
                  {proj.link && <a href={proj.link} className="contactLink">{proj.linkType || "Link"}</a>}
                </div>
                {proj.technologies && <p className="techTag">{proj.technologies}</p>}
                <p className="itemDescription">{proj.description}</p>
                <div className="linkGroup">
                  {proj.github && (
                    <a href={proj.github} className="iconLink">
                      <LuGithub size={10} /> GitHub
                    </a>
                  )}
                  {proj.liveDemo && (
                    <a href={proj.liveDemo} className="iconLink">
                      <LuExternalLink size={10} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="resumeSection">
          <h2 className="sectionTitle">Education</h2>
          <div className="sectionList">
            {education.map((edu, idx) => (
              <div key={idx} className="educationItem">
                <div className="experienceHeader">
                  <h3 className="itemTitle">{edu.degree}</h3>
                  <p className="itemDuration">{formatYearMonth(edu.startDate)} - {formatYearMonth(edu.endDate)}</p>
                </div>
                <p className="itemSubtitle">{edu.institution}</p>
                {edu.courses && <p><strong>Courses:</strong> {edu.courses}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="resumeSection">
          <h2 className="sectionTitle">Skills</h2>
          <ul className="skillsList">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill.name}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="resumeSection">
          <h2 className="sectionTitle">Certifications</h2>
          <ul className="certificationsList">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert.title} — {cert.issuer} ({cert.year})</li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages & Interests */}
      {(languages.length > 0 || interests.length > 0) && (
        <section className="resumeSection">
          <div className="twoColumnGrid">
            {languages.length > 0 && (
              <div>
                <h2 className="sectionTitle">Languages</h2>
                <ul className="pillList">
                  {languages.map((lang, idx) => (
                    <li key={idx} className="pillItem">{lang.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {interests.length > 0 && interests.some(Boolean) && (
              <div>
                <h2 className="sectionTitle">Interests</h2>
                <ul className="pillList">
                  {interests.filter(Boolean).map((int, idx) => (
                    <li key={idx} className="pillItem">{int}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateTwo;
