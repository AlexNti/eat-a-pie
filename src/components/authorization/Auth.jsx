import React from 'react';
import { Flex, Button } from 'theme-ui';

import withAuthorization from '../withAuthorization';

const Auth = ({ handleSignIn }) => (
  <Flex
    sx={{
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
  >
    <Button
      sx={{
        height: '254px',
        width: '254px',
        color: 'background',
        backgroundColor: '#fff',
        border: 0,
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '32px',
        fontWeight: 800,
      }}
      onClick={() => handleSignIn()}
    >
      <div>Sign In</div>
    </Button>
  </Flex>
);

export default withAuthorization({ path: '/app/' })(Auth);
