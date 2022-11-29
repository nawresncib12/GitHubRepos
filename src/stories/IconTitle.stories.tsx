import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconTitle from "../components/shared/IconTitle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default {
  title: "IconTitle",
  component: IconTitle,
} as ComponentMeta<typeof IconTitle>;
const Template: ComponentStory<typeof IconTitle> = (args) => (
  <IconTitle {...args} />
);
export const Regular = Template.bind({});
Regular.args = {
  icon: faLinkedin,
  color: "#0072b1",
  text: "linkedin.com/in/nawres-ncib/",
};
