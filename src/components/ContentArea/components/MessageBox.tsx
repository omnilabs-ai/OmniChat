import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MessageType } from '../../../types/chat';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MessageBoxProps {
  message: string;
  type: MessageType;
  style?: React.CSSProperties;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type, style }) => {
  const theme = useTheme();

  const baseStyles: React.CSSProperties = {
    // padding: '12px',
    // padding: '1px 12px',
    padding: '0.0005rem 1.5rem',
    borderRadius: '8px',
    boxSizing: 'border-box',
    // marginBottom: '12px',
    marginBottom: '8px',
    width: 'fit-content',
    maxWidth: '80%',
    // wordBreak: 'break-word',
    alignItems: 'center',
    lineHeight: '2',
    fontSize: '15px',
    ...style,
  };

  const messageStyles: Record<MessageType, React.CSSProperties> = {
    user: {
      ...baseStyles,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      marginLeft: 'auto',
      // height: 'auto',
      // maxHeight: '70px',
    },
    assistant: {
      ...baseStyles,
      color: theme.palette.text.primary,
      marginRight: 'auto',
    },
  };

  return (
    <div style={messageStyles[type]}>
      <ReactMarkdown
        children={message}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            // className  e.g. codeblock ```javascript -> className: "language-javascript"
            // className: "plaintext" returns null

            // block code 
            if (match) {
              const language = match[1];
              return (
                <div
                  style={{
                    backgroundColor: '#191919',
                    borderRadius: '0.8em',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                    width: '120%',
                    // maxWidth: 'calc(100% + 32px)',
                    maxWidth: '200%',
                    overflowX: 'auto',
                    fontSize: '0.9rem',
                  }}
                >
                  {/* language label  */}
                  <div
                    style={{
                      backgroundColor: '#585858',
                      padding: '8px 12px',
                      fontSize: '0.875rem',
                      color: '#ffffffcc',
                      fontFamily: 'monospace',
                    }}
                  >
                    {language}
                  </div>

                  {/*  horizontal scroll */}
                  <div
                    style={{
                      overflowX: 'auto', // enable horizontal scroll
                      width: '100%',
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#585858 #191919',
                    }}
                  >
                    <SyntaxHighlighter
                      language={language}
                      // language="jsx"
                      // style={docco}
                      // style={atomDark}
                      style={materialDark}
                      // wrapLongLines
                      wrapLongLines={false}
                      customStyle={{
                        backgroundColor: "transparent",
                        padding: '1rem'
                      }}
                      codeTagProps={{
                        style: {
                          color: "white",
                          whiteSpace: 'pre',
                        },
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                </div>

              );
            }
            // inline code
            else {
              return <code className={className}
                style={{
                  fontSize: '13px', // smaller font  
                  fontFamily: 'monospace',
                }}
                {...props}>{children}</code>;
            }
          },
        }}
      />
    </div>
  );
};

export default MessageBox;
