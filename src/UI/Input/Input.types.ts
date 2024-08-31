import type {ChangeEvent, InputHTMLAttributes} from 'react';
import type {TextStyles} from '../../UI/Text';

export type StyledInputInsideProps = Pick<
  InputProps,
  'font' | 'withError' | 'isChanged' | 'isFull'
>;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  withError?: boolean;
  font?: TextStyles;
  errorMessage?: string | null;
  validate?: (value: string) => string | undefined;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  isChanged?: boolean;
  isFull?: boolean;
}
