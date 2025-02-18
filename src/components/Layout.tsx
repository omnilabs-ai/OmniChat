import React from 'react';
import Box from '@mui/material/Box';
// import styles from './Layout.module.css';
import SidebarLeftLayout from './SidebarLeft/Layout';
import ContentAreaLayout from './ContentArea/Layout';
import { useAtom } from 'jotai';
import { themeAtom } from '../atoms';


const Layout: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  
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
    </Box>
  );
};



export default Layout;
