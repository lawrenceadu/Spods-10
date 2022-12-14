import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'hi',
  height: 1,
  type: 'button',
};
