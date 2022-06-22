/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const preventDefault = (event) => event.preventDefault();

const PageLinks = () => {
    const navigate = useNavigate();

    const navigateToFileOperations = () => {
        // 👇️ navigate to /
        navigate('/teams');
    }; 
    
    const navigateToLocalMachineFolder = () => {
    // 👇️ navigate to /contacts
    navigate('/league_table');
    };

    const navigateToNetSuiteLinks = () => {
        // 👇️ navigate to /
        navigate('/results');
    }; 

    const navigateToSalesOrder = () => {
        // 👇️ navigate to /
        navigate('/result_table');
    }; 

    return (
        <Box
        sx={{
            typography: 'body1',
            '& > :not(style) + :not(style)': {
            ml: 2,
            },
        }}
        onClick={preventDefault}
        >
        <Link onClick={navigateToFileOperations} href="#">NetSuite File Operations</Link>
        <Link onClick={navigateToLocalMachineFolder} href="results">Local Machine Folder</Link>
        <Link onClick={navigateToNetSuiteLinks} href="#">NetSuite Links</Link>
        <Link onClick={navigateToSalesOrder} href="#">Sales Order Status</Link>
        </Box>
    );
}

export default PageLinks;
