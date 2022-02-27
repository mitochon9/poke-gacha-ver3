import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { DisplayTitle } from './DisplayTitle';

type Story = ComponentStoryObj<typeof DisplayTitle>;

export default {
  title: 'molecule/DisplayTitle',
  component: DisplayTitle,
} as ComponentMeta<typeof DisplayTitle>;

const defaultDisplayTitle = {};

export const Default: Story = defaultDisplayTitle;
