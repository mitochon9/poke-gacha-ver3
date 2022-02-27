import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { GameBoy } from './GameBoy';

type Story = ComponentStoryObj<typeof GameBoy>;

export default {
  title: 'template/GameBoy',
  component: GameBoy,
} as ComponentMeta<typeof GameBoy>;

const defaultSpeaker = {};

export const Default: Story = defaultSpeaker;
