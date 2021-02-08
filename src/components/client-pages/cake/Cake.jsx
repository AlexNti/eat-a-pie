import React from 'react';
import { Box, Flex, Spinner } from 'theme-ui';

import { tryMeKeys, bounceCakeKeys } from '../../../animation/cakeAnimations';
import AnimatedEatCake from './components/AnimatedEatCake';
import CakeModal from './components/CakeModal';

import { useAuth } from '../../../hooks';
import { getHistory, getPrize, isCakeEaten } from '../../../utils';
import { auth } from '../../providers/authProvider/firebase';
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
  const [isFetchingPrize, setIsFetchingPrize] = React.useState(false);
  const [prize, setPrize] = React.useState();
  const [isReady, setIsReady] = React.useState(false);
  const [hasEatenCake, setHasEatenCake] = React.useState(false);
  const [gift, setGift] = React.useState('');
  const [isActivated, setIsActivated] = React.useState(false);

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
      eatMeRefAnimation.current.currentTime += 500;
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

  const getPrizeMessage = ({ data, message }) => {
    // No coins left
    if (message === 'User has no tries left') return 'You already ate your cake!';

    const gifts = Object.keys(data.gifts);
    const hasGifts = gifts.length > 0;
    // No gift
    if (!hasGifts) return 'You didn\'t win any prize :(';

    // Gift won
    const key = gifts[0];
    if (hasGifts) return `Congratulations! You won a ${data.gifts[key].name}`;

    return '';
  };

  const getHistoryMessage = (name) => {
    if (name === '') return 'You didn\'t won any gifts :(';

    return `You won a ${name}`;
  };

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

  // check if user has already eaten the cake
  React.useEffect(() => {
    async function checkCake() {
      const token = await auth.currentUser.getIdToken();
      const { data: { hasUserEatTheCake }, error } = await isCakeEaten(token);

      if (typeof error === 'undefined') {
        setIsActivated(true);
        setHasEatenCake(hasUserEatTheCake);
      }
      setIsReady(true);
    }

    checkCake();
  }, []);

  React.useEffect(() => {
    if (eatMeRefAnimation.current !== null) {
      eatMeRefAnimation.current.onfinish = () => { hasAnimationFinish.current = true; };
    }
  }, [eatMeRefAnimation.current]);

  React.useEffect(() => {
    async function fetchPrize() {
      if (hasAnimationFinish.current) {
        setIsFetchingPrize(true);
        const token = await auth.currentUser.getIdToken();
        const result = await getPrize(token);
        setPrize(result);
        setIsFetchingPrize(false);
      }
    }

    fetchPrize();
  }, [hasAnimationFinish.current]);

  React.useEffect(() => {
    // this ref should be already set byt this time
    async function getGifts() {
      if (hasEatenCake) {
        eatMeRefAnimation.current.currentTime = EAT_CAKE_ANIMATION_DURATION;
        const token = await auth.currentUser.getIdToken();
        const { data: { giftsHistory }, error } = await getHistory(token);

        if (typeof error === 'undefined') {
          setGift(() => {
            const giftName = giftsHistory['0'] ? giftsHistory['0'].name : '';
            return giftName;
          });
        }
      }
    }

    getGifts();
  }, [hasEatenCake]);

  const canEatCake = isReady && !hasEatenCake;
  return (
    <Flex sx={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
    >
      <CakeModal />
      {/* <Box
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
        {!isReady && <Spinner />}
        {!isActivated && <Box>You are not activated. Please contact executive office manager.</Box>}
        <AnimatedEatCake ref={eatMeRef} isReady={canEatCake} />
      </Box>
      {isFetchingPrize && <Box sx={{ height: '60px', width: '100%' }}>*Drum roll...*</Box>}
      {prize && <Box>{getPrizeMessage(prize)}</Box>}
      <div>
        {hasEatenCake && <Box>Gluttony is a sin!</Box>}
        {gift && <Box>{getHistoryMessage(gift)}</Box>}
      </div> */}
    </Flex>
  );
};

export default Cake;
