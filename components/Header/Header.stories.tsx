import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'components/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedIn.args = {
  ...mockHeaderProps.loggedIn,
} as IHeader;

export const LoggedOut = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedOut.args = {
  ...mockHeaderProps.loggedOut,
} as IHeader;
