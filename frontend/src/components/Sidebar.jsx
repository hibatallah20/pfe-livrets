import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import '../styles/sidebar.css';


const Sidebar = ({ isOpen, onToggle}) => {
  return (
    <div className={`sidebar-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Ateliers</h3>
        <div className={`sidebar-wrapper ${isOpen ? 'open' : 'sidebar-closed'}`}>
        <button
          className="sidebar-toggle-btn"
          onClick={onToggle}
          aria-label={isOpen ? 'Fermer sidebar' : 'Ouvrir sidebar'}
        >
          {isOpen ? '<' : '>'}
        </button>
        </div>
      </div>
      <ul className="sidebar-list">
        <li>
          <button className={`sidebar-item ${isOpen ? 'open' : ''}`}>
            <FaFileAlt />
            <span>أحدد عن أي عمل يمكنني أن أبحث</span>
          </button>
        </li>
        <li>
          <button className={`sidebar-item ${isOpen ? 'open' : ''}`}>
            <FaFileAlt />
            <span>اكتشف فرص التكوين</span>
          </button>
        </li>
        <li>
          <button className={`sidebar-item ${isOpen ? 'open' : ''}`}>
            <FaFileAlt />
            <span>ابنِ ووسع شبكتك و علاقاتك</span>
          </button>
        </li>
        <li>
          <button className={`sidebar-item ${isOpen ? 'open' : ''}`}>
            <FaFileAlt />
            <span>أتعرف على فرص العمل</span>
          </button>
        </li>
        <li>
          <button className={`sidebar-item ${isOpen ? 'open' : ''}`}>
            <FaFileAlt />
            <span>إعداد سيرتي الذاتية تحسين المهارات والحوافز</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
