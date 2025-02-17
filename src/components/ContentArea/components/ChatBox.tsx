import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const ChatBox: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Implement send message functionality
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        p: 2,
        borderRadius: '1rem',
        display: 'flex',
        gap: 1,
        alignItems: 'flex-end',
        paddingBottom: '1.5rem',
        backgroundColor: '#F9FAFB'
      }}
    >
      <TextField
        fullWidth
        multiline
        value={message}
        maxRows={8}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
        variant="standard"
        size="small"
        sx={{
          '& .MuiInput-underline:before': { borderBottom: 'none' },
          '& .MuiInput-underline:after': { borderBottom: 'none' },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
        }}
      />
      <IconButton 
        color="primary" 
        onClick={handleSend}
        disabled={!message.trim()}
        sx={{
          height: 'fit-content'
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatBox;
