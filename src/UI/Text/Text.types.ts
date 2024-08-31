import type {ReactNode} from 'react';
import type {CSSProperties} from 'styled-components';
import type {Breakpoints} from '../../constants/breakpoints';
import type {Colors} from '../../constants/colors';

export type TextColors = Colors.WHITE | Colors.ERROR | Colors.BLACK;

export enum TextFonts {
  INTER = 'Inter, sans-serif',
}

export enum TextStyles {
  MAIN = 'LOGO_HEADER',
  USUAL = 'LOGO_WELCOME',
  SMALL = 'EMAIL_CODE',
}

export enum TextTags {
  'DIV' = 'div',
  'P' = 'p',
}

export interface TextProps {
  as?: TextTags;
  children: ReactNode;
  className?: string;
  type: TextStyles;
  color?: TextColors;
  textFont?: TextFonts;
  fontStyle?: CSSProperties['fontStyle'];
  size?: number;
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: CSSProperties['textAlign'];
  textDecoration?: CSSProperties['textDecoration'];
  mobileType?: TextStyles;
  mobileBreakpoint?: Breakpoints;
}
