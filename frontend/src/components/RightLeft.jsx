import { Box, IconButton } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/leftright.css';

const SideLeftRightButtons = ({ prevPage = null, nextPage = null, sidebarOpen = false }) => {
    const navigate = useNavigate();

    return (
        <div className='buttons-container'>
            {nextPage && (
                <Box className="right-button-container">
                    <IconButton
                       
                        onClick={() => navigate(nextPage)}
                        className="right-button"
                          style={{ backgroundColor: 'rgba(217, 70, 239, 0.65)' }}
                    >
                        <ChevronRightIcon className="buttons-icon" />
                    </IconButton>
                </Box>
            )}

            {prevPage && (
                <Box className="left-button-container">
                    <IconButton
                        onClick={() => navigate(prevPage)}
                        className="left-button"
                          style={{ backgroundColor: 'rgba(217, 70, 239, 0.65)' }}
                    >
                        <ChevronLeftIcon className="buttons-icon" />
                    </IconButton>
                </Box>
            )}
        </div>
    )
}

export default SideLeftRightButtons;
