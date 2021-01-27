import React from 'react';
import { Box } from 'theme-ui';

import cakeAnimation from '../../animation/cakeAnimations';

const Cake = () => {
  const eatMeRef = React.useRef(null);
  const cakeRef = React.useRef(null);
  const eatMeRefAnimation = React.useRef(null);
  const movingCakeTimeRef = React.useRef(null);

  const moveCake = () => {
    if (cakeRef !== null) {
      cakeRef.current.animate(cakeAnimation, {
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
      cakeRef.current.getAnimations()[0].cancel(); // also cancel the animation playing
    }
  };

  // start the eating animation
  const eatMeHandler = React.useCallback(() => {
    stopMovingCakeAnimation();
    if (eatMeRefAnimation !== null && eatMeRefAnimation.current) {
      eatMeRefAnimation.current.play();
    }
  }, [eatMeRefAnimation.current]);

  // pause the eating animation
  const eatMePauseHandler = React.useCallback(() => {
    if (eatMeRefAnimation !== null && eatMeRefAnimation.current) {
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

  return (
    <Box sx={{ overflow: 'hidden', height: '226px', position: 'absolute' }} ref={cakeRef} onMouseUp={() => eatMePauseHandler()} onMouseDown={() => eatMeHandler()}>
      <img ref={eatMeRef} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake.png 2x" alt="A cake labeled Eat Me" />
    </Box>
  );
};

export default Cake;
