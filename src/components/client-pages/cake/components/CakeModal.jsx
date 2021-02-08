import React from 'react';
import { Box, Flex, Spinner } from 'theme-ui';
import EatTheCake from './EatTheCake';

const CakeModal = ({
  cakeRef,
  eatMePauseHandler,
  eatMeHandler,
  isReady,
  isActivated,
  eatMeRef,
  canEatCake,
  isEatmeAnimationActive,
}) => (
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
    <EatTheCake
      cakeRef={cakeRef}
      eatMePauseHandler={eatMePauseHandler}
      eatMeHandler={eatMeHandler}
      isReady={isReady}
      isActivated={isActivated}
      eatMeRef={eatMeRef}
      canEatCake={canEatCake}
      isEatmeAnimationActive={isEatmeAnimationActive}
    />

    <Box sx={{
      position: 'absolute',
      top: '96px',
      left: '0px',
    }}
    >
      <svg width="755" height="310" viewBox="0 0 755 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.3152 766.819C-68.7137 528.477 -125.667 682.816 -265.803 464.634C-405.939 246.453 -147.618 -187.26 290.697 90.4437C398.368 195.388 574.914 75.6327 703.86 107.427C829.845 138.491 907.486 383.809 783.773 462.349C660.06 540.888 596.023 647.825 527.835 780.141C459.647 912.457 195.344 1005.16 63.3152 766.819Z" fill="white" />
      </svg>
    </Box>
  </Flex>
);

export default React.memo(CakeModal);
