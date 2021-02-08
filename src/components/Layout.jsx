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

      <Box sx={{
        position: 'fixed', left: '117px', top: '-8px',
      }}
      >
        <svg width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M377.44 537.179C480.181 550.554 645.013 508.464 626.085 628.572C599.026 800.094 824.255 861.918 962.347 782.488C1032.52 742.138 1093.06 573.729 1234.03 534.695C1568.46 442.169 1400.24 -157.741 986.274 32.5075C708.678 160.086 657.964 -276.44 329.742 -176.266C-80.1107 -50.9274 -55.8072 480.837 377.44 537.179Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="1427.25" y1="67.742" x2="883.175" y2="771.515" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3399FF" />
              <stop offset="1" stopColor="#005ECE" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {children}
    </Flex>
  </>
);

export default Layout;
