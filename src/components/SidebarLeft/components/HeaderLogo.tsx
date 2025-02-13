import React from 'react';
import omniLogo from '../../../assets/omnilogo.svg';

const HeaderLogo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5em',
      fontSize: '1em'
    }}>
      <img 
        src={omniLogo} 

        alt="Omni Logo" 
        style={{ 
          width: '1.5em',
          height: '1.5em',
        }} 
      />
      <span style={{
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        color: 'orange'
      }}>
        OMNI
      </span>
    </div>
  );
};

export default HeaderLogo;
