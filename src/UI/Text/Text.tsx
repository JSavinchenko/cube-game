import type {TextProps} from './Text.types';

import {StyledText} from './Text.style';

export const Text = ({children, ...props}: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};
