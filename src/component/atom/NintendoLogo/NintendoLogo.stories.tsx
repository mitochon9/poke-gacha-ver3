import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { NintendoLogo } from './NintendoLogo';

type Story = ComponentStoryObj<typeof NintendoLogo>;

export default {
  title: 'atom/NintendoLogo',
  component: NintendoLogo,
} as ComponentMeta<typeof NintendoLogo>;

const defaultNintendoLogo = {};

export const Default: Story = defaultNintendoLogo;
