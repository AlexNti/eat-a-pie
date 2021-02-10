import React from 'react';

const CAKE_SPRITE = '/aa-cake-2021-sprite.png';
const SPRITE_SRC_SET = '/aa-cake-2021-sprite.png';

const AnimatedEatCake = React.forwardRef(({ isReady }, ref) => (
  <img ref={ref} src={isReady ? CAKE_SPRITE : ''} srcSet={isReady ? SPRITE_SRC_SET : ''} alt={isReady ? 'A cake labeled Eat Me' : ''} />

));

export default React.memo(AnimatedEatCake);
