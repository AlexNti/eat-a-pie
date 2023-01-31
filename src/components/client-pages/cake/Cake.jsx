import React from 'react';
import { Flex, Button, Box, Text } from 'theme-ui';

import { tryMeKeys, bounceCakeKeys } from '../../../animation/cakeAnimations';
import CakeModal from './components/CakeModal';

import { useAuth } from '../../../hooks';
import { getHistory, getPrize, isCakeEaten } from '../../../utils';
import getFirebase from '../../providers/authProvider/firebase';
import WinGiftModal from './components/WinGiftModal';
import LoserModal from './components/LoserModal';

// TODO REFACTOR ALL THIS FILE (BREAK IT SMALLER COMPONENTS USE OF CONSTANTS ETC...)

const CAKE_MESSAGES = [
  'Click and bite!',
  'Click again to build your app...etite.',
  'One click closer…',
  'Another click bites the cake…',
  'Click your last bite and prepare…',
];

const EAT_CAKE_ANIMATION_DURATION = 2000;
const Cake = () => {
  const authContext = useAuth();
  const eatMeRef = React.useRef(null);
  const cakeRef = React.useRef(null);
  const eatMeRefAnimation = React.useRef(null);
  const movingCakeTimeRef = React.useRef(null);
  const hasAnimationFinish = React.useRef(false);
  const [isEatmeAnimationActive, setIsEatmeAnimationActive] = React.useState(
    false
  );
  const [isFetchingPrize, setIsFetchingPrize] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [hasEatenCake, setHasEatenCake] = React.useState(false);
  const [gift, setGift] = React.useState('');
  const [isActivated, setIsActivated] = React.useState(false);

  const moveCake = () => {
    if (cakeRef !== null && !hasAnimationFinish.current) {
      cakeRef.current.animate(tryMeKeys, {
        id: 'bounce',
        delay: 2000,
        duration: 500,
        iterations: 2,
      });
    }
  };

  const initiateEatCakeAnimation = () => {
    if (eatMeRef !== null && eatMeRef.current.getAnimations().length < 1) {
      eatMeRefAnimation.current = eatMeRef.current.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-80%)' }],
        {
          fill: 'forwards',
          easing: 'steps(4, end)',
          duration: EAT_CAKE_ANIMATION_DURATION,
        }
      );
      eatMePauseHandler();
    }
    // we pausing the eating animation because if we dont do it it will start without clicking it
  };

  const stopMovingCakeAnimation = () => {
    clearInterval(movingCakeTimeRef.current); // stop the moving animation of cake
    if (cakeRef.current.getAnimations()[0]) {
      cakeRef.current.getAnimations().forEach(animation => {
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
          id: 'heartBeat',
          duration: 1300,
          easing: 'ease-in-out',
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
    if (
      eatMeRefAnimation !== null &&
      eatMeRefAnimation.current &&
      !hasAnimationFinish.current &&
      !isEatmeAnimationActive
    ) {
      // eatMeRefAnimation.current.play();
      handleCakeAnimationOnClick();
      setIsEatmeAnimationActive(true);
      eatMeRefAnimation.current.currentTime += 500;
      if (
        eatMeRefAnimation.current.currentTime >= EAT_CAKE_ANIMATION_DURATION
      ) {
        eatMeRefAnimation.current.finish();
      }
    }
  }, [eatMeRefAnimation.current, isEatmeAnimationActive, authContext]);

  // pause the eating animation
  const eatMePauseHandler = React.useCallback(() => {
    if (
      eatMeRefAnimation !== null &&
      eatMeRefAnimation.current &&
      !hasAnimationFinish.current
    ) {
      eatMeRefAnimation.current.pause();
    }
  }, [eatMeRefAnimation.current]);

  // add eating animation to cake
  React.useEffect(() => {
    if (eatMeRef.current !== null) {
      initiateEatCakeAnimation();
    }
  });

  // add moving anivation to cake
  React.useEffect(() => {
    if (cakeRef.current !== null) {
      movingCakeTimeRef.current = setInterval(moveCake, 4000);
    }
  }, []);

  // check if user has already eaten the cake
  React.useEffect(() => {
    async function checkCake() {
      const token = await getFirebase().auth.currentUser.getIdToken();
      const {
        data: { hasUserEatTheCake },
        error,
      } = await isCakeEaten(token);

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
      eatMeRefAnimation.current.onfinish = () => {
        hasAnimationFinish.current = true;
      };
    }
  }, [eatMeRefAnimation.current]);

  React.useEffect(() => {
    async function fetchPrize() {
      if (hasAnimationFinish.current) {
        setIsFetchingPrize(true);
        const token = await getFirebase().auth.currentUser.getIdToken();
        // kane thn klhrwsh
        await getPrize(token);
        setIsFetchingPrize(false);
        setHasEatenCake(true);
      }
    }

    fetchPrize();
  }, [hasAnimationFinish.current]);

  React.useEffect(() => {
    // this ref should be already set byt this time
    async function getGifts() {
      if (hasEatenCake) {
        setIsReady(false);
        const token = await getFirebase().auth.currentUser.getIdToken();
        const {
          data: { giftsHistory },
          error,
        } = await getHistory(token);

        if (typeof error === 'undefined') {
          setGift(() => {
            const keys = Object.keys(giftsHistory);
            const giftName = keys.length > 0 ? keys[0] : '';
            return giftName;
          });
        }
        setIsReady(true);
      }
    }

    getGifts();
  }, [hasEatenCake]);

  const currentMessageForEatCake = () => {
    if (!eatMeRefAnimation.current) return CAKE_MESSAGES[0];
    return CAKE_MESSAGES[eatMeRefAnimation.current.currentTime / 500];
  };

  const canEatCake = isReady && !hasEatenCake;
  const hasWonPrize = gift !== '';

  return (
    <Flex
      sx={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: '80px' }}>
        <Text sx={{ fontSize: '28px' }}>LUCKY CAKE</Text>
        <Text sx={{ fontWeight: 700, fontSize: '38px', textAlign: 'center' }}>
          2023
        </Text>
      </Box>
      <Button
        onClick={authContext.signOut}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 10,
          color: '#09539A',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Logout
      </Button>
      {canEatCake && (
        <CakeModal
          eatMePauseHandler={eatMePauseHandler}
          isEatmeAnimationActive={isEatmeAnimationActive}
          eatMeHandler={eatMeHandler}
          isReady={isReady}
          isActivated={isActivated}
          eatMeRef={eatMeRef}
          canEatCake={canEatCake}
          cakeRef={cakeRef}
          isFetchingPrize={isFetchingPrize}
          message={currentMessageForEatCake()}
        />
      )}
      {isReady && hasWonPrize && <WinGiftModal gift={gift} />}
      {isReady && hasEatenCake && !hasWonPrize && <LoserModal />}
    </Flex>
  );
};

export default Cake;
