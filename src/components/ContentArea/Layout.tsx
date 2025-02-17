import React from 'react';
import { Box } from '@mui/material';
const ContentArea: React.FC = () => {
  return (
    <div style={{
      height: '100%',
      // backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // border: '1px solid #e0e0e0',
    }}>
      <Box sx={{
        width: '900px',
        height: '100%',
        // border: '1px solid #e0e0e0',
      }}>
        Content Area
      </Box>
    </div>
  );
};

export default ContentArea;