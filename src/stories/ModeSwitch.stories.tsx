import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModeSwitch from "../components/shared/ModeSwitch";
export default {
  title: "ModeSwitch",
  component: ModeSwitch,
} as ComponentMeta<typeof ModeSwitch>;
const Template: ComponentStory<typeof ModeSwitch> = (args) => <ModeSwitch {...args} />;
export const Light = Template.bind({});
Light.args = {
  mode: "light"
};
export const Dark = Template.bind({});
Dark.args = {
  mode: "dark"
};
