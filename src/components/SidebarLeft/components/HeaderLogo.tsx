import React from 'react';
import omniLogo from '../../../assets/omnilogo.svg';
import { Box, useMediaQuery } from '@mui/material';
import { themeAtom } from '../../../atoms';
import { useAtom } from 'jotai';

const HeaderLogo: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5em',
      fontSize: '2rem',
      padding: '0.5em',
      height: '100%'
    }}>
      <img 
        src={omniLogo} 
        alt="Omni Logo" 
        style={{
          height: "3.5rem",
          width: 'auto'
        }} 
      />
      {isSmallScreen ? null : <span style={{
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        color: theme.palette.primary.main,
        display: 'inline'
      }}>
        OMNI
      </span>}
    </Box>
  );
};

export default HeaderLogo;
