import styled from 'styled-components';

import {Colors} from '../../constants/colors';
import {mediaTablet} from '../../mixins/breakpoints';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 23px;
  background-color: ${Colors.DARK_PURPLE};
  border: 2px solid ${Colors.PURPLE};
  border-radius: 5px;
  padding: 60px;
  width: calc(306.7 / 1280 * 100%);
  min-width: 460px;
  text-align: center;

  ${mediaTablet} {
    min-width: auto;
    width: 95%;
    padding: 30px;
  }
`;

export const StyledModalCancelBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: ${Colors.WHITE};
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    filter: brightness(70%);
  }
`;
