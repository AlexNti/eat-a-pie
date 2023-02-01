import React from 'react';
import { Flex, Button, Box, Text } from 'theme-ui';

import withAuthorization from '../withAuthorization';

const Auth = ({ handleSignIn }) => (
  <Flex
    sx={{
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundImage:
        'linear-gradient(312.72deg, #17CCFC 2.9%, #5D31FF 82.4%,#F35AFF 128.88%)',
      flexDirection: 'column',
    }}
  >
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '125px',
      }}
    >
      <svg
        width="321"
        height="100"
        viewBox="0 0 321 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28400_184655)">
          <path
            d="M146.449 69.7417C144.799 71.4522 142.817 72.8084 140.625 73.7276C138.434 74.6472 136.077 75.1101 133.701 75.0884C131.694 75.1492 129.695 74.7984 127.829 74.0576C125.963 73.3167 124.268 72.2017 122.849 70.7809C120.271 68.0917 118.787 64.2522 118.787 59.6751C118.787 50.5126 124.752 44.2455 133.701 44.2455C136.101 44.2117 138.479 44.7084 140.664 45.6997C142.85 46.6913 144.79 48.153 146.346 49.9809L154.088 43.1351C149.043 37.0109 140.856 33.8457 133.082 33.8457C117.867 33.8457 107.078 44.333 107.078 59.7622C107.078 67.3934 109.759 73.8192 114.281 78.3567C118.803 82.8942 125.244 85.5597 132.677 85.5597C142.331 85.5597 150.034 81.6409 154.358 76.7147L146.449 69.7417Z"
            fill="white"
          />
          <path
            d="M161.359 14.2822H172.886V84.7492H161.359V14.2822Z"
            fill="white"
          />
          <path
            d="M228.408 63.6787C228.598 62.1441 228.704 60.5999 228.725 59.0537C228.725 44.4416 219.158 33.8591 204.363 33.8591C201.1 33.7949 197.859 34.3995 194.838 35.6356C191.818 36.8716 189.082 38.713 186.8 41.0462C182.477 45.5837 179.883 52.0095 179.883 59.6724C179.883 75.292 190.893 85.5728 205.49 85.5728C215.287 85.5728 222.339 81.6066 226.567 76.2282L219.015 69.5407L218.642 69.2237C217.144 71.0978 215.234 72.6016 213.06 73.6182C210.886 74.6349 208.508 75.137 206.109 75.0857C198.699 75.0857 193.352 70.7624 191.829 63.6787H228.408ZM192.02 54.4287C192.534 52.1957 193.589 50.1232 195.09 48.392C196.339 47.0312 197.868 45.9557 199.571 45.2395C201.274 44.5237 203.112 44.1837 204.958 44.2432C211.542 44.2432 215.667 48.3603 217.087 54.4287H192.02Z"
            fill="white"
          />
          <path
            d="M264.353 33.708V46.5591C263.02 46.4562 261.68 46.3528 260.862 46.3528C252.136 46.3528 247.186 52.6199 247.186 60.8462V84.7478H235.676V34.422H247.186V42.0453H247.29C251.2 36.6987 256.809 33.7239 262.917 33.7239L264.353 33.708Z"
            fill="white"
          />
          <path
            d="M291.195 63.6717L282.874 72.9296V84.7492H271.355V14.2822H282.874V57.5079L303.428 34.5823H317.104L299.017 54.8346L317.421 84.7492H304.467L291.41 63.6717H291.195Z"
            fill="white"
          />
          <path
            d="M79.65 13.17L67.6475 25.1723C67.2704 25.549 66.7775 25.7883 66.2483 25.8515C65.7187 25.9148 65.1837 25.7985 64.7283 25.5214C60.0071 22.6731 54.5621 21.2526 49.0508 21.4314C43.5396 21.6102 38.1983 23.3806 33.6714 26.5288C30.8873 28.4668 28.4698 30.8842 26.5319 33.6683C23.3874 38.198 21.6187 43.5396 21.4385 49.0508C21.2584 54.5621 22.6745 60.0079 25.5165 64.7333C25.7917 65.1879 25.9068 65.7213 25.8436 66.2492C25.7803 66.7767 25.5423 67.2679 25.1674 67.6446L13.1651 79.6467C12.9234 79.89 12.632 80.0783 12.3108 80.1983C11.9896 80.3188 11.6463 80.3679 11.3042 80.3433C10.9622 80.3183 10.6296 80.22 10.3292 80.0546C10.0287 79.8892 9.76758 79.6608 9.56362 79.385C3.0696 70.4588 -0.286495 59.6338 0.0191754 48.5996C0.324846 37.5653 4.27508 26.9427 11.2533 18.3898C13.3837 15.7729 15.7759 13.3806 18.3928 11.2503C26.9451 4.27392 37.5662 0.324843 48.5987 0.0191805C59.6312 -0.286482 70.4546 3.06847 79.38 9.56054C79.6579 9.76383 79.8879 10.0249 80.0546 10.3258C80.2217 10.6266 80.3212 10.96 80.3471 11.3031C80.3729 11.6462 80.3237 11.9908 80.2033 12.313C80.0829 12.6353 79.8942 12.9277 79.65 13.17Z"
            fill="url(#paint0_linear_28400_184655)"
          />
          <path
            d="M79.6383 86.7874L67.6358 74.7849C67.2587 74.4082 66.7658 74.1691 66.2366 74.1057C65.7074 74.0424 65.172 74.1586 64.7166 74.4357C60.2649 77.1211 55.1645 78.5407 49.9658 78.5407C44.7666 78.5407 39.6663 77.1211 35.2146 74.4357C34.7592 74.1586 34.2239 74.0424 33.6946 74.1057C33.1652 74.1691 32.6725 74.4082 32.2953 74.7849L20.293 86.7874C20.0413 87.0291 19.8459 87.3236 19.7207 87.6495C19.5955 87.9753 19.5436 88.3249 19.5686 88.6732C19.5936 89.0216 19.6949 89.3599 19.8653 89.6645C20.0357 89.9695 20.2711 90.2328 20.5548 90.4361C29.0983 96.6524 39.3921 100.001 49.9579 100.001C60.5233 100.001 70.817 96.6524 79.3608 90.4361C79.6454 90.2341 79.882 89.9716 80.0541 89.6674C80.2258 89.3632 80.3287 89.0253 80.3554 88.677C80.3816 88.3286 80.3312 87.9786 80.2074 87.6524C80.0833 87.3257 79.8891 87.0303 79.6383 86.7874Z"
            fill="white"
          />
          <path
            d="M49.9901 64.2593C57.8759 64.2593 64.2692 57.8663 64.2692 49.9801C64.2692 42.0943 57.8759 35.7012 49.9901 35.7012C42.1038 35.7012 35.7109 42.0943 35.7109 49.9801C35.7109 57.8663 42.1038 64.2593 49.9901 64.2593Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_28400_184655"
            x1="68.3696"
            y1="-7.32838"
            x2="-32.8531"
            y2="93.9021"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17CCFC" />
            <stop offset="0.5" stopColor="#5D31FF" />
            <stop offset="1" stopColor="#F35AFF" />
          </linearGradient>
          <clipPath id="clip0_28400_184655">
            <rect width="320.833" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Text sx={{ marginTop: '40px' }} variant="loginText">
        The luckiest cake of your life! Talk about click...bite.
      </Text>
    </Flex>

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
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.488 4.2144L21.6472 8.05514C21.5265 8.1757 21.3688 8.25224 21.1994 8.27249C21.0301 8.29275 20.8588 8.25554 20.713 8.16683C19.2022 7.2554 17.4598 6.80085 15.6963 6.85805C13.9327 6.91526 12.2234 7.48179 10.7748 8.48922C9.88393 9.10936 9.11035 9.88295 8.4902 10.7739C7.48396 12.2233 6.91797 13.9327 6.86032 15.6963C6.80268 17.4599 7.25583 19.2025 8.16527 20.7146C8.25333 20.8601 8.29019 21.0308 8.26994 21.1997C8.2497 21.3685 8.17353 21.5257 8.05357 21.6462L4.21283 25.487C4.13549 25.5648 4.04224 25.6251 3.93946 25.6635C3.83668 25.702 3.72681 25.7178 3.61736 25.7098C3.50791 25.7019 3.40147 25.6703 3.30533 25.6174C3.20919 25.5645 3.12563 25.4914 3.06036 25.4032C0.982273 22.5468 -0.0916784 19.0828 0.00613613 15.5519C0.103951 12.0209 1.36803 8.62167 3.60106 5.88472C4.28277 5.04732 5.0483 4.28179 5.8857 3.60008C8.62244 1.36766 12.0212 0.10395 15.5516 0.00613776C19.082 -0.0916743 22.5455 0.98191 25.4017 3.05937C25.4905 3.12443 25.5641 3.20797 25.6175 3.30424C25.6709 3.4005 25.7029 3.5072 25.7111 3.61699C25.7193 3.72677 25.7036 3.83704 25.6651 3.94017C25.6265 4.0433 25.5661 4.13686 25.488 4.2144Z"
            fill="url(#paint0_linear_2176_4249)"
          />
          <path
            d="M25.488 4.2144L21.6472 8.05514C21.5265 8.1757 21.3688 8.25224 21.1994 8.27249C21.0301 8.29275 20.8588 8.25554 20.713 8.16683C19.2022 7.2554 17.4598 6.80085 15.6963 6.85805C13.9327 6.91526 12.2234 7.48179 10.7748 8.48922C9.88393 9.10936 9.11035 9.88295 8.4902 10.7739C7.48396 12.2233 6.91797 13.9327 6.86032 15.6963C6.80268 17.4599 7.25583 19.2025 8.16527 20.7146C8.25333 20.8601 8.29019 21.0308 8.26994 21.1997C8.2497 21.3685 8.17353 21.5257 8.05357 21.6462L4.21283 25.487C4.13549 25.5648 4.04224 25.6251 3.93946 25.6635C3.83668 25.702 3.72681 25.7178 3.61736 25.7098C3.50791 25.7019 3.40147 25.6703 3.30533 25.6174C3.20919 25.5645 3.12563 25.4914 3.06036 25.4032C0.982273 22.5468 -0.0916784 19.0828 0.00613613 15.5519C0.103951 12.0209 1.36803 8.62167 3.60106 5.88472C4.28277 5.04732 5.0483 4.28179 5.8857 3.60008C8.62244 1.36766 12.0212 0.10395 15.5516 0.00613776C19.082 -0.0916743 22.5455 0.98191 25.4017 3.05937C25.4905 3.12443 25.5641 3.20797 25.6175 3.30424C25.6709 3.4005 25.7029 3.5072 25.7111 3.61699C25.7193 3.72677 25.7036 3.83704 25.6651 3.94017C25.6265 4.0433 25.5661 4.13686 25.488 4.2144Z"
            fill="url(#paint1_linear_2176_4249)"
          />
          <path
            d="M25.4879 27.7715L21.6472 23.9308C21.5265 23.8102 21.3688 23.7336 21.1994 23.7134C21.03 23.6931 20.8587 23.7304 20.713 23.8191C19.2885 24.6784 17.6563 25.1325 15.9927 25.1325C14.329 25.1325 12.6969 24.6784 11.2723 23.8191C11.1266 23.7304 10.9553 23.6931 10.7859 23.7134C10.6166 23.7336 10.4589 23.8102 10.3382 23.9308L6.49743 27.7715C6.41689 27.8489 6.35437 27.9431 6.31431 28.0474C6.27425 28.1517 6.25763 28.2635 6.26562 28.375C6.27362 28.4864 6.30603 28.5947 6.36057 28.6922C6.41511 28.7898 6.49043 28.8741 6.5812 28.9392C9.31513 30.9284 12.6091 31.9999 15.9901 31.9999C19.3711 31.9999 22.6651 30.9284 25.3991 28.9392C25.4902 28.8745 25.5659 28.7905 25.6209 28.6932C25.6759 28.5959 25.7088 28.4876 25.7173 28.3762C25.7258 28.2647 25.7096 28.1528 25.67 28.0483C25.6303 27.9438 25.5682 27.8493 25.4879 27.7715Z"
            fill="#1F0256"
          />
          <path
            d="M15.9941 20.5624C18.5176 20.5624 20.5634 18.5167 20.5634 15.9931C20.5634 13.4696 18.5176 11.4238 15.9941 11.4238C13.4705 11.4238 11.4248 13.4696 11.4248 15.9931C11.4248 18.5167 13.4705 20.5624 15.9941 20.5624Z"
            fill="#1F0256"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2176_4249"
              x1="21.8782"
              y1="-2.34508"
              x2="-10.513"
              y2="30.0487"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17CCFC" />
              <stop offset="0.5" stopColor="#5D31FF" />
              <stop offset="1" stopColor="#F35AFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2176_4249"
              x1="21.8782"
              y1="-2.34508"
              x2="-10.513"
              y2="30.0487"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17CCFC" />
              <stop offset="0.5" stopColor="#5D31FF" />
              <stop offset="1" stopColor="#F35AFF" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Button>
  </Flex>
);

export default withAuthorization()(Auth);
