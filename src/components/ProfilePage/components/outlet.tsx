import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAtom } from 'jotai';
import { themeAtom } from '../../../atoms';

const ProfileOutlet: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'API Keys', icon: <VpnKeyIcon />, path: '/profile/api-keys' }
  ];

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      {/* Left Navigation Bar */}
      <Box
        sx={{
          width: 240,
          borderRight: `1px solid ${theme.palette.divider}`,
          height: '100%',
          backgroundColor: theme.palette.background.paper
        }}
      >
        <List>
          {/* Back to Chat Button */}
          <ListItem
            onClick={() => navigate('/')}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              mb: 2,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.text.primary }}>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText primary="Back to Chat" />
          </ListItem>

          {/* Existing Navigation Items */}
          {navItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                backgroundColor: location.pathname === item.path ? theme.palette.action.selected : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                color: theme.palette.text.primary,
                textDecoration: 'none'
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Content Area */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProfileOutlet;
