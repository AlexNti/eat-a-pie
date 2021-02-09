import React from 'react';
import { Box, Spinner } from 'theme-ui';
import AnimatedEatCake from './AnimatedEatCake';

const EatTheCake = ({
  cakeRef,
  isEatmeAnimationActive,
  eatMePauseHandler,
  eatMeHandler,
  isReady,
  isActivated,
  eatMeRef,
  canEatCake,
}) => (
  <Box
    sx={{
      overflow: 'hidden',
      height: '226px',
      position: 'absolute',
      zIndex: 1,
      top: '71px',
      left: '187px;',
      ':hover': {
        cursor: isEatmeAnimationActive ? null : 'pointer',
      },
    }}
    ref={cakeRef}
    onMouseUp={() => eatMePauseHandler()}
    onClick={() => eatMeHandler()}
  >
    {!isReady && <Spinner />}
    {!isActivated && <Box>You are not activated. Please contact executive office manager.</Box>}
    <AnimatedEatCake ref={eatMeRef} isReady={canEatCake} />
  </Box>
);

export default React.memo(EatTheCake);
