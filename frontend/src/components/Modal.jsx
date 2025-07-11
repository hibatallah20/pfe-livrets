import React from 'react'
import '../styles/modal.css'
import { X } from 'react-feather'


const Modal = ({
    children, isOpen, onClose, title, hideHeader, showActionBtn, actionBtnIcon= null, actionBtnText, onActionClick = () => {},
    
}) => {
    if (!isOpen) return null
  return (
    <div className="modaloverlay">
        <div className="modalscontainer">
            {!hideHeader && (
                <div className="header">
                    <h3 className="title">
                        {title}
                    </h3>
                    {showActionBtn && (
                        <button className="actionButton" onClick={onActionClick}>
                            {actionBtnIcon}
                            {actionBtnText}
                        </button>
                    )}
                </div>
            )}
            <button type='button' className="closeButton" onClick={onClose}>
                <X size={20} />
            </button>
            <div className="body">{children}</div>
        </div>
    </div>
  )
}

export default Modal