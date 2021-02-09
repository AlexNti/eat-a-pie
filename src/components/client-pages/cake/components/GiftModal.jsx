import React from 'react';
import { Flex } from 'theme-ui';
import WinGiftCard from './WinGiftCard';

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
  >
    <WinGiftCard />

  </Flex>
);

export default React.memo(GiftModal);
