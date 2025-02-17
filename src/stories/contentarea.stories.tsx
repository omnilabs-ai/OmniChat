import type { Story } from "@ladle/react";
import '../App.css';


import Box from "@mui/material/Box";
import ChatBoxComponent from "../components/ContentArea/components/ChatBox";
import MessageBoxComponent from "../components/ContentArea/components/MessageBox";

export default {
    title: "Content Area",
};

export const ChatBox: Story = () => (
  <Box sx={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '768px'}}>
    <ChatBoxComponent />
  </Box>
)

export const MessageBox: Story = () => (
  <Box sx={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '768px'}}>
    <MessageBoxComponent message="Hello, how are you?" type="user"/>
  </Box>
)
