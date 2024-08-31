import {Breakpoints} from '../constants/breakpoints';

export const mediaTablet = () =>
  `@media screen and (max-width: ${Breakpoints['790px']})` as const;

export const mediaPhone = () =>
  `@media screen and (max-width: ${Breakpoints['400px']})` as const;

export const mediaSize = (size: Breakpoints) =>
  `@media screen and (max-width: ${size})` as const;
