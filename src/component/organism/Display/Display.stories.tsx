import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Display } from './Display';

type Story = ComponentStoryObj<typeof Display>;

export default {
  title: 'organism/Display',
  component: Display,
} as ComponentMeta<typeof Display>;

const defaultSpeaker = {};

export const Default: Story = defaultSpeaker;
