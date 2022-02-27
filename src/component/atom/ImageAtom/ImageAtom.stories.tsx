import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ImageProps } from 'next/image';
import { ImageAtom } from './ImageAtom';

type Story = ComponentStoryObj<typeof ImageAtom>;

export default {
  title: 'atom/ImageAtom',
  component: ImageAtom,
} as ComponentMeta<typeof ImageAtom>;

const defaultImageAtom: ImageProps = {
  src: '/red.png',
  alt: 'red',
  width: 100,
  height: 100,
};

export const Red: Story = {
  args: {
    ...defaultImageAtom,
    src: '/red.png',
    alt: 'red',
    width: 100,
    height: 100,
  },
};

export const Hitokage: Story = {
  args: {
    ...defaultImageAtom,
    src: '/hitokage.png',
    alt: 'hitokage',
    width: 80,
    height: 80,
  },
};
