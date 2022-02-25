import { ComponentMeta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '',
};

export const ButtonA = Template.bind({});
ButtonA.args = {
  children: 'A',
  disabled: false,
  variant: 'rounded',
  onClick: () => alert('click A'),
};
export const ButtonB = Template.bind({});
ButtonB.args = {
  children: 'B',
  disabled: false,
  variant: 'rounded',
  onClick: () => alert('click B'),
};

export const CrossUp = Template.bind({});
CrossUp.args = {
  children: '▲',
  variant: 'square',
};
export const CrossDown = Template.bind({});
CrossDown.args = {
  children: '▼',
  variant: 'square',
};
export const CrossLeft = Template.bind({});
CrossLeft.args = {
  children: '◀',
  variant: 'square',
};
export const CrossRight = Template.bind({});
CrossRight.args = {
  children: '▶',
  variant: 'square',
};

export const ButtonStart = Template.bind({});
ButtonStart.args = {
  variant: 'ellipse',
};

export const ButtonSelect = Template.bind({});
ButtonSelect.args = {
  variant: 'ellipse',
};
