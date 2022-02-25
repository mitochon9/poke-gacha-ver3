import { ComponentMeta, Story } from '@storybook/react';
import { AbButton } from './AbButton';
import { AbButtonProps } from './AbButton.type';

export default {
  title: 'molecule/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: Story<AbButtonProps> = (args) => <AbButton {...args} />;

export const Default = Template.bind({});
Default.args;

export const IsAnimation = Template.bind({});
IsAnimation.args = { isAnimation: true };
