import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { DisplayFooter } from './DisplayFooter';

type Story = ComponentStoryObj<typeof DisplayFooter>;

export default {
  title: 'atom/DisplayFooter',
  component: DisplayFooter,
} as ComponentMeta<typeof DisplayFooter>;

const defaultDisplayFooter = {};

export const Default: Story = defaultDisplayFooter;
