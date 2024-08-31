import type {TextProps} from './Text.types';
import type {StoryFn} from '@storybook/react';

import {Text} from './Text';
import {TextStyles, TextTags} from './Text.types';

import {Colors} from '../../constants/colors';

export default {
  title: 'UI/Text',
  component: Text,
};

export const Main: StoryFn<TextProps> = (args) => (
  <Text {...args}>Test Game</Text>
);

Main.args = {
  type: TextStyles.MAIN,
  color: Colors.BLACK,
  as: TextTags.DIV,
};

export const Usual: StoryFn<TextProps> = (args) => (
  <Text {...args}>Test Game</Text>
);

Usual.args = {
  type: TextStyles.USUAL,
  color: Colors.BLACK,
  as: TextTags.DIV,
};

export const Small: StoryFn<TextProps> = (args) => (
  <Text {...args}>Test Game</Text>
);

Small.args = {
  type: TextStyles.SMALL,
  color: Colors.BLACK,
  as: TextTags.DIV,
};
