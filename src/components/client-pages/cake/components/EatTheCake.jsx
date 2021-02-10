import React from 'react';
import { Box, Spinner, Text } from 'theme-ui';
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
      top: '88px',
      left: '226px;',
      ':hover': {
        cursor: isActivated && isEatmeAnimationActive ? null : 'pointer',
      },
    }}
    ref={cakeRef}
    onMouseUp={() => eatMePauseHandler()}
    onClick={() => isActivated && eatMeHandler()}
  >
    {!isReady && <Spinner />}
    {!isActivated && <Text variant="winningMessage">You are not activated. Please contact executive office manager.</Text>}
    <AnimatedEatCake ref={eatMeRef} isReady={canEatCake && isActivated} />
  </Box>
);

export default React.memo(EatTheCake);
