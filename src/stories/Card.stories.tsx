import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../components/Repos/Card";
export default { title: "Card", component: Card } as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  repo: {
    id: 1,
    created_at: "2022-11-25T09:51:07Z",
    description:
      "A reponsive interface that displays github repositories and allows users to filter through them by name using a search bar",
    language: "TypeScript",
    name: "GitHubRepos",
    owner: {
      login: "nawresncib12",
      avatar_url: "https://avatars.githubusercontent.com/u/80575239?v=4",
      html_url: "https://github.com/nawresncib12",
    },
    updated_at: "2022-11-25T10:05:48Z",
    html_url: "https://github.com/nawresncib12/GitHubRepos",
    visibility: "public",
    watchers_count: 2,
    stargazers_count: 2,
    forks_count: 2,
  },
};
