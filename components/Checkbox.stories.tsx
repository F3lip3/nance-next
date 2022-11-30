import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Componets/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox'
  },
  argTypes: {
    id: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    Story => {
      return (
        <label className="flex items-center gap-2" htmlFor="checkbox">
          {Story()}
          <Text size="sm">Keep conected for 30 days</Text>
        </label>
      );
    }
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
