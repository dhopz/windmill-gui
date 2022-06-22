import React from 'react';
import PageLinks from '../Components/pageMenu';
import Box from '@mui/material/Box';

const App = () => {
    return (
        <Box sx={{ m:4 }}>        
            <header>
                <h1>Windmill Inventory</h1>
                <br/>
                <h2>Error File Handlers</h2>
            </header>
            <br/>
            <PageLinks/>      
        </Box>
    );
};

export default App;