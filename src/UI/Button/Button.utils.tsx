import {css} from 'styled-components';

import {ButtonStyles} from './Button.types';

import {Colors} from '../../constants/colors';

export const getButtonStyles = (buttonType: ButtonStyles) => {
  switch (buttonType) {
    case ButtonStyles.REGULAR:
      return css`
        height: 40px;
        border-radius: 5px;
        border: none;
        color: ${Colors.WHITE};
        background-color: ${Colors.PURPLE};

        &:hover {
          background-color: ${Colors.LIGHT_PURPLE};
        }
      `;
    case ButtonStyles.BET:
      return css`
        width: 150px;
        min-height: 50px;
        border-radius: 5px;
        border: none;
        color: ${Colors.WHITE};
        background-color: ${Colors.GREEN};

        &:not(:disabled) {
          &:hover {
            background-color: ${Colors.LIME};
          }
        }

        &:disabled {
          filter: none;
          cursor: initial;
          filter: brightness(70%);
          opacity: 0.7;
        }
      `;
    case ButtonStyles.SPECIFIC_NUMBER:
      return css`
        min-width: 150px;
        min-height: 50px;
        border-radius: 5px;
        border: none;
        color: ${Colors.WHITE};
        background-color: ${Colors.PURPLE};

        &:hover {
          background-color: ${Colors.LIGHT_PURPLE};
        }
      `;
    case ButtonStyles.ACTIVE:
      return css`
        height: 40px;
        border-radius: 5px;
        border: none;
        color: ${Colors.WHITE};
        background-color: ${Colors.ORANGE};
      `;
    case ButtonStyles.ACTIVE_SPECIFIC_NUMBER:
      return css`
        min-width: 150px;
        min-height: 50px;
        border-radius: 5px;
        border: none;
        color: ${Colors.WHITE};
        background-color: ${Colors.ORANGE};
      `;
    default:
      return null;
  }
};
