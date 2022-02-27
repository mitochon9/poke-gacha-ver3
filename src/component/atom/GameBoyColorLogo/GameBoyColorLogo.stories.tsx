import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { GameBoyColorLogo } from '.';

type Story = ComponentStoryObj<typeof GameBoyColorLogo>;

export default {
  title: 'atom/GameBoyColorLogo',
  component: GameBoyColorLogo,
} as ComponentMeta<typeof GameBoyColorLogo>;

const defaultGameBoyColorLogo = {};

export const Default: Story = defaultGameBoyColorLogo;
