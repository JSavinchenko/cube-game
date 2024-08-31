import type {TextProps} from './Text.types';

import styled, {css} from 'styled-components';

import {getTextStyles} from './Text.utils';

import {mediaSize, mediaTablet} from '../../mixins/breakpoints';

export const StyledText = styled.span<TextProps>`
  color: ${(props) => props.color};

  ${({type}) => getTextStyles(type)};
  ${({mobileBreakpoint, mobileType}) =>
    mobileType &&
    css`
      ${mobileBreakpoint ? mediaSize(mobileBreakpoint) : mediaTablet()} {
        ${getTextStyles(mobileType)}
      }
    `}

  font-family: ${(props) => props.textFont};
  font-style: ${(props) => props.fontStyle};
  font-size: ${(props) => (props.size ? `${props.size}px` : '')};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : '')};
  text-align: ${(props) => props.textAlign};
  letter-spacing: ${(props) =>
    props.letterSpacing ? `${props.letterSpacing}px` : ''};
  text-decoration: ${(props) => props.textDecoration};
`;
