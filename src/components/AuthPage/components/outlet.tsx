import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';
import SignIn from './signin';
import SignUp from './signup';


const AuthOutlet: React.FC = () => {
  const [signin, setSignin] = useState(true);

  return (
    <Container  
      maxWidth="sm" 
      sx={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4 
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          p: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
        }}
      >
        {signin ? <SignIn setSignin={setSignin} /> : <SignUp setSignin={setSignin} />}
      </Paper>
    </Container>
  );
};

export default AuthOutlet;
