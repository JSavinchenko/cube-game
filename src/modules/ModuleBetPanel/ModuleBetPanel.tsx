import {useState} from 'react';
import {Dice} from '../../components/Dice';
import {MainPanel} from '../../components/MainPanel';
import {
  StyledBetPanel,
  Overlay,
  DisabledMessageWrapper,
  ContentWrapper,
} from './ModuleBetPanel.style';
import {Text, TextStyles} from '../../UI/Text';
import {Colors} from '../../constants/colors';

import DiceImage1 from '../../components/Dice/images/Dice1.png';
import DiceImage2 from '../../components/Dice/images/Dice2.png';
import DiceImage3 from '../../components/Dice/images/Dice3.png';
import DiceImage4 from '../../components/Dice/images/Dice4.png';
import DiceImage5 from '../../components/Dice/images/Dice5.png';
import DiceImage6 from '../../components/Dice/images/Dice6.png';

interface ModuleBetPanelProps {
  isLoggedIn: boolean;
  balance: number;
  setBalance: (balance: number) => void;
}

export const ModuleBetPanel = ({
  isLoggedIn,
  balance,
  setBalance,
}: ModuleBetPanelProps) => {
  const diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  const [image, setNewImage] = useState(diceImages[0]);
  const [betSize, setBetSize] = useState(0);
  const [resultText, setResultText] = useState<string | undefined>();
  const [resultMessage, setResultMessage] = useState<string | undefined>();
  const [isShaking, setIsShaking] = useState(false);

  const rollDice = (betType: string, inputValue: string | undefined) => {
    if (!isLoggedIn) return;

    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 1000);

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setNewImage(diceImages[randomNum - 1]);

    let winMultiplier = 0;
    const newResultText = `Результат броска кубика: ${randomNum}`;

    switch (betType) {
      case 'even':
        if (randomNum % 2 === 0) winMultiplier = 2;
        break;
      case 'odd':
        if (randomNum % 2 !== 0) winMultiplier = 2;
        break;
      case '1-3':
        if (randomNum >= 1 && randomNum <= 3) winMultiplier = 2;
        break;
      case '4-6':
        if (randomNum >= 4 && randomNum <= 6) winMultiplier = 2;
        break;
      case 'specific':
        if (randomNum === Number(inputValue)) {
          winMultiplier = 3;
        }
        break;
      default:
        break;
    }

    const newBalance =
      winMultiplier > 0
        ? balance + Number(betSize) * winMultiplier
        : balance - Number(betSize);

    if (newBalance <= 0) {
      alert('Баланс достиг 0 или ниже.');
      return;
    }

    setBalance(newBalance);

    setResultText(newResultText);
    setResultMessage(
      winMultiplier > 0
        ? `Вы выиграли ${Number(betSize) * winMultiplier} TND!`
        : 'Повезёт в следующий раз!',
    );
  };

  const handleBetClick = (type: string, size: number, value?: string) => {
    if (!isLoggedIn) return;
    setBetSize(size);
    rollDice(type, value);
  };

  return (
    <StyledBetPanel>
      {!isLoggedIn && (
        <DisabledMessageWrapper>
          <Text color={Colors.WHITE} type={TextStyles.MAIN}>
            Войдите, чтобы продолжить
          </Text>
        </DisabledMessageWrapper>
      )}
      <ContentWrapper isDisabled={!isLoggedIn}>
        <Dice
          image={image}
          result={resultText}
          resultMessage={resultMessage}
          isDisabled={!isLoggedIn}
          isShaking={isShaking}
        />
        <MainPanel onBetClick={handleBetClick} onBetSizeChange={setBetSize} />
      </ContentWrapper>
      <Overlay isDisabled={!isLoggedIn} />
    </StyledBetPanel>
  );
};
