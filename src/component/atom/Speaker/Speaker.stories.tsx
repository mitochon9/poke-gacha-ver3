import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Speaker } from './Speaker';

type Story = ComponentStoryObj<typeof Speaker>;

export default {
  title: 'atom/Speaker',
  component: Speaker,
} as ComponentMeta<typeof Speaker>;

const defaultSpeaker = {};

export const Default: Story = defaultSpeaker;
