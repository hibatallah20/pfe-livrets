import React from "react";
import "../styles/custombutton.css"

const CustomButton = ({ title, containerStyles = "", iconRight, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`custom-button ${containerStyles}`}
    >
      {title}

      {iconRight && <div className="icon-right">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
