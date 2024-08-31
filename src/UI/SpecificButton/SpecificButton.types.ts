import {ButtonProps} from '../../UI/Button/Button.types';

export interface SpecificButtonProps extends ButtonProps {
  inputValue?: string;
  onInputChange?: (value: string) => void;
}
