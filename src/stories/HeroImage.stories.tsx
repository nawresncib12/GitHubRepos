import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImage from "../components/Home/HeroImage";
export default { title: "HeroImage", component: HeroImage } as ComponentMeta<
  typeof HeroImage
>;
const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage />;
export const Regular = Template.bind({});
