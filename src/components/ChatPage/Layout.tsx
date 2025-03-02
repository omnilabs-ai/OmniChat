import React from 'react';
import Box from '@mui/material/Box';
import SidebarLeftLayout from './SidebarLeft/Layout';
import ContentAreaLayout from './ChatArea/Layout';
import { useAtom } from 'jotai';
import { themeAtom } from '../../atoms';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Layout: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const navigate = useNavigate();
  
  return (
    <Box style={{
      width: '100%',
      boxSizing: 'border-box',
      height: '100vh',
      minWidth: '600px',
      minHeight: '200px'
    }}>
      <Box style={{
        width: '300px', 
        height: '100%',
        float: 'left',
        backgroundColor: theme.palette.background.default,
      }}>
        <SidebarLeftLayout />
      </Box>
      <div style={{
        // marginLeft: '300px',
        width: 'auto',
        height: '100%',
        backgroundColor: theme.palette.background.default,
      }}>
        <ContentAreaLayout />
      </div>
      <Avatar
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          cursor: 'pointer',
          bgcolor: 'primary.main',
        }}
        onClick={() => navigate('/profile')}
      >
      </Avatar>
    </Box>
  );
};



export default Layout;
