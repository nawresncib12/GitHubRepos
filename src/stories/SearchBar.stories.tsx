import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBar from "../components/shared/SearchBar";
export default { title: "SearchBar", component: SearchBar } as ComponentMeta<
  typeof SearchBar
>;
const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);
export const Regular = Template.bind({});
