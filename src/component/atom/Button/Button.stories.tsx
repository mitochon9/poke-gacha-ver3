import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

type Story = ComponentStoryObj<typeof Button>;

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const defaultButton: ButtonProps = {
  children: '',
  disabled: false,
  onClick: () => console.log('click default'),
};

export const Default: Story = {
  args: defaultButton,
};

export const ButtonA: Story = {
  args: {
    ...defaultButton,
    children: 'A',
    variant: 'rounded',
    onClick: () => console.log('click A'),
  },
};
export const ButtonB: Story = {
  args: {
    ...defaultButton,
    children: 'B',
    variant: 'rounded',
    onClick: () => console.log('click B'),
  },
};

export const CrossUp: Story = {
  args: { ...defaultButton, children: '▲', variant: 'square' },
};
export const CrossDown: Story = {
  args: { ...defaultButton, children: '▼', variant: 'square' },
};
export const CrossLeft: Story = {
  args: { ...defaultButton, children: '◀', variant: 'square' },
};
export const CrossRight: Story = {
  args: { ...defaultButton, children: '▶', variant: 'square' },
};

export const ButtonStart: Story = {
  args: { ...defaultButton, variant: 'ellipse' },
};
export const ButtonSelect: Story = {
  args: { ...defaultButton, variant: 'ellipse' },
};
