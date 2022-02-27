import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PowerSupply } from './PowerSupply';

type Story = ComponentStoryObj<typeof PowerSupply>;

export default {
  title: 'atom/PowerSupply',
  component: PowerSupply,
} as ComponentMeta<typeof PowerSupply>;

const defaultPowerSupply = {};

export const Default: Story = defaultPowerSupply;
