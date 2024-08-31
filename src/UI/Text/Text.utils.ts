import {css} from 'styled-components';

import {TextStyles} from './Text.types';

export const getTextStyles = (type: TextStyles) => {
  switch (type) {
    case TextStyles.MAIN:
      return css`
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0;
        font-family: Inter, sans-serif;
      `;
    case TextStyles.USUAL:
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0;
        font-family: Inter, sans-serif;
      `;
    case TextStyles.SMALL:
      return css`
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0;
        text-align: left;
        font-family: Inter, sans-serif;
      `;
    default:
      return null;
  }
};
