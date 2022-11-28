import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "../components/shared/Loader";
export default { title: "Loader", component: Loader } as ComponentMeta<
  typeof Loader
>;
const Template: ComponentStory<typeof Loader> = (args) => <Loader />;
export const Regular = Template.bind({});
