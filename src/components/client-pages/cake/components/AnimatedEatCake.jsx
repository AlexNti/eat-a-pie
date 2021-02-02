import React from 'react';

const CAKE_SPRITE = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake_small.png';
const SPRITE_SRC_SET = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake.png 2x';

const AnimatedEatCake = React.forwardRef((props, ref) => (
  <img ref={ref} src={CAKE_SPRITE} srcSet={SPRITE_SRC_SET} alt="A cake labeled Eat Me" />

));

export default React.memo(AnimatedEatCake);
