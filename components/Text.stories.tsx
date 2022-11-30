import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Componets/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Text'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'xs'
  }
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Custom component using paragraph</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};
