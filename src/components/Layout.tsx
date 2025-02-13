import React from 'react';
// import styles from './Layout.module.css';
import SidebarLeftLayout from './SidebarLeft/Layout';
import ContentAreaLayout from './ContentArea/Layout';


const Layout: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh'
    }}>
      <div style={{ flex: '1' }}>
        <SidebarLeftLayout />
      </div>
      <div style={{ flex: '3' }}>
        <ContentAreaLayout />
      </div>
    </div>
  );
};



export default Layout;
