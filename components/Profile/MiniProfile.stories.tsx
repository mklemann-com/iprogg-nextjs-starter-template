import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MiniProfile from './MiniProfile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MiniProfile',
  component: MiniProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MiniProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MiniProfile> = (args) => (
  <MiniProfile {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'Markus',
  email: 'email@mklemann.com',
  imageUrl: 'https://i.pravatar.cc/300',
};
