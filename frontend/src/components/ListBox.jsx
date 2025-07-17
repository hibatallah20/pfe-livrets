import React from "react";
import { BsCheck2, BsChevronExpand } from "react-icons/bs";
import "../styles/ListBox.css"; 

const options = ["Les plus récentes", "Les plus anciennes", "A-Z", "Z-A"];

const ListBox = ({ sort, setSort }) => {
  return (
    <div className="listbox-container">
      <div className="listbox-wrapper">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="listbox-select"
        >
          {options.map((op, index) => (
            <option key={index} value={op} className="listbox-option">
              {op}
            </option>
          ))}
        </select>
        <BsChevronExpand className="listbox-icon" />
      </div>
    </div>
  );
};

export default ListBox;
