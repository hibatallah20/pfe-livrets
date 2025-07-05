import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { popularSearch } from "../utils/data";
import HeroImage from "../assets/header_img.png"
import "../styles/contentcard.css"

const SearchInput = ({ placeholder, icon, value, setValue, styles }) => {
  const handleChange = (e) => setValue(e.target.value);
  const clearInput = () => setValue("");

  return (
    <div className={`search-input-container ${styles}`}>
      <span className="search-input-icon">{icon}</span>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />

      <AiOutlineCloseCircle className="clear-icon" onClick={clearInput} />
    </div>
  );
};

const Header = ({
  title,
  type,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}) => {
  return (
    <div className={`header-container ${type ? "tall" : ""}`}>
      <div className="header-wrapper">
        <div className="mb-8">
          <p className="header-title">{title}</p>
        </div>

        <div className="search-bar">
          <SearchInput
            placeholder="Job Title or Keywords"
            icon={<AiOutlineSearch />}
            value={searchQuery}
            setValue={setSearchQuery}
          />
          <SearchInput
            placeholder="Add Country or City"
            icon={<CiLocationOn />}
            value={location}
            setValue={setLocation}
            styles="hide-on-mobile"
          />

          <div>
            <CustomButton
              onClick={handleClick}
              title="Search"
              containerStyles="custom-button"
            />
          </div>
        </div>

        {type && (
          <div className="popular-searches">
            {popularSearch.map((search, index) => (
              <span key={index} className="popular-search-item">
                {search}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="hero-image-container">
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Header;
