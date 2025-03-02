import React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../../../../config/firebase';
import { signOut } from 'firebase/auth';
import { useTheme } from '@mui/material';

const SignOutButton: React.FC = () => {
  const theme = useTheme();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Signed out successfully');
      window.location.href = '/auth';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Button
      startIcon={<LogoutIcon />}
      onClick={handleSignOut}
      sx={{
        width: '100%',
        justifyContent: 'flex-start',
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        }
      }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton; 