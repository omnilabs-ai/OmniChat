import type { Story } from "@ladle/react";
import '../App.css';
import SidebarLeftLayout from '../components/SidebarLeft/Layout';
import HeaderLogoComponent from '../components/SidebarLeft/components/HeaderLogo';
import ModelSelectorComponent from "../components/SidebarLeft/components/ModelSelector";


export default {
    title: "Sidebar",
};


export const Sidebar: Story = () => <SidebarLeftLayout />;

export const HeaderLogo: Story = () => <HeaderLogoComponent />;

export const ModelSelector: Story = () => <ModelSelectorComponent/>;
