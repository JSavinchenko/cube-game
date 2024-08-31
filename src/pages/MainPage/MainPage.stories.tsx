import type {StoryFn} from '@storybook/react';

import {MainPage} from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
};

export const Default: StoryFn = () => <MainPage />;
