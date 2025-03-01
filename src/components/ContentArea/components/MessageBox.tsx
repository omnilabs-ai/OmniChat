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
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
    width: 'fit-content',
    maxWidth: '80%',
    wordBreak: 'break-word',
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

                  <SyntaxHighlighter
                    language={language}
                    // language="jsx"
                    // style={docco}
                    // style={atomDark}
                    style={materialDark}
                    wrapLongLines
                    customStyle={{
                      backgroundColor: "transparent",
                      // backgroundColor: "#191919",
                      // borderRadius: "0.8em",
                      // opacity: "1",
                      // marginTop: "2rem",
                      // marginBottom: '1rem',
                    }}
                    codeTagProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>

              );
            }
            // inline code
            else {
              return <code className={className} {...props}>{children}</code>;
            }
          },
        }}
      />
    </div>
  );
};

export default MessageBox;
