import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Grid2';
import menuIcon from '../../assets/menuIcon.svg';
import HeaderLogo from './components/HeaderLogo';
import CostAccSlider from './components/CostAccSlider';
import React from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '../../atoms';
import ModelSelector from './components/ModelSelector';
const SidebarLeftLayout: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  const image_component = () => {
    return (
      <img 
        src={menuIcon} 
        alt="Menu" 
        style={{
          maxWidth: '80%',
          maxHeight: 'auto',
          cursor: 'pointer',
          paddingRight: '1em'
        }} 
      />
    )
  }

  const CustomItem: React.FC<{
    width?: string,
    height?: string,
    justifyContent?: string,
    alignItems?: string,
    sx?: object,
    children?: React.ReactNode
  }> = ({ 
      width, 
      height,
      justifyContent = 'center',
      alignItems = 'center',
      sx = {},
      children
  }) => {
    return (
      <Item 
        sx={{ 
          width,
          height,
          // border: '1px solid blue', 
          display: 'flex', 
          justifyContent, 
          alignItems,
          ...sx
        }}
      >
        {children}
      </Item>
    );
  };

  return (
    <Box sx={{boxSizing: 'border-box', width: '100%', height: '100%', borderRight: `1px solid ${theme.palette.divider}`}}>
      <Stack direction="column" height='100%' justifyContent='space-between'>
        <Stack direction="row" spacing={4} sx={{ height: '80px'}}>
          <CustomItem width="80%" height="100%" justifyContent='flex-start'><HeaderLogo /></CustomItem>
          <CustomItem width="20%" height="100%">{image_component()}</CustomItem>
        </Stack>
        <Stack direction="column" height='90%' justifyContent='space-between' sx={{overflowY: 'auto'}}>
          <CustomItem width="100%" height="300px" sx={{padding: '1em'}}><ModelSelector/></CustomItem>
          <CustomItem width="100%" height="200px" sx={{padding: '1em'}}><CostAccSlider /></CustomItem>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SidebarLeftLayout;
