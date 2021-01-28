import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Text, Box } from 'theme-ui';

const Layout = ({ children }) => (
  <>
    <Helmet title="Agile Actors to kopee to peeta" />
    {/* some styles should applied globally via the layout */}

    <Flex
      bg="background"
      sx={{
        minHeight: '100vh',
        height: '10px',
        maxWidth: '600px',
        mt: '0',
        mb: '0',
        ml: 'auto',
        mr: 'auto',
        flexDirection: 'column',
      }}
    >
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box margin="10px">
          <Text variant="default">Agile Actors Lucky Cake!!</Text>
        </Box>
      </Flex>

      {children}
    </Flex>
  </>
);

export default Layout;
