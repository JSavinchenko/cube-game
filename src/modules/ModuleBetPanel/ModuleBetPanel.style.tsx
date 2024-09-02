import styled from 'styled-components';

export const StyledBetPanel = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div<{isDisabled: boolean}>`
  opacity: ${({isDisabled}) => (isDisabled ? 0.5 : 1)};
  pointer-events: ${({isDisabled}) => (isDisabled ? 'none' : 'all')};
  transition: opacity 0.3s ease;
  user-select: none;
  margin-top: 90px;
  margin-bottom: 20px;
`;

export const DisabledMessageWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  text-align: center;
`;

export const Overlay = styled.div<{isDisabled: boolean}>`
  display: ${({isDisabled}) => (isDisabled ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;
