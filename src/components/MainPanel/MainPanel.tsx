import {StyledButtons, StyledDiv, StyledWrapper} from './MainPanel.style';

import {Colors} from '../../constants/colors';
import {Text, TextStyles} from '../../UI/Text';
import {Button, ButtonStyles} from '../../UI/Button';
import {Dropdown} from '../../UI/Dropdown';
import {MainPanelProps} from './MainPanel.types';
import {useEffect, useState} from 'react';
import {SpecificButton} from '../../UI/SpecificButton/SpecificButton';

export const MainPanel = ({onBetClick, onBetSizeChange}: MainPanelProps) => {
  const options = ['1.00', '5.00', '10.00', '15.00', '20.00'];

  const [inputValue, setInputValue] = useState('');
  const [selectedBetSize, setSelectedBetSize] = useState('1.00');
  const [selectedBetType, setSelectedBetType] = useState('');
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isBetDisabled, setIsBetDisabled] = useState(true);

  const handleDropdownChange = (value: string) => {
    setSelectedBetSize(value);
    onBetSizeChange(Number(value));
  };

  const handleBetTypeClick = (type: string) => {
    setSelectedBetType(type);
    setActiveButton(type);
  };

  useEffect(() => {
    if (!selectedBetType || (selectedBetType === 'specific' && !inputValue)) {
      setIsBetDisabled(true);
    } else {
      setIsBetDisabled(false);
    }
  }, [selectedBetType, inputValue]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <StyledWrapper>
      <StyledDiv>
        <Text type={TextStyles.SMALL} color={Colors.WHITE}>
          Размер ставки
        </Text>
        <Dropdown variants={options} onChoose={handleDropdownChange} />
      </StyledDiv>
      <StyledDiv>
        <Text type={TextStyles.SMALL} color={Colors.WHITE}>
          Варианты ставок
        </Text>
        <StyledButtons>
          <Button
            children={'Четное'}
            buttonType={
              activeButton === 'even'
                ? ButtonStyles.ACTIVE
                : ButtonStyles.REGULAR
            }
            isFull={true}
            onClick={() => handleBetTypeClick('even')}
          />
          <Button
            children={'Нечетное'}
            buttonType={
              activeButton === 'odd'
                ? ButtonStyles.ACTIVE
                : ButtonStyles.REGULAR
            }
            isFull={true}
            onClick={() => handleBetTypeClick('odd')}
          />
        </StyledButtons>
        <StyledButtons>
          <Button
            children={'От 1 до 3'}
            buttonType={
              activeButton === '1-3'
                ? ButtonStyles.ACTIVE
                : ButtonStyles.REGULAR
            }
            isFull={true}
            onClick={() => handleBetTypeClick('1-3')}
          />
          <Button
            children={'От 4 до 6'}
            buttonType={
              activeButton === '4-6'
                ? ButtonStyles.ACTIVE
                : ButtonStyles.REGULAR
            }
            isFull={true}
            onClick={() => handleBetTypeClick('4-6')}
          />
        </StyledButtons>
        <SpecificButton
          children={'Конкретное число'}
          buttonType={
            activeButton === 'specific'
              ? ButtonStyles.ACTIVE_SPECIFIC_NUMBER
              : ButtonStyles.SPECIFIC_NUMBER
          }
          isFull={true}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onClick={() => handleBetTypeClick('specific')}
        />
      </StyledDiv>
      <StyledDiv>
        <Button
          children={'Сделать ставку'}
          buttonType={ButtonStyles.BET}
          isFull={true}
          disabled={isBetDisabled}
          onClick={
            activeButton === 'specific'
              ? () =>
                  onBetClick(
                    selectedBetType,
                    Number(selectedBetSize),
                    inputValue,
                  )
              : () => onBetClick(selectedBetType, Number(selectedBetSize))
          }
        />
      </StyledDiv>
    </StyledWrapper>
  );
};
