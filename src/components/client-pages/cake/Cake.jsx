import React from 'react';
import { Box, Flex } from 'theme-ui';

import { tryMeKeys, bounceCakeKeys } from '../../../animation/cakeAnimations';
import AnimatedEatCake from './components/AnimatedEatCake';

import { useAuth } from '../../../hooks';
import { getPrice } from '../../../utils'
import { auth } from '../../providers/authProvider/firebase'
// TODO REFACTOR ALL THIS FILE (BREAK IT SMALLER COMPONENTS USE OF CONSTANTS ETC...)
const EAT_CAKE_ANIMATION_DURATION = 2000;
const Cake = () => {
  const authContext = useAuth();
  const eatMeRef = React.useRef(null);
  const cakeRef = React.useRef(null);
  const eatMeRefAnimation = React.useRef(null);
  const movingCakeTimeRef = React.useRef(null);
  const hasAnimationFinish = React.useRef(false);
  const [isEatmeAnimationActive, setIsEatmeAnimationActive] = React.useState(false);
  const [isFetchingPrice, setIsFetchingPrice] = React.useState(false);
  const [price, setPrice] = React.useState(false);

  const moveCake = () => {
    if (cakeRef !== null && !hasAnimationFinish.current) {
      cakeRef.current.animate(tryMeKeys, {
        id: 'bounce', delay: 2000, duration: 500, iterations: 2,
      });
    }
  };

  const initiateEatCakeAnimation = () => {
    if (eatMeRef !== null && eatMeRef.current.getAnimations().length < 1) {
      eatMeRefAnimation.current = eatMeRef.current.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-80%)' },
        ], {
          fill: 'forwards',
          easing: 'steps(4, end)',
          duration: EAT_CAKE_ANIMATION_DURATION,
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
      if (!cakeRef.current.getAnimations().length) {
        cakeRef.current.animate(bounceCakeKeys, {
          id: 'heartBeat', duration: 1300, easing: 'ease-in-out',
        });

        const currentAnimation = cakeRef.current.getAnimations()[0];

        currentAnimation.onfinish = () => {
          setIsEatmeAnimationActive(false);
        };
      }
    }
  };

  // start the eating animation
  const eatMeHandler = React.useCallback(() => {
    stopMovingCakeAnimation();
    if (eatMeRefAnimation !== null && eatMeRefAnimation.current && !hasAnimationFinish.current && !isEatmeAnimationActive) {
      // eatMeRefAnimation.current.play();
      handleCakeAnimationOnClick();
      setIsEatmeAnimationActive(true);
      eatMeRefAnimation.current.currentTime = eatMeRefAnimation.current.currentTime + 500;
      if (eatMeRefAnimation.current.currentTime >= EAT_CAKE_ANIMATION_DURATION) {
        eatMeRefAnimation.current.finish();
      }
    }
  }, [eatMeRefAnimation.current, isEatmeAnimationActive, authContext]);

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

  React.useEffect(() => {
    async function fetchPrice() {
      if (hasAnimationFinish.current) {
        setIsFetchingPrice(true);
        const token = await auth.currentUser.getIdToken()
        const result = await getPrice(token)
        setPrice(result);
        setIsFetchingPrice(false);
      }
    }

    fetchPrice()
  }, [hasAnimationFinish.current])

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
            cursor: isEatmeAnimationActive ? null : 'pointer',
          },
        }}
        ref={cakeRef}
        onMouseUp={() => eatMePauseHandler()}
        onClick={() => eatMeHandler()}
      >
        <AnimatedEatCake ref={eatMeRef} />
      </Box>
      {isFetchingPrice && <Box sx={{ height: '60px', width: '100%' }}>*Drum roll...*</Box>}
    </Flex>
  );
};

export default Cake;
