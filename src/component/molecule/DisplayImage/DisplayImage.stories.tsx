import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { DisplayImage } from './DisplayImage';

type Story = ComponentStoryObj<typeof DisplayImage>;

export default {
  title: 'molecule/DisplayImage',
  component: DisplayImage,
} as ComponentMeta<typeof DisplayImage>;

const defaultSpeaker = {};

export const Default: Story = defaultSpeaker;
