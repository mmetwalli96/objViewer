import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from '@storybook/react';
import MyButton from './MyButton';

const meta: ComponentMeta<typeof MyButton> = {
  title: 'Design System/MyButton',
  component: MyButton,
};
export default meta;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = { disabled: false, children: 'Hello' };
