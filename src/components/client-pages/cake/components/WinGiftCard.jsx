import React from 'react';
import { Box, Flex, Text } from 'theme-ui';

const WinGiftCard = ({ wonGift = 'ΠΑΤΑΤΑ' }) => (
  <Flex sx={{ width: '100%', height: '100%', position: 'relative' }}>
    <Box
      sx={{
        position: 'absolute',
        top: '60px',
        left: '50%',
        transform: 'translate(-50%,0)',
        width: '298px',
        height: '24px',
      }}
    >
      <Text variant="winningMessage">
        You’ve just WON the
        {' '}
        {wonGift}
      </Text>
    </Box>

    <Box
      sx={{
        position: 'absolute',
        top: '35px',
        left: '50%',
        transform: 'translate(-50%,0)',
        width: '298px',
        height: '24px',
      }}
    >
      <Text variant="cheerMessage">
        Yayyyyyyy!
      </Text>
    </Box>

    <Box sx={{
      position: 'absolute',
      left: ' 50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    >
      <svg width="279" height="184" viewBox="0 0 279 184" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M214.792 20.9162C194.85 22.0498 157.401 46.6407 156.699 23.211C155.703 -10.2492 92.7241 -2.63846 69.3984 17.3388C57.5453 27.4877 52.0874 61.5535 26.7735 73.9807C-33.28 103.447 20.0033 211.093 91.6374 160.274C139.673 126.195 164.863 207.084 223.468 176.389C296.639 138.014 298.88 16.1244 214.792 20.9162Z" fill="#3399FF" fillOpacity="0.1" />
        <path d="M180.36 86.6868C180.36 109.702 161.703 128.36 138.687 128.36C115.671 128.36 97.0142 109.702 97.0142 86.6868C97.0142 63.6712 115.671 45.0139 138.687 45.0139C161.703 45.0139 180.36 63.6712 180.36 86.6868Z" fill="url(#paint0_radial)" />
        <path d="M97.0137 86.6869C97.0137 101.561 104.808 114.612 116.533 121.986H160.841C172.565 114.612 180.359 101.561 180.359 86.6869C180.359 71.8131 172.565 58.7617 160.841 51.3875H116.533C104.808 58.7617 97.0137 71.8131 97.0137 86.6869Z" fill="url(#paint1_linear)" />
        <path d="M97.0137 86.6867C97.0137 97.2976 100.982 106.979 107.511 114.337H169.862C176.392 106.979 180.359 97.2976 180.359 86.6867C180.359 76.0758 176.392 66.394 169.862 59.0369H107.511C100.982 66.394 97.0137 76.0758 97.0137 86.6867V86.6867Z" fill="url(#paint2_linear)" />
        <path d="M97.0137 86.6868C97.0137 92.8885 98.37 98.7723 100.8 104.061H176.573C179.003 98.7723 180.359 92.8885 180.359 86.6868C180.359 80.4851 179.003 74.6013 176.573 69.3127H100.8C98.37 74.6013 97.0137 80.4851 97.0137 86.6868Z" fill="url(#paint3_linear)" />
        <path d="M97.0137 86.6868C97.0137 90.2764 97.469 93.7591 98.3223 97.0822H179.051C179.904 93.7591 180.359 90.2764 180.359 86.6868C180.359 83.0973 179.904 79.6146 179.051 76.2915H98.3223C97.469 79.6146 97.0137 83.0973 97.0137 86.6868V86.6868Z" fill="url(#paint4_linear)" />
        <path d="M135.377 45.1443C113.91 46.8313 97.0137 64.7853 97.0137 86.6868C97.0137 108.588 113.91 126.542 135.377 128.229C156.845 126.542 173.741 108.588 173.741 86.6868C173.741 64.7853 156.845 46.8313 135.377 45.1443Z" fill="url(#paint5_radial)" />
        <path d="M137.535 48.9582C136.104 48.7636 134.652 48.7636 133.221 48.9582C114.641 51.4858 100.323 67.4139 100.323 86.6867C100.323 105.96 114.641 121.888 133.221 124.415C134.652 124.61 136.104 124.61 137.535 124.415C156.115 121.888 170.433 105.96 170.433 86.6867C170.433 67.4139 156.115 51.4858 137.535 48.9582Z" fill="url(#paint6_radial)" />
        <path d="M163.075 86.6869C163.075 69.8946 150.598 56.2817 135.208 56.2817C119.817 56.2817 107.341 69.8946 107.341 86.6869C107.341 103.479 119.817 117.092 135.208 117.092C150.598 117.092 163.075 103.479 163.075 86.6869Z" fill="url(#paint7_radial)" />
        <path d="M142.859 57.4441C139.39 56.3656 135.684 56.3656 132.215 57.4441C120.544 61.0718 111.998 72.7897 111.998 86.6868C111.998 100.855 120.882 112.76 132.903 116.133C135.931 116.983 139.143 116.983 142.17 116.133C154.192 112.76 163.075 100.856 163.075 86.6868C163.075 72.7897 154.529 61.0718 142.859 57.4441Z" fill="url(#paint8_radial)" />
        <rect x="101.978" y="119.851" width="10.1914" height="1.68003" rx="0.840017" transform="rotate(131.255 101.978 119.851)" fill="#F49701" />
        <rect x="177.854" y="132.372" width="12.3219" height="2.03123" rx="1.01561" transform="rotate(-132.779 177.854 132.372)" fill="#F49701" />
        <rect x="91.0728" y="47.6333" width="12.3219" height="2.03123" rx="1.01561" transform="rotate(40.8991 91.0728 47.6333)" fill="#F49701" />
        <rect x="186.53" y="59.1814" width="9.71563" height="1.6016" rx="0.800799" transform="rotate(164.403 186.53 59.1814)" fill="#F49701" />
        <rect x="176.171" y="56.8867" width="15.6612" height="1.6016" rx="0.800799" transform="rotate(-33.6014 176.171 56.8867)" fill="#F49701" />
        <rect x="106.738" y="119.706" width="16.4282" height="1.68003" rx="0.840017" transform="rotate(124.969 106.738 119.706)" fill="#F49701" />
        <rect x="167.606" y="125.5" width="19.8624" height="2.03123" rx="1.01561" transform="rotate(55.3823 167.606 125.5)" fill="#F49701" />
        <rect x="102.015" y="53.335" width="19.8624" height="2.03123" rx="1.01561" transform="rotate(-130.94 102.015 53.335)" fill="#F49701" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(136.664 85.2504) scale(43.4039)">
            <stop stopColor="#FFA700" />
            <stop offset="0.3227" stopColor="#FCA300" />
            <stop offset="0.6649" stopColor="#F39600" />
            <stop offset="1" stopColor="#E58200" />
          </radialGradient>
          <linearGradient id="paint1_linear" x1="138.687" y1="80.103" x2="138.687" y2="154.571" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E58200" stopOpacity="0" />
            <stop offset="0.0396" stopColor="#E27F04" stopOpacity="0.039216" />
            <stop offset="0.4671" stopColor="#C15D2F" stopOpacity="0.466667" />
            <stop offset="0.8016" stopColor="#AD4949" stopOpacity="0.8" />
            <stop offset="1" stopColor="#A64153" />
          </linearGradient>
          <linearGradient id="paint2_linear" x1="138.687" y1="96.7711" x2="138.687" y2="21.5185" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E58200" stopOpacity="0" />
            <stop offset="0.0396" stopColor="#E27F04" stopOpacity="0.039216" />
            <stop offset="0.4671" stopColor="#C15D2F" stopOpacity="0.466667" />
            <stop offset="0.8016" stopColor="#AD4949" stopOpacity="0.8" />
            <stop offset="1" stopColor="#A64153" />
          </linearGradient>
          <linearGradient id="paint3_linear" x1="138.687" y1="87.9468" x2="138.687" y2="112.014" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E58200" stopOpacity="0" />
            <stop offset="0.0396" stopColor="#E27F04" stopOpacity="0.039216" />
            <stop offset="0.4671" stopColor="#C15D2F" stopOpacity="0.466667" />
            <stop offset="0.8016" stopColor="#AD4949" stopOpacity="0.8" />
            <stop offset="1" stopColor="#A64153" />
          </linearGradient>
          <linearGradient id="paint4_linear" x1="138.687" y1="95.7907" x2="138.687" y2="54.8084" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E58200" stopOpacity="0" />
            <stop offset="0.0396" stopColor="#E27F04" stopOpacity="0.039216" />
            <stop offset="0.4671" stopColor="#C15D2F" stopOpacity="0.466667" />
            <stop offset="0.8016" stopColor="#AD4949" stopOpacity="0.8" />
            <stop offset="1" stopColor="#A64153" />
          </linearGradient>
          <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(123.181 75.4456) scale(58.3395)">
            <stop stopColor="#FFC738" />
            <stop offset="0.2837" stopColor="#FFC534" />
            <stop offset="0.5391" stopColor="#FFBF29" />
            <stop offset="0.7827" stopColor="#FFB417" />
            <stop offset="1" stopColor="#FFA700" />
          </radialGradient>
          <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(135.378 86.6867) scale(36.4921)">
            <stop stopColor="#FFFCF8" />
            <stop offset="0.9485" stopColor="#FFFCF8" stopOpacity="0.05098" />
            <stop offset="1" stopColor="#FFFCF8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(138.061 82.7882) scale(43.6139 47.5875)">
            <stop stopColor="#FFA700" />
            <stop offset="0.3227" stopColor="#FCA300" />
            <stop offset="0.6649" stopColor="#F39600" />
            <stop offset="1" stopColor="#E58200" />
          </radialGradient>
          <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126.915 76.2292) scale(44.4454)">
            <stop stopColor="#FFC738" />
            <stop offset="0.2837" stopColor="#FFC534" />
            <stop offset="0.5391" stopColor="#FFBF29" />
            <stop offset="0.7827" stopColor="#FFB417" />
            <stop offset="1" stopColor="#FFA700" />
          </radialGradient>
        </defs>
      </svg>

    </Box>

  </Flex>
);

export default WinGiftCard;
