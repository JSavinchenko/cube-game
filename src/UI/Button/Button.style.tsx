import styled from 'styled-components';

import {type ButtonProps} from './Button.types';
import {getButtonStyles} from './Button.utils';

export const StyledButton = styled.button<ButtonProps>`
  ${({buttonType}) => getButtonStyles(buttonType)};
  ${({isFull}) => (isFull ? 'width: 100%' : '')};
  padding-inline: 15px;
  background-repeat: no-repeat;
  cursor: pointer;
`;
