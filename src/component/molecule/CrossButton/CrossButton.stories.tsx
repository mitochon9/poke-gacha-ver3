import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { CrossButton } from './CrossButton';
import { crossButtonProps } from './CrossButton.props';
import { CrossButtonProps } from './CrossButton.type';

type Story = ComponentStoryObj<typeof CrossButton>;

export default {
  title: 'molecule/CrossButton',
  component: CrossButton,
} as ComponentMeta<typeof CrossButton>;

const defaultCrossButton: CrossButtonProps = {
  isAnimation: false,
};

export const Default: Story = {
  args: defaultCrossButton,
};

export const DisabledButton: Story = {
  args: { ...defaultCrossButton, isAnimation: true },
};

export const ClickButtonUp: Story = {
  ...defaultCrossButton,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(/▲/));
  },
};
