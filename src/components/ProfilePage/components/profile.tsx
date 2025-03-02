import React from 'react';
import { Box, Paper, Typography, Avatar, Button } from '@mui/material';
import { useAuth } from '../../../hooks/useAuth';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Avatar
          sx={{ width: 80, height: 80 }}
          src={currentUser?.photoURL || undefined}
        >
          {currentUser?.email?.charAt(0).toUpperCase()}
        </Avatar>
        <Box>
          <Typography variant="h5">{currentUser?.displayName || 'User'}</Typography>
          <Typography color="textSecondary">{currentUser?.email}</Typography>
        </Box>
      </Box>    

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>Account Information</Typography>
        <Typography>Email verified: {currentUser?.emailVerified ? 'Yes' : 'No'}</Typography>
        <Typography>Account created: {currentUser?.metadata.creationTime}</Typography>
      </Box>

      <Button variant="contained" color="primary">
        Edit Profile
      </Button>
    </Paper>
  );
};

export default Profile;
