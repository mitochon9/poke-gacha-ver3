import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { DeleteDataButton } from './DeleteDataButton';

type Story = ComponentStoryObj<typeof DeleteDataButton>;

export default {
  title: 'molecule/DeleteDataButton',
  component: DeleteDataButton,
} as ComponentMeta<typeof DeleteDataButton>;

const defaultDeleteDataButton = {};

export const Default: Story = defaultDeleteDataButton;
