import type { Story } from "@ladle/react";
import '../App.css';
import SidebarLeftLayout from '../components/SidebarLeft/Layout';
import HeaderLogoComponent from '../components/SidebarLeft/components/HeaderLogo';


export default {
    title: "Sidebar",
};


export const Sidebar: Story = () => <SidebarLeftLayout />;

export const HeaderLogo: Story = () => <HeaderLogoComponent />;
