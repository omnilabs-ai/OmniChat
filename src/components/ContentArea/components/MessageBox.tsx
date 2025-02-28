import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MessageType } from '../../../types/chat';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://github.com/uiwjs/react-markdown-editor

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
      // backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      marginRight: 'auto',
    },
  };

  return (
    <div style={messageStyles[type]}>
      {/* <ReactMarkdown>{message}</ReactMarkdown> */}
      <ReactMarkdown
        children={message}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
};

export default MessageBox;
