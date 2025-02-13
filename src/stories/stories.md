yarn ladle serve



import type { StoryDefault, Story } from "@ladle/react";
import SidebarLeftLayout from '../components/SidebarLeft/Layout';

export default {
  title: "Level / Sub level",
} satisfies StoryDefault;

export const SidebarStory: Story = () => <SidebarLeftLayout />;

export const SidebarStory2: Story = () => <SidebarLeftLayout />;
