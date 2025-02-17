import React from 'react';
import { useTheme } from '@mui/material/styles';

export type MessageType = 'user' | 'assistant';

interface MessageBoxProps {
  message: string;
  type: MessageType;
  style?: React.CSSProperties;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type, style }) => {
  const theme = useTheme();

  const baseStyles: React.CSSProperties = {
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
    width: 'fit-content',
    maxWidth: '80%',
    ...style,
  };

  const messageStyles: Record<MessageType, React.CSSProperties> = {
    user: {
      ...baseStyles,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      marginLeft: 'auto',
    },
    assistant: {
      ...baseStyles,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      marginRight: 'auto',
    },
  };

  return (
    <div style={messageStyles[type]}>
      {message}
    </div>
  );
};

export default MessageBox;
