import React from 'react';
import { Box, Flex } from 'theme-ui';
import WinGiftCard from './WinGiftCard';

const GiftModal = ({ gift }) => (
  <Box
    sx={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 69, 130, 0.8);',
      zIndex: 2,
      cursor: 'pointer',
    }}
  >
    <Flex
      sx={{
        background: ' #F9F9F9',
        borderRadius: '20px',
        height: '405px',
        width: '755px',
        overflow: 'hidden',
        position: 'absolute',
        top: '200px',
        left: '50%',
        transform: 'translate(-50%, -0%)',
        boxShadow: '0px 16px 40px rgb(84 89 95 / 20%)',

      }}
    >
      <WinGiftCard wonGift={gift} />
    </Flex>
  </Box>
);

export default React.memo(GiftModal);
