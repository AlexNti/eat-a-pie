import React from 'react';
import { Box, Flex } from 'theme-ui';

import { tryMeKeys, bounceCakeKeys } from '../../animation/cakeAnimations';
// TODO REFACTOR ALL THIS FILE (BREAK IT SMALLER COMPONENTS USE OF CONSTANTS ETC...)
const Cake = () => {
  const eatMeRef = React.useRef(null);
  const cakeRef = React.useRef(null);
  const eatMeRefAnimation = React.useRef(null);
  const movingCakeTimeRef = React.useRef(null);
  const hasAnimationFinish = React.useRef(false);

  const moveCake = () => {
    if (cakeRef !== null && !hasAnimationFinish.current) {
      cakeRef.current.animate(tryMeKeys, {
        id: 'bounce', delay: 2000, duration: 500, iterations: 2,
      });
    }
  };

  const initiateEatCakeAnimation = () => {
    if (eatMeRef !== null) {
      eatMeRefAnimation.current = eatMeRef.current.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-80%)' },
        ], {
          fill: 'forwards',
          easing: 'steps(4, end)',
          duration: 2000,
        },
      );
    }
    eatMePauseHandler(); // we pausing the eating animation because if we dont do it it will start without clicking it
  };

  const stopMovingCakeAnimation = () => {
    clearInterval(movingCakeTimeRef.current); // stop the moving animation of cake
    if (cakeRef.current.getAnimations()[0]) {
      cakeRef.current.getAnimations().forEach((animation) => {
        if (animation.id === 'bounce') {
          animation.cancel(); // also cancel the animation playing
        }
      });
    }
  };

  const handleCakeAnimationOnClick = () => {
    if (cakeRef !== null && !hasAnimationFinish.current) {
      console.log(cakeRef.current.getAnimations());
      if (!cakeRef.current.getAnimations().length) {
        cakeRef.current.animate(bounceCakeKeys, {
          id: 'heartBeat', duration: 1300, easing: 'ease-in-out',
        });
      }
    }
  };

  // start the eating animation
  const eatMeHandler = React.useCallback(() => {
    stopMovingCakeAnimation();
    if (eatMeRefAnimation !== null && eatMeRefAnimation.current && !hasAnimationFinish.current) {
      eatMeRefAnimation.current.play();
    }
  }, [eatMeRefAnimation.current]);

  // pause the eating animation
  const eatMePauseHandler = React.useCallback(() => {
    if (eatMeRefAnimation !== null && eatMeRefAnimation.current && !hasAnimationFinish.current) {
      eatMeRefAnimation.current.pause();
    }
  }, [eatMeRefAnimation.current]);

  // add eating animation to cake
  React.useEffect(() => {
    if (eatMeRef.current !== null) {
      initiateEatCakeAnimation();
    }
  }, [eatMeRef.current]);

  // add moving anivation to cake
  React.useEffect(() => {
    if (cakeRef.current !== null) {
      movingCakeTimeRef.current = setInterval(moveCake, 4000);
    }
  }, []);

  React.useEffect(() => {
    if (eatMeRefAnimation.current !== null) {
      eatMeRefAnimation.current.onfinish = () => { hasAnimationFinish.current = true; };
    }
  }, [eatMeRefAnimation.current]);

  return (
    <Flex sx={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          height: '226px',
          position: 'absolute',
          top: '60px',
          left: '133px;',
          ':hover': {
            cursor: 'pointer',
          },
        }}
        ref={cakeRef}
        onMouseUp={() => eatMePauseHandler()}
        onMouseDown={() => eatMeHandler()}
        onClick={() => handleCakeAnimationOnClick()}
      >
        <img ref={eatMeRef} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake.png 2x" alt="A cake labeled Eat Me" />
      </Box>
    </Flex>
  );
};

export default Cake;
