import type {StoryFn} from '@storybook/react';
import type {ButtonProps} from '../../UI/Button/Button.types';

import {Button} from './Button';

import {ButtonStyles} from '../../UI/Button/Button.types';

export default {
  title: 'UI/Button',
  component: Button,
};

export const Regular: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Четное</Button>
);

Regular.args = {
  buttonType: ButtonStyles.REGULAR,
};

export const Bet: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Сделать ставку</Button>
);

Bet.args = {
  buttonType: ButtonStyles.BET,
};
