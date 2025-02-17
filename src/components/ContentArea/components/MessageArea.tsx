import React from 'react';
import MessageBox, { MessageType } from './MessageBox';
import { useAtom } from 'jotai';
import { chatMessages } from '../../../atoms';

const MessageArea: React.FC = () => {
  const [messages] = useAtom(chatMessages);

  return (
    <div style={{ 
      padding: '10px', 
      margin: '10px',
      height: '100%',
      overflowY: 'auto'
    }}>
      {messages.map((message, index) => (
        <MessageBox 
          key={index}
          message={message.content}
          type={message.role as MessageType}
        />
      ))}
    </div>
  );
};

export default MessageArea;
