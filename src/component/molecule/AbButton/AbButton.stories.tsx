import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, screen } from '@storybook/testing-library';
import { AbButton } from './AbButton';
import { AbButtonProps } from '.';

type Story = ComponentStoryObj<typeof AbButton>;

export default {
  title: 'molecule/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const defaultAbButton: AbButtonProps = {
  isAnimation: false,
};

export const Default: Story = {
  args: defaultAbButton,
};

export const DisabledButton: Story = {
  args: { ...defaultAbButton, isAnimation: true },
};

export const ClickButtonA: Story = {
  ...defaultAbButton,
  play: async () => userEvent.click(screen.getByText(/A/)),
};
