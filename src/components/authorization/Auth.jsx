import React from 'react';
import {
  Flex, Button, Box, Text,
} from 'theme-ui';

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
        height: '40px',
        width: '200px',
        color: 'background',
        backgroundColor: '#fff',
        border: 0,
        cursor: 'pointer',
        fontSize: '32px',
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        outline: 'none',
      }}
      onClick={() => handleSignIn()}
    >
      <Text
        variant="cheerMessage"
        sx={{ fontSize: '16px', width: '120px', marginLeft: 'auto' }}
      >
        Sign in with
      </Text>
      <Box sx={{ marginLeft: 'auto' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.96409 10.7099C3.78409 10.1699 3.68182 9.59313 3.68182 8.99995C3.68182 8.40677 3.78409 7.82995 3.96409 7.28995V4.95813H0.957273C0.347727 6.17313 0 7.54768 0 8.99995C0 10.4522 0.347727 11.8268 0.957273 13.0418L3.96409 10.7099Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
            fill="#EA4335"
          />
        </svg>
      </Box>

    </Button>
  </Flex>
);

export default withAuthorization()(Auth);
