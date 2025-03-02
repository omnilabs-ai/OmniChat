import React from 'react';
import { Stack } from '@mui/material';
import { ChatBox } from './components/ChatBox';
import MessageArea from './components/MessageArea';

const ContentArea: React.FC = () => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxWidth: '768px',
        margin: 'auto',
        padding: '1rem',
        // border: '1px solid #e0e0e0',
      }}
      spacing={2}
    >
      
      <Stack
        sx={{
          width: '100%',
          overflowY: 'auto',
          flexGrow: 1,
        }}
      >
        <h2 style={{ textAlign: 'center', color: 'gray' }}>Chat Title</h2>
        <MessageArea />
      </Stack>
      <Stack
        sx={{
          width: '100%',
        }}
      >
        <ChatBox />
      </Stack>
    </Stack>
  );
};

export default ContentArea;