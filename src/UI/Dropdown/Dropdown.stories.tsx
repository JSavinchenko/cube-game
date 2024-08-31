import type {DropdownProps} from './Dropdown.types';
import type {StoryFn} from '@storybook/react';

import {Dropdown} from './Dropdown';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
};

export const SearchFeedback: StoryFn<DropdownProps> = (args) => (
  <Dropdown {...args} />
);

SearchFeedback.args = {
  variants: ['1.00', '5.00', '10.00', '15.00', '20.00'],
  onChoose: () => {},
};
