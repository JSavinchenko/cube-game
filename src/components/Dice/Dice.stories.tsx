import type {StoryFn} from '@storybook/react';

import {Dice} from './Dice';

export default {
  title: 'components/Dice',
  component: Dice,
};

export const Default: StoryFn = (args) => <Dice image={''} {...args} />;

Default.args = {};
