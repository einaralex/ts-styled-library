import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import B from '../b';

export default {
  title: 'Example/B',
  component: B,
} as ComponentMeta<typeof B>;

const Template: ComponentStory<typeof B> = (args) => <B {...args} />;


export const Default = Template.bind({});
Default.args = {};

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };