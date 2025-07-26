import Spacer from '@/components/Spacer';

import Button from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    title: {
      control: 'text'
    },
    variant: {
      options: ['blue', 'green', 'red', 'orange', 'darkBlue', 'black'],
      control: { type: 'select' }
    },
    type: {
      options: ['primary', 'secondary', 'text', 'neutral'],
      control: { type: 'select' }
    },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' }
    },
    iconVariant: {
      options: ['outline', 'solid', 'bulk'],
      control: { type: 'select' }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' }
  }
};

export const ToStorybook = ({
  ...props
}: {
  name: string;
  args: {
    title?: string;
    type?: 'primary' | 'secondary' | 'text' | 'neutral';
    variant?: 'blue' | 'darkBlue' | 'red' | 'green' | 'orange' | 'black';
  };
}) => {
  return (
    <div>
      <Button {...props} title="Button" />
      <Spacer size={24} />
      <Button {...props} iconPrefix="WarningError" />
      <Spacer size={24} />
      <Button {...props} iconSuffix="WarningError" />
    </div>
  );
};

ToStorybook.storyName = 'Button';
ToStorybook.story = {
  args: {
    title: 'Button',
    variant: 'blue',
    type: 'primary',
    iconSuffix: 'Alarm',
    iconPrefix: 'Alarm',
    iconVariant: 'outline'
  }
};
