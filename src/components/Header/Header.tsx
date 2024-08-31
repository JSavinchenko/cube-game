import type {HeaderProps} from './Header.types';

import {StyledDiv, StyledHeader} from './Header.style';

import {Colors} from '../../constants/colors';
import {Text, TextStyles} from '../../UI/Text';
import {Button, ButtonStyles} from '../../UI/Button';

export const Header = ({
  logoText = 'Test Game',
  isLoggedIn,
  onLogin,
  balance,
}: HeaderProps) => {
  const formattedBalance = `${balance} (TND)`;

  return (
    <StyledHeader>
      <StyledDiv>
        <Text color={Colors.WHITE} type={TextStyles.MAIN}>
          {logoText}
        </Text>
      </StyledDiv>
      <StyledDiv>
        {!isLoggedIn ? (
          <>
            <Button buttonType={ButtonStyles.REGULAR} onClick={onLogin}>
              Вход
            </Button>
            <Button buttonType={ButtonStyles.REGULAR}>Регистрация</Button>
          </>
        ) : (
          <>
            <Text color={Colors.WHITE} type={TextStyles.USUAL}>
              {formattedBalance}
            </Text>
          </>
        )}
      </StyledDiv>
    </StyledHeader>
  );
};
