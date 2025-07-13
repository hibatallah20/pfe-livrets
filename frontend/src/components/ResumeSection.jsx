import React from 'react';
import { ExternalLink, GitHub } from 'react-feather';
import '../styles/resumesection.css';

export const Progress = ({ progress, color }) => (
  <div className="progressWrapper">
    <div
      className="progressBar"
      style={{ width: `${progress * 20}%`, backgroundColor: color }}
    />
  </div>
);

export const ActionLink = ({ icon, link, bgColor }) => (
  <div className="actionWrapper">
    <div className="actionIconWrapper" style={{ backgroundColor: bgColor }}>
      {icon}
    </div>
    <p className="actionLink">{link}</p>
  </div>
);

export const CertificationInfo = ({ title, issuer, year, bgColor }) => (
  <div className="certContainer">
    <h3 className="certTitle">{title}</h3>
    <div className="certRow">
      {year && (
        <div className="certYear" style={{ backgroundColor: bgColor }}>
          {year}
        </div>
      )}
      <p className="certIssuer">{issuer}</p>
    </div>
  </div>
);

export const ContactInfo = ({ icon, iconBG, value }) => (
  <div className="contactRow">
    <div className="contactIconWrapper" style={{ backgroundColor: iconBG }}>
      {icon}
    </div>
    <p className="contactText">{value}</p>
  </div>
);

export const EducationInfo = ({ degree, institution, duration }) => (
  <div className="eduContainer">
    <h3 className="eduDegree">{degree}</h3>
    <p className="eduInstitution">{institution}</p>
    <p className="eduDuration">{duration}</p>
  </div>
);

const InfoBlock = ({ label, progress, accentColor }) => (
  <div className="infoRow">
    <p className="infoLabel">{label}</p>
    {progress > 0 && (
      <Progress progress={(progress / 100) * 5} color={accentColor} />
    )}
  </div>
);

export const LanguageSection = ({ languages, accentColor }) => (
  <div>
    {languages.map((lang, idx) => (
      <InfoBlock
        key={idx}
        label={lang.name}
        progress={lang.progress}
        accentColor={accentColor}
      />
    ))}
  </div>
);

export const SkillSection = ({ skills, accentColor }) => (
  <div className="skillGrid">
    {skills.map((skill, idx) => (
      <InfoBlock
        key={idx}
        label={skill.name}
        progress={skill.progress}
        accentColor={accentColor}
      />
    ))}
  </div>
);

export const ProjectInfo = ({ title, description, githubLink, liveDemoUrl, isPreview }) => (
  <div className="projectContainer">
    <h3 className={`projectTitle ${isPreview ? 'text-sm' : 'text-base'}`}>
      {title}
    </h3>
    <p className="projectDesc">{description}</p>
    <div className="projectLinks">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="linkRow"
        >
          <GitHub size={16} />
          <span>GitHub</span>
        </a>
      )}
      {liveDemoUrl && (
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="linkRow"
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  </div>
);

export const RatingInput = ({
  value = 0,
  total = 5,
  onChange = () => {},
  color = '#10b981',
  bgColor = '#e5e7eb'
}) => {
  const displayValue = Math.round((value / 100) * total);
  return (
    <div className="ratingWrapper">
      {[...Array(total)].map((_, idx) => (
        <div
          key={idx}
          onClick={() => onChange(Math.round(((idx + 1) / total) * 100))}
          className="ratingDot"
          style={{ backgroundColor: idx < displayValue ? color : bgColor }}
        />
      ))}
    </div>
  );
};

export const WorkExperience = ({ company, role, duration, durationColor, description }) => (
  <div className="workContainer">
    <div className="workHeader">
      <div>
        <h3 className="workCompany">{company}</h3>
        <p className="workRole">{role}</p>
      </div>
      <p className="workDuration" style={{ color: durationColor }}>
        {duration}
      </p>
    </div>
    <p className="workDesc">{description}</p>
  </div>
);
