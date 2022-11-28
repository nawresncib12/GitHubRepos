import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;
const Template: ComponentStory<typeof Navbar> = () => (
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
);
export const Regular = Template.bind({});
