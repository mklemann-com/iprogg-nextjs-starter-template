import { ComponentMeta, ComponentStory } from '@storybook/react';
import Profile, { IProfile } from './Profile';
import { mockProfileProps } from './Profile.mocks';

export default {
  title: 'components/Profile',
  component: Profile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Profile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProfileProps.base,
} as IProfile;
