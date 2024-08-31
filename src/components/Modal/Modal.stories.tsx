import type {ModalProps} from './Modal.types';
import type {StoryFn} from '@storybook/react';

import {Modal} from './Modal';

export default {
  title: 'components/Modal',
  component: Modal,
};

export const Default: StoryFn<ModalProps> = (args) => <Modal {...args} />;

Default.args = {
  onClose() {},
  isOpen: true,
};
