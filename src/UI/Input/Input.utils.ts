import type {StyledInputInsideProps} from './Input.types';

import {Colors} from '../../constants/colors';

export const getOutline = (props: StyledInputInsideProps) => {
  switch (true) {
    case props.withError:
      return `1px solid ${Colors.ERROR}`;
    case props.isChanged:
      return `1px solid ${Colors.BLUE}`;
    default:
      return null;
  }
};
