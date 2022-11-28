import { ComponentStory, ComponentMeta } from "@storybook/react";
import RotatingImages from "../components/Search/RotatingImages";
export default {
  title: "RotatingImages",
  component: RotatingImages,
} as ComponentMeta<typeof RotatingImages>;
const Template: ComponentStory<typeof RotatingImages> = (args) => (
  <RotatingImages {...args} />
);
export const Regular = Template.bind({});
Regular.args = {
  fade: false,
};
