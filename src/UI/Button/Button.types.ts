import type {ButtonHTMLAttributes, ReactNode} from 'react';

export enum ButtonStyles {
  REGULAR = 'LOGIN',
  BET = 'ACTIONS',
  SPECIFIC_NUMBER = 'SAVE',
  ACTIVE = 'AVTIVE',
  ACTIVE_SPECIFIC_NUMBER = 'ACTIVE_NUM',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: ButtonStyles;
  isFull?: boolean;
}
