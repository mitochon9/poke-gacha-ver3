import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { screen, userEvent, waitFor, within } from '@storybook/testing-library';
import { StartSelectButton } from './StartSelectButton';
import { StartSelectButtonProps } from './StartSelectButton.type';

type Story = ComponentStoryObj<typeof StartSelectButton>;

export default {
  title: 'molecule/StartSelectButton',
  component: StartSelectButton,
} as ComponentMeta<typeof StartSelectButton>;

const defaultStartSelectButton: StartSelectButtonProps = {
  isAnimation: false,
};

export const Default: Story = {
  args: defaultStartSelectButton,
};

export const DisabledButton: Story = {
  args: { ...defaultStartSelectButton, isAnimation: true },
};

export const ClickButtonSelect: Story = {
  ...defaultStartSelectButton,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getAllByRole('button')[0]);
  },
};
