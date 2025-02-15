import React from 'react';
import HeaderLogo from './components/HeaderLogo';
import menuIcon from '../../assets/menuIcon.svg';
import ModelSelector from './components/ModelSelector';
import CostAccSlider from './components/CostAccSlider';

const SidebarLeftLayout: React.FC = () => {
  return (
    <div style={{
      height: '100%',
      backgroundColor: '#f5f5f5',
      borderRight: '1px solid #e0e0e0',
      fontSize: '2em',

      minWidth: '250px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em',
      }}>
        <HeaderLogo />
        <img
          src={menuIcon}
          alt="Menu"
          style={{
            width: '1.5em',
            height: '1.5em',
            cursor: 'pointer'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em',
      }}>

        <ModelSelector />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em',
      }}>
        <CostAccSlider />
      </div>

    </div>


  );
};

export default SidebarLeftLayout;
