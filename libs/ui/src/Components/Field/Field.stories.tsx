import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Field } from './Field';

export default {
  component: Field,
  title: 'Components/Field',
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'firstName',
  value: '',
  placeholder: 'First Name',
  component: 'input',
  onChange: ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(currentTarget.value);
  },
};
