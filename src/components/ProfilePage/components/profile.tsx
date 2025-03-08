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
      </Box>    

      <Box sx={{height: '100vh', width: '100vh'}}>
        <Typography sx = {{fontFamily: 'monospace', fontSize: 16}}>Email: {currentUser?.email}</Typography>
        <Typography sx = {{fontFamily: 'monospace', fontSize: 16, mt: 1.7}}>Password: {"********"}</Typography>
        <Button sx = {{mt: 10, backgroundColor: 'white', borderColor: 'darkgray', borderWidth: 5, borderStyle: 'solid'}} variant="contained">
        Upgrade to Pro
      </Button>
      </Box>

    </Paper>
  );
};

export default Profile;
