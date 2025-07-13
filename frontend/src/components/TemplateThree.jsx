import React, { useEffect, useRef, useState } from "react";
import { formatYearMonth } from "../utils/helper";
import '../styles/templatethree.css'

const TemplateThree = ({ resumeData = {}, containerWidth }) => {
  const {
    profileInfo = {},
    contactInfo = {},
    education = [],
    workExperience = [],
    projects = [],
    skills = [],
    certifications = [],
    interests = [],
  } = resumeData;

  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(1100);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (resumeRef.current) {
      const actualBaseWidth = resumeRef.current.offsetWidth;
      setBaseWidth(actualBaseWidth);
      if (containerWidth > 0) {
        setScale(containerWidth / actualBaseWidth);
      }
    }
  }, [containerWidth]);

  const groupedSkills = {
    "Automation & Test tools": [],
    "Product Management": [],
    Languages: [],
    "Other Skills": []
  };

  skills.forEach(skill => {
    if (["Selenium/Webdriver", "TestNG", "Jenkins"].includes(skill.name)) {
      groupedSkills["Automation & Test tools"].push(skill.name);
    } else if (["Agile", "Scrum", "JIRA", "Microsoft TFS"].includes(skill.name)) {
      groupedSkills["Product Management"].push(skill.name);
    } else if (["Python", "Java", "Javascript", "Databases (MySQL)"].includes(skill.name)) {
      groupedSkills.Languages.push(skill.name);
    } else {
      groupedSkills["Other Skills"].push(skill.name);
    }
  });

  return (
    <div
      ref={resumeRef}
      className="templateThreeContainer"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : "none",
        width: containerWidth > 0 ? `${baseWidth}px` : "auto"
      }}
    >
      <header className="templateThreeHeader">
        <div className="headerCenter">
          <h1 className="headerName">{profileInfo.fullName}</h1>
          <h2 className="headerDesignation">{profileInfo.designation}</h2>
        </div>
        <p className="headerSummary">{profileInfo.summary}</p>
      </header>

      <div className="twoColumnLayout">
        <aside className="templateThreeSidebar">
          <section className="sidebarSection">
            <h2 className="sidebarTitle">Contact</h2>
            <ul className="contactList">
              <li><span className="label">Location:</span>{contactInfo.location}</li>
              <li><span className="label">Phone:</span>{contactInfo.phone}</li>
              <li><span className="label">Email:</span><a href={`mailto:${contactInfo.email}`} className="link">{contactInfo.email}</a></li>
              {contactInfo.linkedin && <li><span className="label">LinkedIn:</span><a href={contactInfo.linkedin} className="link">{contactInfo.linkedin}</a></li>}
              {contactInfo.github && <li><span className="label">GitHub:</span><a href={contactInfo.github} className="link">{contactInfo.github}</a></li>}
              {contactInfo.website && <li><span className="label">Portfolio:</span><a href={contactInfo.website} className="link">{contactInfo.website}</a></li>}
            </ul>
          </section>

          <section className="sidebarSection">
            <h2 className="sidebarTitle">Skills</h2>
            {Object.entries(groupedSkills).map(([category, skillsList]) => (
              skillsList.length > 0 && (
                <div key={category} className="skillsGroup">
                  {category !== "Other Skills" && <h3 className="skillsCategory">{category}:</h3>}
                  <ul className="skillsList">
                    {skillsList.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </section>

          {education.length > 0 && (
            <section className="sidebarSection">
              <h2 className="sidebarTitle">Education</h2>
              {education.map((edu, idx) => (
                <div key={idx} className="educationItem">
                  <h3>{edu.institution}</h3>
                  <p>{edu.degree}</p>
                </div>
              ))}
            </section>
          )}

          {certifications.length > 0 && (
            <section className="sidebarSection">
              <h2 className="sidebarTitle">Certifications</h2>
              <ul className="certList">
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert.title} ({cert.year})</li>
                ))}
              </ul>
            </section>
          )}

          {interests.length > 0 && (
            <section className="sidebarSection">
              <h2 className="sidebarTitle">Interests</h2>
              <ul className="interestsList">
                {interests.map((interest, idx) => (
                  <li key={idx}>• {interest}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        <main className="templateThreeMain">
          {workExperience.length > 0 && (
            <section className="mainSection">
              <h2 className="mainSectionTitle">Work Experience</h2>
              {workExperience.map((exp, idx) => (
                <div key={idx} className="mainItem">
                  <div className="mainItemHeader">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="italic">{exp.company}{exp.location && `, ${exp.location}`}</p>
                    </div>
                    <div className="dates">{formatYearMonth(exp.startDate)} – {formatYearMonth(exp.endDate)}</div>
                  </div>
                  <ul className="itemList">
                    {exp.description?.split("\n").map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {projects.length > 0 && (
            <section className="mainSection">
              <h2 className="mainSectionTitle">Projects</h2>
              {projects.map((proj, idx) => (
                <div key={idx} className="mainItem">
                  <div className="mainItemHeader">
                    <h3>{proj.title}</h3>
                    <div className="dates">{formatYearMonth(proj.startDate)} – {formatYearMonth(proj.endDate)}</div>
                  </div>
                  <p>{proj.description}</p>
                  <div className="projectLinks">
                    {proj.github && <a href={proj.github} className="link">GitHub</a>}
                    {proj.liveDemo && <a href={proj.liveDemo} className="link">Live Demo</a>}
                    {proj.technologies && <span className="techStack"><strong>Tech:</strong> {proj.technologies.join(", ")}</span>}
                  </div>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default TemplateThree;
