import React, {useState, useEffect} from 'react';
import {SpecificButtonProps} from './SpecificButton.types';
import {StyledButton} from '../../UI/Button/Button.style';
import {Text, TextStyles} from '../../UI/Text';
import {Colors} from '../../constants/colors';

export const SpecificButton = ({
  children,
  inputValue,
  onInputChange,
  buttonType,
  ...props
}: SpecificButtonProps) => {
  const [localInputValue, setLocalInputValue] = useState(inputValue || '');

  useEffect(() => {
    setLocalInputValue(inputValue || '');
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^[1-6]?$/.test(value)) {
      setLocalInputValue(value);
      if (onInputChange) {
        onInputChange(value);
      }
    }
  };

  return (
    <StyledButton buttonType={buttonType} {...props}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text type={TextStyles.USUAL} color={Colors.WHITE}>
          {children}
        </Text>
        <input
          type='text'
          maxLength={1}
          value={localInputValue}
          onChange={handleChange}
          placeholder='1'
          style={{
            width: '20px',
            height: '100%',
            marginLeft: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            border: 'none',
            outline: 'none',
          }}
        />
      </div>
    </StyledButton>
  );
};
