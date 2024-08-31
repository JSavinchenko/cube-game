import type {HeaderProps} from './Header.types';
import type {StoryFn} from '@storybook/react';

import {Header} from './Header';

export default {
  title: 'components/Header',
  component: Header,
};

export const Default: StoryFn<HeaderProps> = (args) => <Header {...args} />;

Default.args = {
  logoText: 'Test Game',
};
