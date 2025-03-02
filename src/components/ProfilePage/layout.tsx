import React from 'react';
import { Box } from '@mui/material';
import ProfileOutlet from './components/outlet';

const ProfilePageLayout: React.FC = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <ProfileOutlet />
    </Box>
  );
};

export default ProfilePageLayout;
