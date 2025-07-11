import React, { useState } from "react";
import { Award, TrendingUp, Zap, Edit, Trash2, Clock } from "react-feather";
import "../styles/ResumeCard.css";

const ResumeCard = ({
  title = "Untitled Resume",
  createdAt = null,
  updatedAt = null,
  onSelect,
  onDelete,
  completion = 85,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedCreatedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  const formattedUpdatedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  const getCompletionColor = () => {
    if (completion >= 90) return "completionHigh";
    if (completion >= 70) return "completionMedium";
    return "completionLow";
  };

  const getCompletionIcon = () => {
    if (completion >= 90) return <Award size={12} />;
    if (completion >= 70) return <TrendingUp size={12} />;
    return <Zap size={12} />;
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

  return (
    <div
      className="resumeCard"
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Completion indicator */}
      <div className="completionIndicator">
        <div className={`completionDot ${getCompletionColor()}`}>
          <div className="completionDotInner" />
        </div>
        <span className="completionPercentageText">{completion}%</span>
        {getCompletionIcon()}
      </div>

      <div className="previewArea">
      <div className="emptyPreviewIcon">
      <Edit size={28} className="text-indigo-600" />
     </div>
     <span className="emptyPreviewText">{title}</span>

     <div className="sectionChips">
      {["Profile", "Work", "Skills", "Edu"].map((section, i) => (
       <div
        key={i}
        className={
          i < Math.floor(completion / 25)
            ? "sectionChipCompleted"
            : "sectionChipIncomplete"
        }
      >
        {section}
       </div>
      ))}
     </div>

     {isHovered && (
      <div className="actionOverlay">
         <div className="actionButtonsContainer">
           <button
             onClick={(e) => {
              e.stopPropagation();
              if (onSelect) onSelect();
            }}
            className="editButton"
            title="Edit"
          >
            <Edit size={18} className="buttonIcon" />
          </button>
          <button
          onClick={handleDeleteClick}
          className="deleteButton"
          title="Delete"
        >
          <Trash2 size={18} className="buttonIcon" />
          </button>
         </div>
         </div>
         )}
        </div>


      {/* Info area */}
      <div className="infoArea">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h5 className="title">{title}</h5>
            <div className="dateInfo">
              <Clock size={12} />
              <span>Created At: {formattedCreatedDate}</span>
              <span className="ml-2">Updated At: {formattedUpdatedDate}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progressBarWrapper">
          <div
            className={`progressBarFill ${getCompletionColor()}`}
            style={{ width: `${completion}%` }}
          >
            <div className="progressBarFillOverlay"></div>
          </div>
          <div
            className="progressBarHighlight"
            style={{ left: `${Math.max(0, completion - 2)}%` }}
          ></div>
        </div>

        {/* Completion status */}
        <div className="completionStatus">
          <span>
            {completion < 50
              ? "Getting Started"
              : completion < 80
              ? "Almost There"
              : "Ready to Go!"}
          </span>
          <span className="font-bold">{completion}% Complete</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
