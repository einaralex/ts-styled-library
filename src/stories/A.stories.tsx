import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { A } from '../'

export default {
  title: 'Example/A',
  component: A,
} as ComponentMeta<typeof A>;

const Template: ComponentStory<any> = (args) => <A {...args} />;


export const Default = Template.bind({});
Default.args = {};

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };