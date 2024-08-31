import type {StoryFn} from '@storybook/react';

import {MainPanel} from './MainPanel';
import {MainPanelProps} from './MainPanel.types';

export default {
  title: 'components/MainPanel',
  component: MainPanel,
};

export const Default: StoryFn<MainPanelProps> = (args) => (
  <MainPanel {...args} />
);

Default.args = {
  onBetClick: () => {},
};
