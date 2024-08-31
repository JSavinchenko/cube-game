import type {InputProps} from './Input.types';
import type {ChangeEvent} from 'react';

import {StyledErrorMessage, StyledInput, StyledWrapper} from './Input.style';

import {Colors} from '../../constants/colors';
import {TextStyles} from '../../UI/Text';

export const Input = ({
  errorMessage,
  validate,
  onInput,
  name,
  id,
  ...props
}: InputProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    validate?.(event.target.value);
    onInput?.(event);
  };

  return (
    <StyledWrapper>
      <StyledInput
        name={name}
        id={id ?? name}
        onInput={handleInput}
        {...props}
      />
      {errorMessage && (
        <StyledErrorMessage type={TextStyles.SMALL} color={Colors.ERROR}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};

Input.displayName = 'Input';
