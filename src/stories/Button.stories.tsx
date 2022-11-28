import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/shared/Button";
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  text: "Button",
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  text: "Button",
};
