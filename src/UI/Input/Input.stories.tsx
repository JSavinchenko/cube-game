import type {InputProps} from './Input.types';
import type {StoryFn} from '@storybook/react';

import {Input} from './Input';

export default {
  title: 'UI/Input',
  component: Input,
};

export const Default: StoryFn<InputProps> = (args) => <Input {...args} />;

Default.args = {
  isRequired: true,
  withError: false,
  placeholder: 'Login',
};
