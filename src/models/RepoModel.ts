import OwnerModel from "./OwnerModel";

export default interface RepoModel {
  id: number;
  created_at: string;
  description: string;
  language: string;
  name: string;
  owner: OwnerModel;
  updated_at: string;
  html_url: string;
  visibility: string;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
}
