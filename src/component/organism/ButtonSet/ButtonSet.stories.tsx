import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ButtonSet } from './ButtonSet';
import { ButtonSetProps } from '.';

type Story = ComponentStoryObj<typeof ButtonSet>;

export default {
  title: 'organism/ButtonSet',
  component: ButtonSet,
} as ComponentMeta<typeof ButtonSet>;

const defaultSpeaker: ButtonSetProps = {
  isAnimation: false,
  volumeHole: Array.from({ length: 60 }, (_, i) => ({
    id: i,
    value: '',
  })),
};

export const Default: Story = { args: defaultSpeaker };
