import React from 'react';
// import styles from './Layout.module.css';
import SidebarLeftLayout from './SidebarLeft/Layout';
import ContentAreaLayout from './ContentArea/Layout';


const Layout: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      minWidth: '600px',
      minHeight: '600px'
    }}>
      <div style={{ flex: '2' }}>
        <SidebarLeftLayout />
      </div>
      <div style={{ flex: '7' }}>
        <ContentAreaLayout />
      </div>
    </div>
  );
};



export default Layout;
