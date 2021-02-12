import React from 'react';
import { Box, Flex, Text } from 'theme-ui';

import Loser from './Loser.svg';

const LoserModal = () => (
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '34px',
          position: 'relative',
          width: '100%',
        }}
      >
        <svg
          width="347"
          height="192"
          viewBox="0 0 347 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M95.7895 45.521C109.944 44.7442 143.19 54.2637 153.723 41.571C158.028 36.3043 157.199 28.7467 158.621 22.1238C159.606 17.7312 161.65 13.6457 164.573 10.2222C167.496 6.79865 171.211 4.14068 175.395 2.47917C190.273 -3.52483 208.602 2.11051 220.781 11.5247C234.895 22.4398 244.81 37.858 257.647 50.1293C284.718 75.9887 330.907 82.335 343.744 121.229C352.487 147.747 336.094 179.808 309.432 188.3C289.458 194.66 267.759 188.787 248.088 181.559C231.051 175.305 213.96 166.654 195.422 166.707C174.921 166.786 153.67 174.607 134.105 179.953C113.13 185.759 91.7078 190.947 70.0355 189.814C48.3632 188.682 26.151 180.361 12.7473 163.376C-1.90715 144.706 -3.63199 117.701 6.05868 96.081C21.9772 60.531 58.9492 47.5487 95.7895 45.521Z"
            fill="#F0F0F0"
          />
        </svg>

        <Flex
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
            top: '34px',
            bottom: '34px',
            left: 0,
            right: 0,
          }}
        >
          <Box>
            <Text
              sx={{
                color: '#015FCF',
                fontSize: '16px',
              }}
            >
              Oh noooo!
            </Text>
          </Box>
          <Box>
            <Text
              sx={{
                color: '#015FCF',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '80px',
              }}
            >
              No presents but lots of love!
            </Text>
          </Box>
          <Box
            sx={{
              marginBottom: '70px',
            }}
          >
            <img src={Loser} alt="loser" />
          </Box>
          <Box>
            <Text
              sx={{
                color: '#015FCF',
                fontSize: '16px',
              }}
            >
              Next year you’ll get luckier. 🙈
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Box>
);

export default React.memo(LoserModal);
