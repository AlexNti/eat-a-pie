import React from 'react';
import { Box } from 'theme-ui';

import cakeAnimation from '../animation/cakeAnimations';

const Cake = () => {
  const eatMeRef = React.useRef(null);
  const cakeRef = React.useRef(null);
  const eatMeRefAnimation = React.useRef(null);

  const moveCake = () => {
    if (cakeRef !== null) {
      cakeRef.current.animate(cakeAnimation, {
        id: 'bounce', delay: 4000, duration: 500, iterations: 2,
      });
    }
  };

  setInterval(() => { moveCake(); }, 4000);

  const eatMeHandler = () => {
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
  };

  const eatMePauseHandler = React.useCallback(() => {
    console.log(eatMeRefAnimation.current);
    if (eatMeRefAnimation !== null && eatMeRefAnimation.current) {
      eatMeRefAnimation.current.pause();
    }
  }, [eatMeRefAnimation.current]);

  return (
    <Box sx={{ overflow: 'hidden', height: '226px' }} ref={cakeRef} onMouseUp={() => eatMePauseHandler()} onClick={() => eatMeHandler()}>
      <img ref={eatMeRef} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake.png 2x" alt="A cake labeled Eat Me" />
    </Box>
  );
};

export default Cake;
