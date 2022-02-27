import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Speaker, SpeakerProps } from './Speaker';

type Story = ComponentStoryObj<typeof Speaker>;

export default {
  title: 'atom/Speaker',
  component: Speaker,
} as ComponentMeta<typeof Speaker>;

const defaultSpeaker: SpeakerProps = {
  volumeHole: Array.from({ length: 60 }, (_, i) => ({
    id: i,
    value: '',
  })),
};

export const Default: Story = { args: defaultSpeaker };
