import React from 'react';
import Box from '@mui/material/Box';
// import styles from './Layout.module.css';
import SidebarLeftLayout from './SidebarLeft/Layout';
import ContentAreaLayout from './ContentArea/Layout';


const Layout: React.FC = () => {
  return (
    <Box style={{
      // display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      height: '100vh',
      // minWidth: '600px',
      // minHeight: '600px'
    }}>
      <Box style={{width: '300px', height: '100%'}}>
        <SidebarLeftLayout />
      </Box>
      <div style={{ flex: 1}}>
        {/* <ContentAreaLayout /> */}
      </div>
    </Box>
  );
};



export default Layout;
