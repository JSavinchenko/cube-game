import type {StyledInputInsideProps} from './Input.types';

import styled from 'styled-components';

import {getOutline} from './Input.utils';

import {getTextStyles, Text} from '../../UI/Text';
import {Colors} from '../../constants/colors';

export const StyledWrapper = styled.div<StyledInputInsideProps>`
  position: relative;
`;

export const StyledInput = styled.input<StyledInputInsideProps>`
  ${({isFull}) => (isFull ? 'width: 100%' : '')};
  border-radius: 10px;
  ${({font}) => font && getTextStyles(font)};
  font-size: 18px;
  height: 30px;
  border: none;
  outline: ${(props) => getOutline(props)};
  min-width: 50px;
  box-sizing: border-box;
  padding-inline: 15px;
  padding-block: 25px;
  min-height: 30px;
  background: ${Colors.WHITE};

  &:focus {
    border: 1px solid ${Colors.BLUE};
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const StyledErrorMessage = styled(Text)`
  position: absolute;
  top: 100%;
  left: 5px;
`;
