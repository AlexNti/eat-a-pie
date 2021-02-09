import React from 'react';
import { Box, Flex } from 'theme-ui';

const GiftModal = () => (
  <Flex sx={{
    position: 'absolute',
    width: '755px',
    height: '405px',
    top: 154,
    background: ' #F9F9F9',
    borderRadius: '20px',
    overflow: 'hidden',
  }}
  />
);

export default React.memo(GiftModal);
