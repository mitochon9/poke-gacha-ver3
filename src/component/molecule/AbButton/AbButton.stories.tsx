import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, screen, within } from '@storybook/testing-library';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(/A/));
  },
};
