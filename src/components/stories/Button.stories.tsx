import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    loading: false
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

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true
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
