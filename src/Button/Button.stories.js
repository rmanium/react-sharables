import React from 'react';
import Button from './Button';
// import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Elements/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  text: 'This is a button!',
};
