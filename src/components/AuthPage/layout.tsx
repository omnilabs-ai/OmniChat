import React from 'react';
import { Box } from '@mui/material';
import orange_bg from '../../assets/orange_bg.jpeg';
import AuthOutlet from './components/outlet';

const AuthPageLayout: React.FC = () => {
  return (
    <Box sx={{ 
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundImage: `url(${orange_bg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh'
    }}>
      <AuthOutlet />
    </Box>
  );
};

export default AuthPageLayout;
