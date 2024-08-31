import type {StoryFn} from '@storybook/react';
import type {ButtonProps} from '../../UI/Button/Button.types';

import {SpecificButton} from './SpecificButton';

import {ButtonStyles} from '../../UI/Button/Button.types';

export default {
  title: 'UI/SpecificButton',
  component: SpecificButton,
};

export const Specific_number: StoryFn<ButtonProps> = (args) => (
  <SpecificButton {...args} />
);

Specific_number.args = {
  buttonType: ButtonStyles.SPECIFIC_NUMBER,
  children: 'Конкретное число',
};
