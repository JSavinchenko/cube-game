import {
  StyledDiv,
  StyledImg,
  StyledTextBlock,
  StyledWrapper,
} from './Dice.style';
import {Colors} from '../../constants/colors';
import {Text, TextStyles} from '../../UI/Text';
import {DiceProps} from './Dice.types';

export const Dice = ({
  image,
  result,
  resultMessage,
  isDisabled,
  isShaking = false,
}: DiceProps) => {
  return (
    <StyledWrapper>
      <StyledTextBlock>
        <Text color={Colors.WHITE} type={TextStyles.MAIN}>
          {isDisabled ? '' : result || 'Сделайте ставку'}
        </Text>
        {resultMessage && !isDisabled && (
          <Text color={Colors.WHITE} type={TextStyles.SMALL}>
            {resultMessage}
          </Text>
        )}
      </StyledTextBlock>
      <StyledDiv>
        <StyledImg src={image} isShaking={isShaking} />
        <div style={{width: '5px', display: 'inline-block'}}></div>
      </StyledDiv>
    </StyledWrapper>
  );
};
