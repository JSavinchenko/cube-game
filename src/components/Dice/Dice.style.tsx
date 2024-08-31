import styled, {keyframes, css} from 'styled-components';
import {Colors} from '../../constants/colors';

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 30px;
`;

export const StyledDiv = styled.div`
  height: 100%;
  padding: 20px;
  border: 5px solid ${Colors.LIGHT_PURPLE};
  border-radius: 10px;
`;

const wobble = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const StyledImg = styled.img<{isShaking: boolean}>`
  height: 100px;
  width: 100px;
  display: inline-block;
  vertical-align: middle;
  ${({isShaking}) =>
    isShaking &&
    css`
      animation: ${wobble} 1s;
    `}
`;
