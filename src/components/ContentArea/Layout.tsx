import React from 'react';
import { Stack } from '@mui/material';
import { ChatBox } from './components/ChatBox';
import MessageArea from './components/MessageArea';

const ContentArea: React.FC = () => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
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
          height: 'auto',
          overflowY: 'auto',
        }}
      >
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