import type {ButtonProps} from './Button.types';
import {StyledButton} from './Button.style';
import {Text, TextStyles} from '../../UI/Text';
import {Colors} from '../../constants/colors';

export const Button = ({children, buttonType, ...props}: ButtonProps) => {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      <Text type={TextStyles.USUAL} color={Colors.WHITE}>
        {children}
      </Text>
    </StyledButton>
  );
};

Button.displayName = 'Button';
