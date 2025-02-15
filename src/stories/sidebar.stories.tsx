import type { Story } from "@ladle/react";
import '../App.css';
import SidebarLeftLayout from '../components/SidebarLeft/Layout';
import HeaderLogoComponent from '../components/SidebarLeft/components/HeaderLogo';
import ModelSelectorComponent from "../components/SidebarLeft/components/ModelSelector";
import CostAccSliderComponent from "../components/SidebarLeft/components/CostAccSlider";
import Box from "@mui/material/Box";


export default {
    title: "Sidebar",
};

export const Sidebar: Story = () => (
  <Box sx={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '25vw' }}>
    <SidebarLeftLayout />
  </Box>
);

export const HeaderLogo: Story = () => (
  <Box sx={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100px', maxWidth: '500px', border: '1px solid #ccc' }}>
    <HeaderLogoComponent />
  </Box>
)

// export const ModelSelector: Story = () => <ModelSelectorComponent/>;

export const CostAccSlider: Story = () => (
  <Box sx={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100px', maxWidth: '25vw', border: '1px solid #ccc' }}>
    <CostAccSliderComponent/>
  </Box>
)

export const ModelSelector: Story = () => (
  <Box sx={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100px', maxWidth: '25vw', border: '1px solid #ccc' }}>
    <ModelSelectorComponent/>
  </Box>
)
